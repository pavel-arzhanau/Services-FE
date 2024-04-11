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

export default function Support({ params: { lang } }: Props) {
  return (
    <MainLayout lang={lang}>
      <main>support page</main>
    </MainLayout>
  );
}
