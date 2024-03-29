import MainLayout from "../../components/MainLayout/MainLayout";
import { supportedLanguages } from "@/types";

type Props = {
  params: {
    lang: supportedLanguages;
  };
};

export default function TasksPage({ params: { lang } }: Props) {
  return (
    <MainLayout lang={lang}>
      <main>tasks page</main>
    </MainLayout>
  );
}
