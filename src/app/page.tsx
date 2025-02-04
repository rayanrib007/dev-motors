"use server";
import { getDataHome } from "@/api/AHome";
import CTNHomePage from "@/container/home/CTNHomePage/CTNHomePage";

export default async function PHome() {
  const response = await getDataHome();
  return <CTNHomePage homeData={response.data} />;
}
