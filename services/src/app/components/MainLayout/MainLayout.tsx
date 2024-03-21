import Header from "../Header/Header";

interface MainLayoutProps {
  children: React.ReactNode;
  isChecked?: boolean;
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MainLayout({
  isChecked,
  setIsChecked,
  children,
}: MainLayoutProps) {
  return (
    <>
      <Header isChecked={isChecked} setIsChecked={setIsChecked} />
      {children}
    </>
  );
}
