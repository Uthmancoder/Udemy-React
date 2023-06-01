import React from 'react'
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString("en-US", { month: "short" });
    const date = props.date.toLocaleString("en-US", { day: "2-digit" });    
    const year = props.date.getFullYear();
    return (
        <div>
            <div className='date_div'>
                <div className='text-light fs-5  py-2 px-4 border rounded-3 w-100 bg-dark shadow'>
                    <h6>{month}</h6>
                    <h6>{year}</h6>
                    <h6>{date}</h6>
                </div>
            </div>
        </div>
    )
}

export default ExpenseDate;