"use client";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomLink from "../CustomLink/CustomLink";
import { IUser, supportedLanguages } from "@/types";
import { AuthResponse } from "@/types";
import styles from "./Header.module.css";
import MenuItem from "@mui/material/MenuItem";
import { useUserStore } from "@/app/stores/userStore";

type Props = {
  lang: supportedLanguages;
};

export default function LoginLogoutMobile({ lang }: Props) {
  const isAuth = useUserStore((state) => state.isAuth);

  return (
    <>
      {isAuth ? (
        <CustomLink className={styles.link} href="/" lang={lang}>
          <div className={styles.menuItemWithIcon}>
            <LogoutIcon />
            Выйти
          </div>
        </CustomLink>
      ) : (
        <CustomLink className={styles.link} href="/login" lang={lang}>
          <div className={styles.menuItemWithIcon}>
            <LoginIcon />
            Войти
          </div>
        </CustomLink>
      )}
    </>
  );
}
