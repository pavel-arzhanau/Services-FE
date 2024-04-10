import { getDictionary } from "@/app/utils/getDictionary";
import { supportedLanguages } from "@/types";

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

  return (
    <section>
      {category}{" "}
      {
        dictionary.home.subcategories[
          subcategory as keyof typeof dictionary.home.subcategories
        ]
      }
    </section>
  );
}
