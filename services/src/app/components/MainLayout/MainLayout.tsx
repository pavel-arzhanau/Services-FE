import Header from "../Header/Header";
import { supportedLanguages } from "@/types";

interface MainLayoutProps {
  children: React.ReactNode;
  lang: supportedLanguages;
}

export default function MainLayout({ lang, children }: MainLayoutProps) {
  return (
    <>
      <Header lang={lang} />
      {children}
    </>
  );
}
