import Header from "../Header/Header";

interface MainLayoutProps {
  children: React.ReactNode;
  lang: "ru" | "by";
}

export default function MainLayout({ lang, children }: MainLayoutProps) {
  return (
    <>
      <Header lang={lang} />
      {children}
    </>
  );
}
