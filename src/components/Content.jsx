import React from 'react';

function Content() {
  return (
    <section className="content">
      <h1 className="content__title">Generate Password</h1>
      <div className="content__container">
        <h2 className="content__container-title">Your Password</h2>
        <div className="content__container-box">
          <span className="content__container-password">PASSWORD</span>
        </div>
      </div>
    </section>
  );
}

export default Content;
