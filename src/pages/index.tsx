import Head from "next/head";
import { Nunito } from "next/font/google";
import styles from "@/styles/Home.module.css";

import SignInWithZkAuthButton from "zk-auth-sdk";

const nunito = Nunito({ subsets: ["latin"], weight: "600" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <SignInWithZkAuthButton />
        </div>
      </main>
    </>
  );
}
