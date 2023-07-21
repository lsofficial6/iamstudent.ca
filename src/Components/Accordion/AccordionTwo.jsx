import React from 'react';

import AccordionData from './AccordionData';
import AccordionOne from './AccordionOne';

const mcard=(value)=>{
    return(
        <>
        <AccordionOne
        id={value.id}
        qus={value.question}
        ans={value.answer} />
        </>
       )
}

const AccordionTwo=()=>{
    return(
        <>
<div class="jumbotron jumbotron-fluid mt-5">
  <div class="container">
    <h1 class="display-4 text-center">Frequently Asked Questions</h1>
  </div>
</div>



         {AccordionData.map(mcard)}
        </>
    )
}

export default AccordionTwo;
