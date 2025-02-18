import CHero from "@/components/general/hero/CHero";
import CHomeFooter from "@/components/home/footer/CHomeFooter";
import CHomeServices from "@/components/home/services/CHomeServices";
import CHomeSubMenu from "@/components/home/subMenu/CHomeSubMenu";
import CTNCenterElementOnPage from "@/container/general/CTNCenterElementOnPage";
import { IHomeDataProtocol } from "@/interfaces/IHome";
import { Phone } from "lucide-react";

export default function CTNHomePage({
  homeData,
}: {
  homeData: IHomeDataProtocol;
}) {
  return (
    <main>
      <CHomeSubMenu />
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
