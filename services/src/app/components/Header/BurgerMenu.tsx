"use client";

import React, { MouseEvent, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import styles from "./Header.module.css";
import CustomLink from "../CustomLink/CustomLink";
import { supportedLanguages } from "@/types";
import Image from "next/image";

type MenuItem = {
  path: string;
  title: string;
};

type Props = {
  menuItems: MenuItem[];
  lang: supportedLanguages;
};

export default function BurgerMenu({ menuItems, lang }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

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
      </Menu>
    </div>
  );
}
