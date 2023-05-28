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
          h-[1px] w-full inline-block  absolute left-0 -bottom-0.5
          nav-link-transition-init group-hover:nav-link-transition-hover
          ${pathName === href ? "bg-[length:100%_1px]" : ""}
          `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default NavLink;
