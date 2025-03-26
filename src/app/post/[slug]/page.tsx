import { getDataPage } from "@/api/APages";
import CTNViewPage from "@/container/page/CTNViewPage";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const dataPage = await getDataPage(slug);
    return {
      title: `DevMotors - ${dataPage.data.objects[0].title}`,
      description: dataPage.data.objects[0].metadata.description.text,
      keywords: [
        "oficina",
        "oficina de carros",
        "carros",
        "troca de óleos",
        "manutenção de carros",
      ],
      openGraph: {
        title: "DevMotors - Sua oficina personalizada!",
        images: [`${dataPage.data.objects[0].metadata.banner.url}`],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (error) {
    return {
      title: "DevMotors - Sua oficina personalizada!",
      description: "Oficiona de carros em São Paulo",
    };
  }
}

export default async function PPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dataPage = await getDataPage(slug);

  return <CTNViewPage dataPage={dataPage.data.objects[0]} />;
}
