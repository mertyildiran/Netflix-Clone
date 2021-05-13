import React from 'react';

const footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      &copy; 2018 Made with ❤️ by{' '}
      <a className="footer__copyright--link" href="http://andresio.com">
        {' '}
        Andres Alcocer
        {' '}
      </a>
      and mocked with 🐈 by {' '}
      <a className="footer__copyright--link" href="https://mockintosh.io">
        {' '}
        Mockintosh
      </a>
    </div>
  </footer>
);

export default footer;
