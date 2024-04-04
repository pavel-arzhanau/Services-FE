"use client";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomLink from "./CustomLink";
import { supportedLanguages } from "@/types";

type Props = {
  logout: () => Promise<void>;
  isLogin: boolean;
  lang: supportedLanguages;
};

export default function LoginLogout({ logout, isLogin, lang }: Props) {
  const logoutUser = () => {
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
