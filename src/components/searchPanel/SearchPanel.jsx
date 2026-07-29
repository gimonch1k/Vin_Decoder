import { useForm } from "react-hook-form";
import { useState } from "react";

import "./searchPanel.scss";

function SearchPanel({
  setVehicle,
  process,
  setConfirmedProcess,
  getVehicleByVin,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const vin = watch("vin", "");

  const onSubmit = (data) => {
    getVehicleByVin(data.vin).then((vehicle) => {
      setVehicle(vehicle);
      setConfirmedProcess("confirmed");
    });
  };

  return (
    <form className="searchpanel" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="vin" className="searchpanel__title">
        Розшифрувати VIN-код
      </label>

      <div className="searchpanel__symbols">Symbols: {vin.length}</div>

      <input
        id="vin"
        type="text"
        className="searchpanel__vin"
        {...register("vin", {
          required: "Це поле є обов’язковим",
          validate: (value) =>
            value.length === 17 || "VIN має скаладатись із 17 символів",
          onChange: (e) => {
            e.target.value = e.target.value.toUpperCase().replace(/[IOQ]/g, "");
          },
        })}
      />

      <div className="searchpanel__messages">
        {errors.vin ? (
          <div className="searchpanel__error">{errors.vin.message}</div>
        ) : null}

        {process === "error" && (
          <div className="searchpanel__error">He правильний VIN-код</div>
        )}

        {process === "confirmed" && (
          <div className="searchpanel__success">Успішно</div>
        )}
      </div>

      <button disabled={process === "loading"} className="searchpanel__btn">
        Знайти
      </button>
    </form>
  );
}

export default SearchPanel;
