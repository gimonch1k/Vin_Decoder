import { useState, useEffect } from "react";

import useVinDecoder from "../services/VinDecoder";
import VariablesList from "../components/variablesList/VariablesList";

function VariablesPage() {
  const [variables, setVariables] = useState([]);
  const { process, setConfirmedProcess, getVehicleVariablesList } =
    useVinDecoder();

  useEffect(() => {
    getVehicleVariablesList().then((variables) => {
      setVariables(variables);
      setConfirmedProcess("confirmed");
    });
  }, []);

  return (
    <>
      <VariablesList variables={variables} process={process} />
    </>
  );
}

export default VariablesPage;
