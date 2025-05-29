import classNames from 'classnames';
import React, { useState } from 'react';

export interface ITab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface ITabsProps {
  tabs: ITab[];
  defaultTabId?: string;
  tabsClassName?: string;
  activeTabClassName?: string;
}

const Tabs: React.FC<ITabsProps> = (props) => {
  const { tabs, defaultTabId, tabsClassName, activeTabClassName } = props;

  const [activeTab, setActiveTab] = useState<string>(defaultTabId || tabs[0]?.id);

  return (
    <div>
      <nav
        className={classNames('-mb-px -mt-px flex space-x-8 pb-4', tabsClassName)}
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap border-b-2 px-1 py-1 text-sm transition-colors duration-200 ${
              activeTab === tab.id
                ? `rounded-sm border-b-2 border-[#23CEFD] font-bold ${activeTabClassName}`
                : 'border-transparent font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
};

export default Tabs;
