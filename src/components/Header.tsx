"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { RiPlayListAddLine } from "react-icons/ri";
import s from "@/sass/layouts/header.module.scss";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={`${s.header} `}>
      <div className={`${s.container} ${s.container__header} `}>
        <Link
          href="/"
          className={`${s.navigation__link} ${
            pathname === "/" ? s.active : ""
          }`}
        >
          <FaHome />
        </Link>
        <Link
          href="/add_item"
          className={`${s.navigation__link} ${
            pathname === "/add_item" ? s.active : ""
          }`}
        >
          <RiPlayListAddLine />
        </Link>
      </div>
    </header>
  );
};
export default Header;
