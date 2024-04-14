import MainLayout from "../../components/MainLayout/MainLayout";
import { supportedLanguages } from "@/types";
import type { Metadata } from "next";
import styles from "./createAd.module.css";
import { createAd } from "../../actions/ads";
import CreateAdForm from "./createAdForm";
import { getCategories } from "@/app/actions/categories";
import { getDictionary } from "@/app/utils/getDictionary";

export const metadata: Metadata = {
  title: "Create Ad | Services App",
};

type Props = {
  params: {
    lang: supportedLanguages;
  };
};

export default async function CreateAdPage({ params: { lang } }: Props) {
  const categories = await getCategories();
  const dictionary = await getDictionary(lang);

  return (
    <MainLayout lang={lang}>
      <main className={styles.main}>
        <h1>{dictionary.createAd.formTitle}</h1>
        <CreateAdForm lang={lang} create={createAd} categories={categories} />
      </main>
    </MainLayout>
  );
}
