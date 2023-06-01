import React from "react";
import NewExpence from "./Components/NewExpence";

const Newform = () => {
  const handleAdditems = (Expense) => {
    const newexpenseData = {
      ...Expense,
      id: Math.random().toString(),
    };
    console.log(newexpenseData);
  };
  return (
    <div>
      <NewExpence  additems={handleAdditems} />
    </div>
  );
};

export default Newform;
