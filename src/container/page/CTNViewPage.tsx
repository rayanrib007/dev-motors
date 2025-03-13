import { IPagesDataProtocol } from "@/interfaces/IPages";

export default function CTNViewPage({
  dataPage,
}: {
  dataPage: IPagesDataProtocol;
}) {
  console.log(dataPage);
  return <div>CTNViewPage</div>;
}
