import { useForm } from "react-hook-form";
import { useState } from "react";

import "./searchPanel.scss";

function SearchPanel() {
  const [status, setStatus] = useState("nothing");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {};

  return (
    <form action="#" className="searchpanel">
      <label htmlFor="vin" className="searchpanel__title">
        Розшифрувати VIN-код
      </label>

      <input id="vin" name="vin" type="text" className="searchpanel__vin" />

      <button className="searchpanel__btn">Знайти</button>
    </form>
  );
}

export default SearchPanel;
