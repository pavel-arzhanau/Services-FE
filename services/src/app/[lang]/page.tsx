import MainLayout from "../components/MainLayout/MainLayout";
import { getDictionary } from "../utils/getDictionary";
import { supportedLanguages } from "@/types";

type Props = {
  params: {
    lang: supportedLanguages;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);

  return (
    <MainLayout lang={lang}>
      <main>{dictionary.header.nav.home}</main>
    </MainLayout>
  );
}
