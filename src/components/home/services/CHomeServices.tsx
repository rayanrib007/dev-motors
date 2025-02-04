import { IHomeDataProtocols } from "@/interfaces/IHome";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function CHomeServices({
  homeData,
}: {
  homeData: IHomeDataProtocols;
}) {
  return (
    <section className={styles.containerAbout}>
      <article className={styles.innerAbout}>
        <h1 className={styles.title}>Sobre</h1>
        <p>{homeData.object.metadata.about.description}</p>
      </article>
      <div className={styles.bannerAbout}>
        <Image
          className={styles.imageAbout}
          alt="Imagem ilustrativa sobre a empresa"
          quality={100}
          fill={true}
          src={homeData.object.metadata.about.banner.url}
        />
      </div>
    </section>
  );
}
