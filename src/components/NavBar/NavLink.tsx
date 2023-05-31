"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }: { href: string; title: string }) => {
  const pathName = usePathname();

  return (
    <Link className="relative group font-medium text-base " href={href}>
      {title}
      <span
        className={`
          h-[2px] w-full inline-block  absolute left-0 -bottom-0.5
          nav-link-transition-init group-hover:nav-link-transition-hover
          ${pathName === href ? "bg-[length:100%_2px]" : ""}
          `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default NavLink;
