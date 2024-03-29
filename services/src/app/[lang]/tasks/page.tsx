import MainLayout from "../../components/MainLayout/MainLayout";

type Props = {
  params: {
    lang: "ru" | "by";
  };
};

export default function TasksPage({ params: { lang } }: Props) {
  return (
    <MainLayout lang={lang}>
      <main>tasks page</main>
    </MainLayout>
  );
}
