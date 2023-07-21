import React from 'react';
import Data from '../Components/Data';
import Three from './Three';

const ncard = (value) => {
  return (
    <Three
      id={value.id}
      name={value.name}
      designation={value.designation}
      contact={value.contact}
    />
  );
}

const Card = () => {
  return (
    <>
      <div className='container'>
        <h1 className='display-4 text-center py-3'>Our Employees</h1>
        <div className='table-responsive'>
          {/* Add the 'table-responsive' class to make the table responsive */}
          <table className='table bg-warning'>
            <thead className="text-center">
              <tr>
                <th>Sr.no</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {Data.map(ncard)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Card;
