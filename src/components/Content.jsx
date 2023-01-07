/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import PasswordContext from '../context/PasswordContext';

function Content() {
  const { password } = useContext(PasswordContext);

  return (
    <section className="content">
      <h1 className="content__title">Generate Password</h1>
      <div className="content__container">
        <h2 className="content__container-title">Your Password</h2>
        <p className="content__container-password">{password}</p>
      </div>
    </section>
  );
}

export default Content;
