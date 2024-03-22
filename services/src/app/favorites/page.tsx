"use client";
import MainLayout from "../components/MainLayout/MainLayout";
import { useLanguageStore } from "../stores/languageStore";
import { I18nProviderClient } from "../../../locales/client";

export default function FavoritesPage() {
  const language = useLanguageStore((state) => state.language);

  return (
    <I18nProviderClient locale={language}>
      <MainLayout>
        <main>favorites page</main>
      </MainLayout>
    </I18nProviderClient>
  );
}
