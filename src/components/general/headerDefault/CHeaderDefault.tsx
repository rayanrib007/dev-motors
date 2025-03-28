"use client";
import Link from "next/link";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";

export default function CHeaderDefault() {
  const [top, setTop] = useState(true);

  function scrollHandler() {
    window.scrollY > 0 ? setTop(false) : setTop(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [top]);

  return (
    <header className={`${styles.header} ${!top && styles.fixed}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLogo}>
            <Link href="/">Dev Motors</Link>
          </div>
          <nav className={styles.nav}>
            <Link href="/">HOME</Link>
            <Link href="/#services">SERVIÇOS</Link>
            <Link href="/#contacts">CONTATOS</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
