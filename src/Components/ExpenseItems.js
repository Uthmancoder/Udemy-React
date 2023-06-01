import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import { useState } from 'react';

const ExpenseItems = (props) => {
    const date = new Date(props.date);

    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () => { 
      setTitle("updated!");
      console.log(title);
    }
    
    return (
      <>
        <Card className='d-flex align-items-center justify-content-between widy w-100 p-3 my-5'>
          <div className='d-flex align-items-center'>
            <ExpenseDate date={date} />
            <div className='text-light fs-5 mx-3'>{title}</div> {/* Updated to use the title state */}
          </div>
          <button className='btn btn-light px-4'>{props.amount}</button> 
          <button onClick={clickHandler}>Change Title</button>
        </Card>
      </>
    );
    }    

export default ExpenseItems;
