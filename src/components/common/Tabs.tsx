import React, { useState } from 'react';

export interface ITab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface ITabsProps {
  tabs: ITab[];
  defaultTabId?: string;
}

const Tabs: React.FC<ITabsProps> = ({ tabs, defaultTabId }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTabId || tabs[0]?.id);

  return (
    <div>
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap border-b-2 px-1 py-1 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'rounded-sm border-b-2 border-[#23CEFD] text-[#222222]'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="mt-4">{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
};

export default Tabs;
