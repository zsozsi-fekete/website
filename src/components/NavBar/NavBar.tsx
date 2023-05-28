import Logo from "../Logo";
import NavLink from "./NavLink";

const NavBar = () => {
  // TODO: logo
  return (
    <header className="fixed w-full z-30 md:bg-opacity-80 transition duration-300 ease-in-out bg-white backdrop-blur shadow-lg dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-8">
          <nav className="hidden md:flex md:flex-grow">
            <ul className="flex gap-8 flex-grow justify-end flex-wrap items-center">
              <NavLink href="/" title="Home" />
              <NavLink href="/about" title="About" />
              <NavLink href="/projects" title="Projects" />
              <NavLink href="/articles" title="Articles" />
            </ul>
          </nav>
          {/* <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
