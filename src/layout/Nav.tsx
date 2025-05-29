import React from 'react';

/**
 *
 * Nav component can be dynamic coming from API but since
 * requirement is to make card section interactive, I will make that section dynamic
 * and rest of the sections will be static.
 */

const Nav = (): React.ReactElement => {
  return (
    <nav className="lg:py-10" role="navigation" aria-label="navigation">
      <ul className="flex flex-row justify-between lg:flex-col lg:gap-10">
        <li>
          <a
            href="/"
            className="flex flex-col items-center gap-0.5 text-[9px] text-[#DDDDDD] lg:flex-row lg:gap-4 lg:text-lg lg:text-white"
          >
            <i className="icon-home text-2xl text-[#DDDDDD] lg:text-white" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary flex flex-col items-center gap-0.5 text-[9px] lg:flex-row lg:gap-4 lg:text-lg"
          >
            <i className="icon-card text-2xl text-[#DDDDDD] lg:text-white" />
            <span>Cards</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-col items-center gap-0.5 text-[9px] text-[#DDDDDD] lg:flex-row lg:gap-4 lg:text-lg lg:text-white"
          >
            <i className="icon-payments text-2xl text-[#DDDDDD] lg:text-white" />
            <span>Payments</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-col items-center gap-0.5 text-[9px] text-[#DDDDDD] lg:flex-row lg:gap-4 lg:text-lg lg:text-white"
          >
            <i className="icon-credit text-2xl text-[#DDDDDD] lg:text-white" />
            <span>Credit</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-col items-center gap-0.5 text-[9px] text-[#DDDDDD] lg:flex-row lg:gap-4 lg:text-lg lg:text-white"
          >
            <i className="icon-Account text-2xl text-[#DDDDDD] lg:text-white" />
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
