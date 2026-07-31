import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Variable from "../components/variable/Variable";
import useVinDecoder from "../services/VinDecoder";
import setContent from "../utils/SetContent";

function VariablePage() {
  const [variable, setVariable] = useState({});
  const { id } = useParams();

  const { process, setConfirmedProcess, getVehicleVariablesList } =
    useVinDecoder();

  useEffect(() => {
    getVehicleVariablesList().then((variables) => {
      const result = variables.find((item) => item.ID === +id);
      setVariable(result);
      setConfirmedProcess("confirmed");
    });
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      {setContent(process, Variable, variable, false)}
    </div>
  );
}

export default VariablePage;
