import { connection } from "next/server";
import { fetchImage } from "./fetch-image";
import { CatImage } from "./cat-image";

export default async function Home() {
  await connection(); //ビルド時にfetchImageの結果が固定されないようにasyncする
  const image = await fetchImage();//APIから画像を取得
  console.log("Home: 画像情報を取得しました",image);//画像URLをコンソールに表示
  return<CatImage url={image.url} />;//CatImageコンポーネントに画像URLを渡す
}

