import { getDictionary } from "@/app/utils/getDictionary";
import { supportedLanguages } from "@/types";
import { getAdsBySubcategory } from "@/app/actions/ads";
import MainLayout from "@/app/components/MainLayout/MainLayout";
import { IAd } from "@/types/IAd";

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
      <main>
        {ads.map((ad: IAd) => (
          <>
            <div>{ad.title}</div>
            <div>Исполнитель: {ad.user.name}</div>
          </>
        ))}
      </main>
    </MainLayout>
  );
}
