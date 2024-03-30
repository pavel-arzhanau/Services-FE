import MainLayout from "../../components/MainLayout/MainLayout";
import { supportedLanguages } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Services App",
};

type Props = {
  params: {
    lang: supportedLanguages;
  };
};

export default function AboutPage({ params: { lang } }: Props) {
  return (
    <MainLayout lang={lang}>
      <main>about page</main>
    </MainLayout>
  );
}
