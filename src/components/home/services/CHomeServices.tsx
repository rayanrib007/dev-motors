import { IHomeDataProtocol } from "@/interfaces/IPages";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function CHomeServices({
  homeData,
}: {
  homeData: IHomeDataProtocol;
}) {
  return (
    <>
      <section className={styles.containerAbout} id="services">
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
            priority={true}
            src={homeData.object.metadata.about.banner.url}
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
          />
        </div>
      </section>

      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

      <section className={styles.services}>
        {homeData.object.metadata.services.map((service) => (
          <article key={service.description} className={styles.service}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                alt="Imagem do serviço"
                quality={100}
                fill={true}
                priority={true}
                src={service.image.url}
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
              />
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
