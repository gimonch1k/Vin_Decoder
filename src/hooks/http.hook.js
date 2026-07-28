import { useState, useCallback } from "react";

export function useHttp() {
  const [process, setProcess] = useState("idle");

  const request = useCallback(async (url) => {
    setProcess("loading");

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Щось не так із сервером... URL: ${url}, status: ${response.status}`,
        );
      }

      return await response.json();
    } catch (e) {
      setProcess("error");
      throw e;
    }
  }, []);

  const setConfirmedProcess = () => setProcess("confirmed");

  return { process, request, setConfirmedProcess };
}
