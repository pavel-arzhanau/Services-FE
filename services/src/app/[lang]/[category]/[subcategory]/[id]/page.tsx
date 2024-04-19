import { getDictionary } from "@/app/utils/getDictionary";
import { supportedLanguages } from "@/types";
import MainLayout from "@/app/components/MainLayout/MainLayout";
import styles from "./Ad.module.css";
import { getAdById } from "@/app/actions/ads";

type Props = {
  params: {
    lang: supportedLanguages;
    category: string;
    subcategory: string;
    id: string;
  };
};

export default async function Subcategory({ params: { lang, id } }: Props) {
  const dictionary = await getDictionary(lang);

  const ad = await getAdById(id);

  return (
    <MainLayout lang={lang}>
      <main className={styles.main}>{id}</main>
    </MainLayout>
  );
}
