import classNames from 'classnames';
import React, { useState } from 'react';

interface IAccordionProps {
  title: React.ReactNode;
  titleClassName?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<IAccordionProps> = (props) => {
  const { title, titleClassName, children, defaultOpen = false } = props;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button className={classNames('flex', titleClassName)} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className={classNames(
            'h-5 w-5 transform transition-transform duration-300 ease-in-out',
            isOpen ? 'rotate-180' : ''
          )}
        >
          <g style={{ opacity: 0.15 }} transform="translate(-0.001)">
            <g transform="translate(0.001)">
              <path
                style={{ fill: '#325baf' }}
                d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm4.512,8.776-3.736,3.736a.914.914,0,0,1-.125.158.951.951,0,0,1-1.479-.158L5.42,8.76A.933.933,0,1,1,6.74,7.44l3.235,3.234,3.217-3.218a.934.934,0,0,1,1.321,1.32Z"
                transform="translate(-0.001)"
              />
            </g>
          </g>
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
