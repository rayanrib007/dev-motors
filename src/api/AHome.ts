"use server";
export async function getDataHome() {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/677e66fd14e916955b7f85ba?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`
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
