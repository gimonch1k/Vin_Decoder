import { useHttp } from "../hooks/http.hook";

function useVinDecoder() {
  const _apiBase = "https://vpic.nhtsa.dot.gov/api";

  const { process, request, setConfirmedProcess } = useHttp();

  const getVehicleByVin = async (vin) => {
    const res = await request(
      `${_apiBase}/vehicles/decodevin/${vin}?format=json`,
    );

    return res.Results.filter((item) => item.Value);
  };

  return { process, setConfirmedProcess, getVehicleByVin };
}

export default useVinDecoder;
