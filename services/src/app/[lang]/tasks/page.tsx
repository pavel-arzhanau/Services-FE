import MainLayout from "../../components/MainLayout/MainLayout";
import { supportedLanguages } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasks | Services App",
};

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
