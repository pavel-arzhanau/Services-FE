"use client";

import React, { MouseEvent, useEffect, useState } from "react";

// mui
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

// components
import CustomLink from "../CustomLink/CustomLink";
import LoginLogoutMobile from "./LoginLogoutMobile";

// utility
import { AuthResponse, IUser, supportedLanguages } from "@/types";
import { useUserStore } from "@/app/stores/userStore";
import styles from "./Header.module.css";
import { getDictionaryInClientComponent } from "@/app/utils/getDictionaryInClientComponent";

type MenuItem = {
  path: string;
  title: string;
};

type Props = {
  menuItems: MenuItem[];
  lang: supportedLanguages;
  logout: () => Promise<void>;
  auth: AuthResponse;
};

export default function BurgerMenu({ menuItems, lang, logout, auth }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);
  const isAuth = useUserStore((state) => state.isAuth);
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
    <div className={styles.burger}>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.burgerButton}
      >
        <MenuIcon />
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
        {menuItems.map((item) => (
          <MenuItem key={item.path} onClick={handleClose}>
            <CustomLink className={styles.link} href={item.path} lang={lang}>
              {item.title}
            </CustomLink>
          </MenuItem>
        ))}
        <Divider />
        {isAuth && (
          <MenuItem key="avatar" onClick={handleClose}>
            <CustomLink className={styles.link} href={"/profile"} lang={lang}>
              <div className={styles.menuItemWithIcon}>
                <Avatar sx={{ width: 24, height: 24 }} />
                {dictionary.header.profile}
              </div>
            </CustomLink>
          </MenuItem>
        )}
        <MenuItem key="auth" onClick={onAuthClick}>
          <LoginLogoutMobile lang={lang} />
        </MenuItem>
      </Menu>
    </div>
  );
}
