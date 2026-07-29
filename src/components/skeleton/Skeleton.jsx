import "./skeleton.scss";

function Skeleton() {
  return (
    <div className="skeleton">
      <h2 className="skeleton__title">
        Поле для відображення результату розшифровки
      </h2>
      <div className="skeleton__rectangles">
        <div className="skeleton__rectangle"></div>
        <div className="skeleton__rectangle"></div>
        <div className="skeleton__rectangle"></div>
      </div>
    </div>
  );
}

export default Skeleton;
