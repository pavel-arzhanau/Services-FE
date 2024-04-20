"use client";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomLink from "../CustomLink/CustomLink";
import { supportedLanguages } from "@/types";
import styles from "./Header.module.css";
import { useUserStore } from "@/app/stores/userStore";
import { getDictionaryInClientComponent } from "@/app/utils/getDictionaryInClientComponent";

type Props = {
  lang: supportedLanguages;
};

export default function LoginLogoutMobile({ lang }: Props) {
  const isAuth = useUserStore((state) => state.isAuth);
  const dictionary = getDictionaryInClientComponent(lang);

  return (
    <>
      {isAuth ? (
        <CustomLink className={styles.link} href="/" lang={lang}>
          <div className={styles.menuItemWithIcon}>
            <LogoutIcon />
            {dictionary.header.logout}
          </div>
        </CustomLink>
      ) : (
        <CustomLink className={styles.link} href="/login" lang={lang}>
          <div className={styles.menuItemWithIcon}>
            <LoginIcon />
            {dictionary.header.signIn}
          </div>
        </CustomLink>
      )}
    </>
  );
}
