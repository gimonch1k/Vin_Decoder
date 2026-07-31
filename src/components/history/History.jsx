import nothing from "../../assets/nothing.png";

import "./history.scss";

function History({ history, requestVehicle }) {
  return (
    <div className="history">
      <h2 className="history__title">Історія VIN-кодів</h2>
      {history.length === 0 ? (
        <img src={nothing} alt="nothing" className="history__nothing" />
      ) : (
        <View data={history} requestVehicle={requestVehicle} />
      )}
    </div>
  );
}

function View({ data, requestVehicle }) {
  const content = data.map((item, i) => (
    <li
      className="history__item"
      key={i}
      onClick={() => requestVehicle(item.vin)}
    >
      <div className="history__text">{item.vin}</div>
      <div className="history__text">{item.make}</div>
      <div className="history__text">{item.model}</div>
    </li>
  ));

  return <ul className="history__items">{content}</ul>;
}

export default History;
