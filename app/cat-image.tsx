"use client"; //use clientを指定
import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";
type CatImageProps = {
    url: string;
};

//画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
    //useStateを使って状態管理
    const [imageUrl, setImageUrl] = useState<string>(url);
    //画像を取得する関数
    const refreshImage = async () => {
        setImageUrl(""); //画像を一旦空にする。このステップがあることで、ボタンをクリックして読み込み中であることがわかりやすくなる
        const image = await fetchImage();
        setImageUrl(image.url); //新しい画像URLをセットする
    };
    //ボタンと画像を表示する
    return (
        <div className={styles.page}>
            <button onClick={refreshImage} className={styles.button}>One more cat!!!</button>
            <div className={styles.frame}>
                {imageUrl && <img src={imageUrl} className={ styles.img} />}
            </div>
        </div>
    )
}
// {imageUrl && <img src={imageUrl} />}
// このコードは、「条件付きレンダリング」という技法を使って画像の表示と非表示を切り替えています。これは論理演算子&&を利用したJSXの構文で、次のように動作します：

// ①imageUrlが空文字列の場合、左辺が「偽」扱いとなり、右辺の<img>は評価されません。よって、何も表示されません。
// ②imageUrlが空文字列でない場合、左辺が「真」扱いとなり、右辺の<img>が評価されます。よって、画像が表示されます。
// これにより、imageUrlが空文字列の間では画像は表示されず、APIから画像URLが取得できてsetImageUrlで状態が更新されると画像が表示されるようになります。
