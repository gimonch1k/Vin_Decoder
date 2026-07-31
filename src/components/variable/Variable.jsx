import { Link } from "react-router";

import "./variable.scss";

function Variable({ data }) {
  return (
    <>
      <div className="variable">
        <div className="variable__id">ID:{data.ID}</div>
        <div className="variable__text">Name: {data.Name}</div>
        <div className="variable__text">Group: {data.GroupName}</div>
        <div className="variable__text">
          Description:{" "}
          {data.Description?.replace(/<[^>]+>/g, "") || "No description"}
        </div>
      </div>
      <Link to="/variables" className="variable__return">
        Back to all
      </Link>
    </>
  );
}

export default Variable;
