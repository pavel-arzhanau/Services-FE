import Image from "next/image";
import styles from "./Header.module.css";
import Avatar from "@mui/material/Avatar";
import LanguageIcon from "@mui/icons-material/Language";
import { getDictionary } from "@/app/utils/getDictionary";
import LanguageSwitcher from "./LanguageSwitcher";
import CustomLink from "../CustomLink/CustomLink";
import { supportedLanguages } from "@/types";
import { checkAuth, logout } from "@/app/actions/auth";
import LoginLogout from "./LoginLogout";
import BurgerMenu from "./BurgerMenu";

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

  const auth = await checkAuth();

  return (
    <header className={styles.header}>
      <CustomLink href={"/"} lang={lang}>
        <Image src="/logo.png" alt="logo" width={100} height={50} />
      </CustomLink>
      <nav className={styles.navbar}>
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
      {auth.user && <Avatar />}
      <LoginLogout lang={lang} logout={logout} auth={auth} />
      <BurgerMenu menuItems={menuItems} lang={lang} />
    </header>
  );
}
