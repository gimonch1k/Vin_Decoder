import { useState } from "react";

import useVinDecoder from "../services/VinDecoder";
import SearchPanel from "../components/searchPanel/SearchPanel";
import DecodeResult from "../components/decodeResult/DecodeResult";
import History from "../components/history/History";

function MainPage() {
  const [vehicle, setVehicle] = useState([]);
  const [history, setHistory] = useState([]);
  const { process, setConfirmedProcess, getVehicleByVin } = useVinDecoder();

  const requestVehicle = (vin) => {
    getVehicleByVin(vin).then((vehicle) => {
      setVehicle(vehicle);

      setHistory((prev) => {
        const make = vehicle.find((item) => item.Variable === "Make")?.Value;
        const model = vehicle.find((item) => item.Variable === "Model")?.Value;

        const newItem = {
          vin,
          make,
          model,
        };

        const updatedHistory = [
          newItem,
          ...prev.filter((item) => item.vin !== vin),
        ];

        return updatedHistory.slice(0, 3);
      });

      setConfirmedProcess("confirmed");
    });
  };

  return (
    <>
      <History history={history} requestVehicle={requestVehicle} />

      <SearchPanel
        setVehicle={setVehicle}
        process={process}
        requestVehicle={requestVehicle}
      />

      <DecodeResult vehicle={vehicle} process={process} />
    </>
  );
}

export default MainPage;
