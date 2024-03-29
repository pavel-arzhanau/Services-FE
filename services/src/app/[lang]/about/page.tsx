import MainLayout from "../../components/MainLayout/MainLayout";

type Props = {
  params: {
    lang: "ru" | "by";
  };
};

export default function AboutPage({ params: { lang } }: Props) {
  return (
    <MainLayout lang={lang}>
      <main>about page</main>
    </MainLayout>
  );
}
