"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }: { href: string; title: string }) => {
  const pathName = usePathname();

  return (
    <Link className="relative group font-medium text-xs" href={href}>
      {title}
      <span
        className={`
          h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${pathName === href ? "w-full" : "w-0"}
          `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default NavLink;
