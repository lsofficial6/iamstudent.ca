import React from 'react';
import Employe from './Employe';


const Three =(prop)=>{
    return (
      
        <tr >
        <td>{prop.id}</td>
        <td>{prop.name}</td>    
        <td>{prop.designation}</td>    
        <td>{prop.contact
        }</td>    
        </tr>
        
    );
};
export default Three;
