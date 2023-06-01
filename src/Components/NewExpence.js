import React, { useState } from "react";

const NewExpence = (props) => {
  const [newEnteredTitle, setnewEnteredTitle] = useState("");
  const [newEnteredAmount, setnewEnteredAmount] = useState("");
  const [newEnteredDate, setnewEnteredDate] = useState("");
  const TitleChangeHandler = (event) => {
    setnewEnteredTitle(event.target.value);
  };
  const DateChangeHandler = (event) => {
    setnewEnteredDate(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    setnewEnteredAmount(event.target.value);
  };
  const HandleSubmit = (ev) => {
    ev.preventDefault();

    const NewExpenseData = {
      title: newEnteredTitle,
      amount: newEnteredAmount,
      date: new Date(newEnteredDate),
    };

    props.onSaveNewitem(NewExpenseData);
    setnewEnteredTitle("");
    setnewEnteredAmount("");
    setnewEnteredDate("");
  };

  return (
    <div>
      <form
        onSubmit={HandleSubmit}
        className="card bg-info border w-50 mx-auto text-start py-1 px-5"
      >
        <div className="mx-auto w-100">
          <label>Title</label>
          <input
            className="form-control w-100"
            onChange={TitleChangeHandler}
            name="newEnteredTitle"
            type="tetxt"
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            className="form-control w-100"
            onChange={AmountChangeHandler}
            type="Number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div>
          <label>Date</label>
          <input
            className="form-control w-100"
            onChange={DateChangeHandler}
            type="date"
            min="2023-04-04"
            max="2025-11-31"
          />
        </div>
        <div className="my-2 ">
          <button type="submit" className="btn btn-dark ">
            Add Items
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewExpence;
