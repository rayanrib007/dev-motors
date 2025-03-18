import CHero from "@/components/general/hero/CHero";
import { IPagesDataProtocol } from "@/interfaces/IPages";
import { Phone } from "lucide-react";
import CTNCenterElementOnPage from "../general/CTNCenterElementOnPage";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function CTNViewPage({
  dataPage,
}: {
  dataPage: IPagesDataProtocol;
}) {
  return (
    <>
      <CHero
        heading={dataPage.title}
        bannerUrl={dataPage.metadata.banner.url}
        buttonTitle={dataPage.metadata.button.title}
        buttonUrl={dataPage.metadata.button.url}
        icon={<Phone size={24} color="#fff" />}
      />
      <CTNCenterElementOnPage>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1>{dataPage.metadata.description.title}</h1>
            <p>{dataPage.metadata.description.text}</p>
            {dataPage.metadata.description.button_active && (
              <a
                href={dataPage.metadata.description.button_url}
                target="_blank"
                className={styles.link}
              >
                {dataPage.metadata.description.button_title}
              </a>
            )}
          </article>
          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={dataPage.title}
              quality={100}
              fill={true}
              src={dataPage.metadata.description.banner.url}
            />
          </div>
        </section>
      </CTNCenterElementOnPage>
    </>
  );
}
