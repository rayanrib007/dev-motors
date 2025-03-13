import CHero from "@/components/general/hero/CHero";
import CHomeFooter from "@/components/home/footer/CHomeFooter";
import CHomeServices from "@/components/home/services/CHomeServices";
import CHomeSubMenu from "@/components/home/subMenu/CHomeSubMenu";
import CTNCenterElementOnPage from "@/container/general/CTNCenterElementOnPage";
import {
  IHomeDataProtocol,
  ISubMenuInfosPagesProtocol,
} from "@/interfaces/IPages";
import { Phone } from "lucide-react";

export default function CTNHomePage({
  homeData,
  subMenuInfosPages,
}: {
  homeData: IHomeDataProtocol;
  subMenuInfosPages: ISubMenuInfosPagesProtocol;
}) {
  return (
    <main>
      {subMenuInfosPages.objects.length > 0 && (
        <CHomeSubMenu subMenuInfosPages={subMenuInfosPages} />
      )}
      <CHero
        heading={homeData.object.metadata.heading}
        bannerUrl={homeData.object.metadata.banner.url}
        buttonTitle={homeData.object.metadata.cta_button.title}
        buttonUrl={homeData.object.metadata.cta_button.url}
        icon={<Phone size={24} color="#fff" />}
      />
      <CTNCenterElementOnPage>
        <CHomeServices homeData={homeData} />
        <CHomeFooter homeData={homeData} />
      </CTNCenterElementOnPage>
    </main>
  );
}
