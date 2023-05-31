"use client";
import React, { ReactNode, useState } from "react";
import PortalModal from "./PortalModal";

const HamburgerIcon = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  // TODO: logo
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((o) => !o);
  };

  return (
    <div className="flex md:hidden">
      <button
        className="flex flex-col justify-center items-center"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        />
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        />
      </button>
      {isOpen ? (
        <PortalModal wrapperId="modal-id">{children}</PortalModal>
      ) : null}
    </div>
  );
};

export default HamburgerIcon;
