"use client";

import { useState } from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import { I18nProviderClient } from "../../locales/client";
import { useLanguageStore } from "./stores/languageStore";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const language = useLanguageStore((state) => state.language);

  return (
    <I18nProviderClient locale={language}>
      <MainLayout isChecked={isChecked} setIsChecked={setIsChecked}>
        <main>Main content</main>
      </MainLayout>
    </I18nProviderClient>
  );
}
