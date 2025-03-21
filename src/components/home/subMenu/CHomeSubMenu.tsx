"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { ISubMenuInfosPagesProtocol } from "@/interfaces/IPages";

export default function CHomeSubMenu({
  subMenuInfosPages,
}: {
  subMenuInfosPages: ISubMenuInfosPagesProtocol;
}) {
  const [isOpen, setIsOpen] = useState(false);

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
        {subMenuInfosPages.objects.map((infosPage) => (
          <li key={infosPage.slug}>
            <Link href={`/post/${infosPage.slug}`}>{infosPage.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
