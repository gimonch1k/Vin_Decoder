import { useState } from "react";

import useVinDecoder from "../services/VinDecoder";
import SearchPanel from "../components/searchPanel/SearchPanel";
import DecodeResult from "../components/decodeResult/DecodeResult";

function MainPage() {
  const [vehicle, setVehicle] = useState([]);
  const { process, setConfirmedProcess, getVehicleByVin } = useVinDecoder();

  return (
    <>
      <SearchPanel
        setVehicle={setVehicle}
        process={process}
        setConfirmedProcess={setConfirmedProcess}
        getVehicleByVin={getVehicleByVin}
      />

      <DecodeResult vehicle={vehicle} process={process} />
    </>
  );
}

export default MainPage;
