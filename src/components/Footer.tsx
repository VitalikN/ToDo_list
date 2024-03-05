"use client";

import Link from "next/link";
import s from "../sass/layouts/footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={s.footer__section}>
      <div className={`${s.footer__container} ${s.container}`}>
        <p className={s.footer__text}>
          Developer:
          <Link
            className={s.footer__link}
            href="https://github.com/VitalikN"
            target="_blank"
          >
            Vitalii Nozhenko
          </Link>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
