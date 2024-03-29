import MainLayout from "../../components/MainLayout/MainLayout";
import { supportedLanguages } from "@/types";

type Props = {
  params: {
    lang: supportedLanguages;
  };
};
export default function FavoritesPage({ params: { lang } }: Props) {
  return (
    <MainLayout lang={lang}>
      <main>favorites page</main>
    </MainLayout>
  );
}
