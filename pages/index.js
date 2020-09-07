import Head from "next/head";
import Categories from "../src/Categories.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alimert Calculators</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Categories />
    </div>
  );
}
