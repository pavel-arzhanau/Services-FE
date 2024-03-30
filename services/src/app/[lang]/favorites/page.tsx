import MainLayout from "../../components/MainLayout/MainLayout";
import { supportedLanguages } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites | Services App",
};

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
