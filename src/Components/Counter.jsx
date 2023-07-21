import React, { useState } from 'react'
import AccordionOne from './Accordion/AccordionOne';
import AccordionTwo from './Accordion/AccordionTwo';

const Counter=()=>{
    const [data , newData]= useState(0);
    const [star, newStar]= useState("  ");
    const [print, newPrint] = useState(" ");

    

    
const submit=()=>{
    if(data<=0){ newStar("kindly rate before submitting") }
    else{
     alert(
    `thanks for your rating us
    you rated us ${data} Stars
    we value your feedback`)
}}
const increment=()=>{
    if (data<5) {newData(data+1); newStar(" ")}
else{{newData(5);  newStar("rate between 0 to 5")}}}

const decrement=()=>{
    if (data>0) {newData(data-1); newStar(" ")}
else{{newData(0); newStar("rate between 0 to 5")}}}

    return(
        <>
        <div className="counter">
        <h1 className='display-5 mt-5'>Star rating for Our Team</h1><br />
    
            <h1> {data}</h1>
            <p style={{color:"red"}}>{star}</p>
            
            <div>
            <button className='btn btn-primary mx-1' onClick={increment}> plus </button>
            <button className='btn btn-primary mx-1' onClick={decrement}> minus </button>
            <button className='btn btn-primary mx-1' onClick={()=>{newData(0)}}> AC </button>
</div>
<div>
  <button type='submit'onClick={submit} className='btn btn-warning'>Submit</button>
</div>
        </div>





        {/* Accordion */}
        <AccordionTwo/>
</>
    )
}


export default Counter;
