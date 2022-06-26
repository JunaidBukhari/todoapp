import React from 'react';
import Login from '../components/login';

const Auth = () => {
  return (
    <div
      style={{ backgroundColor: 'rgb(179 179 179 / 70%)' }}
      className='mt-5 container p-5 d-flex justify-content-center'
    >
      <div className='col-xl-8 col-lg-8 col-md-12'>
        <Login />
      </div>
    </div>
  );
};

export default Auth;
