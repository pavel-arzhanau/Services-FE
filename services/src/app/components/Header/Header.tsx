import Image from "next/image";
import styles from "./Header.module.css";
import { getDictionary } from "@/app/utils/getDictionary";
import CustomLink from "../CustomLink/CustomLink";
import { supportedLanguages } from "@/types";
import { checkAuth, logout } from "@/app/actions/auth";
import BurgerMenu from "./BurgerMenu";
import LoginIcon from "@mui/icons-material/Login";
import ProfileButton from "./ProfileButton";
import { IconButton } from "@mui/material";

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
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
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
        {auth.user ? (
          <ProfileButton lang={lang} logout={logout} auth={auth} />
        ) : (
          <IconButton
            sx={{
              display: "none",
              "@media (min-width: 40em)": {
                display: "flex",
              },
            }}
          >
            <CustomLink className={styles.icon} href="/login" lang={lang}>
              <LoginIcon />
            </CustomLink>
          </IconButton>
        )}
        <BurgerMenu
          menuItems={menuItems}
          lang={lang}
          logout={logout}
          auth={auth}
        />
      </div>
    </header>
  );
}
