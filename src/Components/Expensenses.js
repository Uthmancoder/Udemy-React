import React from "react";
import ExpenseItems from "./ExpenseItems";

const Expenses = () => {
  const expenses = [
    {
      id: 1,
      items: "Toilet Paper",
      date: new Date(2023, 4, 2),
      price: "$999",
    },
    {
      id: 2,
      items: "Mega Dozer",
      date: new Date(2023, 4, 22),
      price: "$1099",
    },
    {
      id: 3,
      items: "Washing Machine",
      date: new Date(2023, 4, 13),
      price: " $2899",
    },
    {
      id: 4,
      items: "Dish Washer",
      date: new Date(2023, 4, 31),
      price: "$1920",
    },
  ];

  return (
    <div>
      <div className="expenses my-2">
        <div className="bbb w-100 my-3">
          {expenses.map((expense) => (
           <ExpenseItems
           key={expense.id}
           title={expense.items} 
           amount={expense.price}
           date={expense.date}
         />         
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
