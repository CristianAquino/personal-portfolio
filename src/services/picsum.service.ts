import { picsumAdapter } from "@adapters/picsum.adapter";

async function getPicsumImage() {
  const url = await fetch("https://picsum.photos/v2/list?page=2&limit=10");
  const data = await url.json();
  return data.map((ele: any) => picsumAdapter(ele));
}

export { getPicsumImage };
