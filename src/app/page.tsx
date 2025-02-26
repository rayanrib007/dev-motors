"use server";
import { getDataHome, getSubMenuInfosPages } from "@/api/AHome";

import CTNHomePage from "@/container/home/CTNHomePage/CTNHomePage";

export default async function PHome() {
  const [dataHome, subMenuInfosPages] = await Promise.all([
    getDataHome(),
    getSubMenuInfosPages(),
  ]);
  return (
    <CTNHomePage
      homeData={dataHome.data}
      subMenuInfosPages={subMenuInfosPages.data}
    />
  );
}
