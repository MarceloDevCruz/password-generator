import React, { useContext, useState } from 'react';
import PasswordContext from '../context/PasswordContext';
import useGeneratePassword from '../hook/useGeneratePassword';

function Sidebar() {
  const { setPassword } = useContext(PasswordContext);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [length, setLength] = useState(10);

  const handleForm = (e) => {
    e.preventDefault();

    setPassword(
      useGeneratePassword(length, uppercase, lowercase, numbers, symbols)
    );
  };

  return (
    <>
      <section className="sidebar">
        <div className="sidebar__container">
          <h4 className="sidebar__title">Configure your password</h4>
          <form className="sidebar__form" onSubmit={handleForm}>
            <h5 className="sidebar__length">Length: {length}</h5>
            <div className="sidebar__range-container">
              <span className="sidebar__numbers sidebar__numbers-min">8</span>
              <span className="sidebar__numbers sidebar__numbers-max">80</span>
              <input
                type="range"
                min="8"
                max="80"
                value={length}
                className="sidebar__range"
                onChange={(e) => setLength(e.target.value)}
              />
            </div>

            <div className="sidebar__input-container">
              <label htmlFor="uppercase" className="sidebar__label">
                uppercase letters:
                <input
                  type="checkbox"
                  id="uppercase"
                  className="sidebar__checkbox"
                  value={uppercase}
                  onChange={() => setUppercase(!uppercase)}
                />
              </label>

              <label htmlFor="lowercase" className="sidebar__label">
                lowercase letters:
                <input
                  id="lowercase"
                  type="checkbox"
                  className="sidebar__checkbox"
                  value={lowercase}
                  onChange={() => setLowercase(!lowercase)}
                />
              </label>

              <label htmlFor="numbers" className="sidebar__label">
                5umbers:
                <input
                  id="numbers"
                  type="checkbox"
                  className="sidebar__checkbox"
                  value={numbers}
                  onChange={() => setNumbers(!numbers)}
                />
              </label>

              <label htmlFor="symbols" className="sidebar__label">
                $ymbols:
                <input
                  id="symbols"
                  type="checkbox"
                  className="sidebar__checkbox"
                  value={symbols}
                  onChange={() => setSymbols(!symbols)}
                />
              </label>
            </div>
            <div className="sidebar__button">
              <button className="btn btn-primary" type="submit">
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
