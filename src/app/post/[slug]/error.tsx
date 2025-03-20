"use client";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function PPostError() {
  return (
    <div className={styles.error}>
      <h1>Ops, algo deu errado!</h1>
      <Link className={styles.link} href="/">
        Voltar para home
      </Link>
    </div>
  );
}
