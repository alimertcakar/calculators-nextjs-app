import Head from 'next/head'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Categories from "src/Categories.tsx";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Alimert Calculators</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DirectionsRunIcon />
      Test
      <Categories />
    </div>
  )
}
