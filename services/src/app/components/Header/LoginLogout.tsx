"use client";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomLink from "./CustomLink";
import { IUser, supportedLanguages } from "@/types";
import { AuthResponse } from "@/types";
import { useUserStore } from "@/app/stores/userStore";

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
        <LogoutIcon sx={{ cursor: "pointer" }} onClick={logoutUser} />
      ) : (
        <CustomLink href="/login" lang={lang}>
          <LoginIcon />
        </CustomLink>
      )}
    </>
  );
}
