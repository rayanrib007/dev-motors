import { getDataPage } from "@/api/APages";
import CTNViewPage from "@/container/page/CTNViewPage";

export default async function PPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dataPage = await getDataPage(slug);

  return <CTNViewPage dataPage={dataPage.data.objects[0]} />;
}
