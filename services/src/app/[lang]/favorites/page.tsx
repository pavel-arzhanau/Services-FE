import MainLayout from "../../components/MainLayout/MainLayout";

type Props = {
  params: {
    lang: "ru" | "by";
  };
};
export default function FavoritesPage({ params: { lang } }: Props) {
  return (
    <MainLayout lang={lang}>
      <main>favorites page</main>
    </MainLayout>
  );
}
