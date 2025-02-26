"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { ISubMenuInfosPagesProtocol } from "@/interfaces/IHome";

export default function CHomeSubMenu({
  subMenuInfosPages,
}: {
  subMenuInfosPages: ISubMenuInfosPagesProtocol;
}) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(subMenuInfosPages);

  useEffect(() => {
    function handleRessize() {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleRessize);
    return () => window.removeEventListener("resize", handleRessize);
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={34} color="#121212" />
        Serviços
      </div>
      <ul className={`${styles.ul} ${isOpen && styles.open}`}>
        {isOpen && (
          <button className={styles.closeSubmenu}>
            <X size={34} color="#121212" onClick={toggleMenu} />
          </button>
        )}
        <li>
          <Link href="/post/pagina-1">Página 1</Link>
        </li>
        <li>
          <Link href="/post/pagina-2">Página 2</Link>
        </li>
      </ul>
    </section>
  );
}
