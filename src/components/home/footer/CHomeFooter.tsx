import { IHomeDataProtocol } from "@/interfaces/IPages";
import styles from "./styles.module.scss";
import { Clock, Mail, Map, Phone } from "lucide-react";

export default function CHomeFooter({
  homeData,
}: {
  homeData: IHomeDataProtocol;
}) {
  return (
    <footer id="contacts" className={styles.footer}>
      <section className={styles.section}>
        <h2 className={styles.title}>Contatos</h2>
        <div className={styles.content}>
          <div className={styles.item}>
            <Mail size={28} color="#fff" />
            <div>
              <strong>Email</strong>
              <p>{homeData.object.metadata.contact.email}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Phone size={28} color="#fff" />
            <div>
              <strong>Telefone</strong>
              <p>{homeData.object.metadata.contact.phone}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Map size={28} color="#fff" />
            <div>
              <strong>Endereço</strong>
              <p>{homeData.object.metadata.contact.address}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Clock size={28} color="#fff" />
            <div>
              <strong>Horário</strong>
              <p>{homeData.object.metadata.contact.time}</p>
            </div>
          </div>
        </div>
      </section>
      <a href={homeData.object.metadata.cta_button.url} className={styles.link}>
        <Phone size={24} color="#fff" />
        {homeData.object.metadata.cta_button.title}
      </a>
      <p className={styles.copyText}>
        Todos direitos reservados {homeData.object.title} @
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
