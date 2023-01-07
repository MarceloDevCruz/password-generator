import React from 'react';

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="sidebar__container">
          <span className="sidebar__numbers sidebar__numbers-min">6</span>
          <span className="sidebar__numbers sidebar__numbers-max">45</span>
          <h4 className="sidebar__title">Configure your password</h4>
          <form className="sidebar__form">
            <h5 className="sidebar__length">Length</h5>
            <div className="sidebar__range-container">
              <input type="range" min="6" max="40" className="sidebar__range" />
            </div>

            <div className="sidebar__input-container">
              <label htmlFor="uppercase" className="sidebar__label">
                uppercase letters
                <input
                  type="checkbox"
                  id="uppercase"
                  className="sidebar__checkbox"
                />
              </label>

              <label htmlFor="lowercase" className="sidebar__label">
                lowercase letters
                <input
                  id="lowercase"
                  type="checkbox"
                  className="sidebar__checkbox"
                />
              </label>

              <label htmlFor="numbers" className="sidebar__label">
                5umbers
                <input
                  id="numbers"
                  type="checkbox"
                  className="sidebar__checkbox"
                />
              </label>

              <label htmlFor="symbols" className="sidebar__label">
                $ymbols
                <input
                  id="symbols"
                  type="checkbox"
                  className="sidebar__checkbox"
                />
              </label>
            </div>
            <div className="button-container">
              <button className="btn" type="submit">
                Generate
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="sidebar__footer">
        <p className="sidebar__footer-text">Password Generator &copy;</p>
      </div>
    </>
  );
}

export default Sidebar;
