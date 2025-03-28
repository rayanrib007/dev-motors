/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
export async function getDataHome() {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/677e66fd14e916955b7f85ba?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`,
      { next: { revalidate: 120 } }
    ).then((res) => res.json());

    return {
      type: "success",
      data,
    };
  } catch (error) {
    return {
      message: "Error",
      type: "fail",
      data: null,
    };
  }
}

export async function getSubMenuInfosPages() {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22%3A%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug%2Ctitle&sort=-order`,
      { next: { revalidate: 120 } }
    ).then((res) => res.json());

    return {
      type: "success",
      data,
    };
  } catch (error) {
    return {
      message: "Error",
      type: "fail",
      data: null,
    };
  }
}

export async function getDataPage(itemSlug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;
  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug,
    }),
    props: "slug,title,metadata",
    read_key: process.env.READ_KEY as string,
  });
  const url = `${baseUrl}?${queryParams.toString()}`;
  try {
    const data = await fetch(url, { next: { revalidate: 120 } }).then((res) =>
      res.json()
    );
    if (data.status && data.status === 404) {
      throw new Error("Página não encontrada");
    } else if (data.status && data.status !== 200) {
      throw new Error("Falha interna do servidor");
    }
    return {
      type: "success",
      data,
    };
  } catch (error: any) {
    return {
      message: error.message,
      type: "fail",
      data: null,
    };
  }
}
