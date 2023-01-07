import React from 'react';

import { BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__text">Created by Marcelo Ferreire Cruz</div>
        <a
          href="https://github.com/MarceloDevCruz"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="footer__icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
