import Image from "next/image";
import styles from "./Header.module.css";
import Avatar from "@mui/material/Avatar";
import LanguageIcon from "@mui/icons-material/Language";
import { getDictionary } from "@/app/utils/getDictionary";
import LanguageSwitcher from "./LanguageSwitcher";
import CustomLink from "./CustomLink";
import { supportedLanguages } from "@/types";

type Props = {
  lang: supportedLanguages;
};

export default async function Header({ lang }: Props) {
  const dictionary = await getDictionary(lang);
  const menuItems = [
    {
      path: `/`,
      title: dictionary.header.nav.home,
    },
    {
      path: `/tasks`,
      title: dictionary.header.nav.tasks,
    },
    {
      path: `/favorites`,
      title: dictionary.header.nav.favorites,
    },
    {
      path: `/about`,
      title: dictionary.header.nav.about,
    },
  ];

  return (
    <header className={styles.header}>
      <Image src="/logo.png" alt="logo" width={150} height={75} />
      <nav>
        <ul className={styles.list}>
          {menuItems.map((item) => (
            <li key={item.path}>
              <CustomLink href={item.path} lang={lang}>
                {item.title}
              </CustomLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.languageBlock}>
        <LanguageIcon />
        <LanguageSwitcher lang={lang} />
      </div>
      <CustomLink href="/login" lang={lang}>
        <Avatar />
      </CustomLink>
    </header>
  );
}
