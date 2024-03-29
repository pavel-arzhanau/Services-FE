import MainLayout from "../components/MainLayout/MainLayout";
import { getDictionary } from "../utils/getDictionary";

type Props = {
  params: {
    lang: "ru" | "by";
  };
};

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);

  return (
    <MainLayout>
      <main>{dictionary.header.nav.home}</main>
    </MainLayout>
  );
}
