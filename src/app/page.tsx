"use server";
import CHomeSubMenu from "@/components/home/subMenu/CHomeSubMenu";
import { getDataHome } from "@/api/AHome";
import { IHomeDataProtocols } from "@/interfaces/IHome";

export default async function PHome() {
  const response = await getDataHome();
  const homeData: IHomeDataProtocols = response.data;
  console.log(homeData);
  return (
    <main>
      <CHomeSubMenu />
    </main>
  );
}
