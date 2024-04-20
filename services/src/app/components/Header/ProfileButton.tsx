"use client";

import React, { MouseEvent, useEffect, useState } from "react";

// mui
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";

// components
import CustomLink from "../CustomLink/CustomLink";

// utility
import { AuthResponse, IUser, supportedLanguages } from "@/types";
import { useUserStore } from "@/app/stores/userStore";
import { getDictionaryInClientComponent } from "@/app/utils/getDictionaryInClientComponent";
import styles from "./Header.module.css";

type MenuItem = {
  path: string;
  title: string;
};

type Props = {
  lang: supportedLanguages;
  logout: () => Promise<void>;
  auth: AuthResponse;
};

export default function ProfileButton({ lang, logout, auth }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);
  const setUser = useUserStore((state) => state.setUser);
  const setIsAuth = useUserStore((state) => state.setIsAuth);
  const isLogin = Boolean(auth.user);
  const dictionary = getDictionaryInClientComponent(lang);

  useEffect(() => {
    if (isLogin) {
      setIsAuth(true);
      setUser(auth.user);
    }
  }, []);

  const onAuthClick = () => {
    if (!isLogin) {
      return;
    }

    setUser({} as IUser);
    setIsAuth(false);
    logout();
    setAnchorEl(null);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls={open ? "profile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar
          sx={{
            display: "none",
            cursor: "pointer",
            "@media (min-width: 40em)": {
              display: "flex",
            },
          }}
        />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem key="avatar" onClick={handleClose}>
          <CustomLink className={styles.link} href={"/profile"} lang={lang}>
            {dictionary.header.profile}
          </CustomLink>
        </MenuItem>
        <MenuItem key="auth" onClick={onAuthClick}>
          <CustomLink className={styles.link} href="/" lang={lang}>
            <div className={styles.menuItemWithIcon}>
              <LogoutIcon />
              {dictionary.header.logout}
            </div>
          </CustomLink>
        </MenuItem>
      </Menu>
    </>
  );
}
