"use client";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomLink from "../CustomLink/CustomLink";
import { IUser, supportedLanguages } from "@/types";
import { AuthResponse } from "@/types";
import { useUserStore } from "@/app/stores/userStore";
import styles from "./Header.module.css";

type Props = {
  logout: () => Promise<void>;
  auth: AuthResponse;
  lang: supportedLanguages;
};

export default function LoginLogout({ logout, auth, lang }: Props) {
  const setUser = useUserStore((state) => state.setUser);
  const setIsAuth = useUserStore((state) => state.setIsAuth);
  const isLogin = Boolean(auth.user);

  if (isLogin) {
    setIsAuth(true);
    setUser(auth.user);
  }

  const logoutUser = () => {
    setUser({} as IUser);
    setIsAuth(false);
    logout();
  };

  return (
    <>
      {isLogin ? (
        <CustomLink className={styles.icon} href="/" lang={lang}>
          <LogoutIcon className={styles.icon} onClick={logoutUser} />
        </CustomLink>
      ) : (
        <CustomLink className={styles.icon} href="/login" lang={lang}>
          <LoginIcon />
        </CustomLink>
      )}
    </>
  );
}
