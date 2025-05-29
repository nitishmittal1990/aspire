import React from 'react';

interface ISidebarProps {
  children: React.ReactNode;
}

const Sidebar = (props: ISidebarProps): React.ReactElement => {
  const { children } = props;

  return (
    <aside className="bg-secondary fixed bottom-0 left-0 h-screen w-[340px] p-10 lg:top-0">
      <a href="/" className="mb-5 block">
        <img src="/images/logo@3x.png" width="125" alt="logo" />
      </a>
      <p className="text-[15px] font-light text-white/30">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>
      {children}
    </aside>
  );
};

export default Sidebar;
