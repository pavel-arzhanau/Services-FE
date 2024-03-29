import MainLayout from "../../components/MainLayout/MainLayout";
import { supportedLanguages } from "@/types";

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
