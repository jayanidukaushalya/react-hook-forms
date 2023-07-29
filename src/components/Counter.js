import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <>
      <Button name="Decrease" onClick={handleDecrement} />
      <input
        type="number"
        value={value}
        style={{
          height: "25px",
          width: "50px",
          fontSize: "16px",
          textAlign: "center",
          borderRadius: "5px",
        }}
      />
      <Button name="Increase" setValue={setValue} onClick={handleIncrement} />
    </>
  );
}
