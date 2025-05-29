import React from 'react';

/**
 *
 * Nav component can be dynamic coming from API but since
 * requirement is to make card section interactive, I will make that section dynamic
 * and rest of the sections will be static.
 */

const Nav = (): React.ReactElement => {
  return (
    <nav className="lg:py-10">
      <ul className="flex flex-col gap-10">
        <li>
          <a href="/" className="flex items-center gap-4 text-white">
            <i className="icon-home text-2xl" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-primary flex items-center gap-4">
            <i className="icon-card text-2xl" />
            <span>Cards</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-4 text-white">
            <i className="icon-payments text-2xl" />
            <span>Payments</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-4 text-white">
            <i className="icon-credit text-2xl" />
            <span>Credit</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-4 text-white">
            <i className="icon-Account text-2xl" />
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
