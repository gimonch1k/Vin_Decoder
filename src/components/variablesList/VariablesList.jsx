import { Link } from "react-router";

import setContent from "../../utils/SetContent";

import "./variablesList.scss";

function VariablesList({ variables, process }) {
  return (
    <ul className="variableslist">
      {setContent(process, View, variables, false)}
    </ul>
  );
}

function View({ data }) {
  const content = data.map((item) => (
    <li className="variableslist__item" key={item.ID}>
      <Link to={`/variables/${item.ID}`} className="variableslist__link">
        <div className="variableslist__text">{item.Name}</div>
        <div className="variableslist__text">ID:{item.ID}</div>
        <div className="variableslist__text">{item.GroupName}</div>
        <div className="variableslist__text">
          {item.Description.replace(/<[^>]+>/g, "").slice(0, 70)}...
        </div>
      </Link>
    </li>
  ));

  return content;
}

export default VariablesList;
