import setContent from "../../utils/SetContent";

import "./decodeResult.scss";

function DecodeResult({ vehicle, process }) {
  return (
    <div className="decoderesult">{setContent(process, View, vehicle)}</div>
  );
}

function View({ data }) {
  const content = data.map((item) => (
    <li className="decoderesult__item" key={item.VariableId}>
      <div className="decoderesult__variable">{item.Variable}</div>
      <div className="decoderesult__value">{item.Value}</div>
    </li>
  ));

  return (
    <>
      <h2 className="decoderesult__title">Результати розшифровки</h2>
      <ul className="decoderesult__list">{content}</ul>
    </>
  );
}

export default DecodeResult;
