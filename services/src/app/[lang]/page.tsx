import MainLayout from "../components/MainLayout/MainLayout";
import { getDictionary } from "../utils/getDictionary";
import { supportedLanguages } from "@/types";
import type { Metadata } from "next";
import Categories from "./Categories";
import styles from "./Home.module.css";

export const metadata: Metadata = {
  title: "Services App",
  description: "Generated by create next app",
};

type Props = {
  params: {
    lang: supportedLanguages;
  };
};

export default async function Home({ params: { lang } }: Props) {
  return (
    <MainLayout lang={lang}>
      <main className={styles.main}>
        <Categories lang={lang} />
      </main>
    </MainLayout>
  );
}
