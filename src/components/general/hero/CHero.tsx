import Image from "next/image";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

export default function CHero({
  heading,
  bannerUrl,
  buttonTitle,
  buttonUrl,
  icon,
}: {
  heading: string;
  bannerUrl: string;
  buttonTitle: string;
  buttonUrl: string;
  icon: ReactNode;
}) {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>
        <a className={styles.link} target="_blank" href={buttonUrl}>
          {icon}
          {buttonTitle}
        </a>
      </div>
      <div className={styles.contentBanner}>
        <Image
          className={styles.banner}
          src={bannerUrl}
          alt={heading}
          priority={true}
          fill={true}
        />
      </div>
    </main>
  );
}
