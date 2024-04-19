import { getDictionary } from "@/app/utils/getDictionary";
import { supportedLanguages } from "@/types";
import { getAdsBySubcategory } from "@/app/actions/ads";
import MainLayout from "@/app/components/MainLayout/MainLayout";
import { IAd } from "@/types/IAd";
import styles from "./Ads.module.css";
import AdCard from "./components/AdCard";

type Props = {
  params: {
    lang: supportedLanguages;
    category: string;
    subcategory: string;
  };
};

export default async function Subcategory({
  params: { lang, category, subcategory },
}: Props) {
  const dictionary = await getDictionary(lang);

  const ads = await getAdsBySubcategory(category, subcategory);

  return (
    <MainLayout lang={lang}>
      <main className={styles.main}>
        {ads.map((ad: IAd) => (
          <AdCard
            key={ad.id}
            ad={ad}
            lang={lang}
            category={category}
            subcategory={subcategory}
          />
        ))}
      </main>
    </MainLayout>
  );
}
