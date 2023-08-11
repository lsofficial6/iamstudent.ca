


import React, { useState } from 'react';

const Counter = () => {
  const [data, setData] = useState(0);
  const [star, setStar] = useState('');

  const submit = () => {
    if (data <= 0) {
      setStar('Kindly rate before submitting');
    } else {
      alert(
        `Thanks for your rating!
        You rated us ${data} Stars.
        We value your feedback.`
      );
    }
  };

  const increment = () => {
    if (data < 5) {
      setData(data + 1);
      setStar('');
    } else {
      setData(5);
      setStar('Rate between 0 to 5');
    }
  };

  const decrement = () => {
    if (data > 0) {
      setData(data - 1);
      setStar('');
    } else {
      setData(0);
      setStar('Rate between 0 to 5');
    }
  };

  return (
    <div className="counter">
      <h1 className='display-5 mt-5'>Star rating for Our Team</h1><br />
      <h1>{data}</h1>
      <p style={{ color: 'red' }}>{star}</p>
      <div>
        <button className='btn btn-primary mx-1' onClick={increment}>Plus</button>
        <button className='btn btn-primary mx-1' onClick={decrement}>Minus</button>
        <button className='btn btn-primary mx-1' onClick={() => { setData(0); setStar(''); }}>AC</button>
      </div>
      <div>
        <button type='submit' onClick={submit} className='btn btn-warning'>Submit</button>
      </div>
    </div>
  );
};

export default Counter;
