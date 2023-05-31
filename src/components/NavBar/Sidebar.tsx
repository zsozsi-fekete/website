import React from "react";
import NavLink from "./NavLink";

const Sidebar = () => {
  return (
    <div className="animate-modal fixed top-12 left-0 h-screen py-16 z-40 w-full overflow-scroll bg-white backdrop-blur shadow-lg dark:bg-neutral-900/90">
      <nav className="flex">
        <ul className="flex flex-col gap-8 flex-grow justify-end flex-wrap items-center">
          <NavLink href="/" title="Home" />
          <NavLink href="/about" title="About" />
          <NavLink href="/projects" title="Projects" />
          <NavLink href="/articles" title="Articles" />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
