"use server";
import { getDataHome } from "@/api/AHome";
import { IHomeDataProtocols } from "@/interfaces/IHome";
import CTNHomePage from "@/container/home/CTNHomePage/CTNHomePage";

export default async function PHome() {
  const response = await getDataHome();
  const homeData: IHomeDataProtocols = response.data;
  return <CTNHomePage homeData={homeData} />;
}
