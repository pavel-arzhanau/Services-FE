"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import Avatar from "@mui/material/Avatar";
import LanguageIcon from "@mui/icons-material/Language";
import { useLanguageStore } from "@/app/stores/languageStore";
import { useEffect, useRef } from "react";
import { useI18n } from "../../../../locales/client";

interface HeaderProps {
  isChecked?: boolean;
  setIsChecked?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ isChecked, setIsChecked }: HeaderProps) {
  const { setLanguage } = useLanguageStore((state) => ({
    setLanguage: state.setLanguage,
  }));

  const t = useI18n();

  const selectRef = useRef<HTMLSelectElement>(null);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  };

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.value = localStorage.getItem("language") || "ru";
      setLanguage(selectRef.current.value);
    }
  }, []);

  const menuItems = [
    {
      path: "/",
      title: t("header.nav.home"),
    },
    {
      path: "/tasks",
      title: t("header.nav.tasks"),
    },
    {
      path: "/favorites",
      title: t("header.nav.favorites"),
    },
    {
      path: "/about",
      title: t("header.nav.about"),
    },
  ];

  return (
    <header className={styles.header}>
      <Image src="/logo.png" alt="logo" width={150} height={75} />
      <nav>
        <ul className={styles.list}>
          {menuItems.map((item) => (
            <li key={item.path}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.languageBlock}>
        <LanguageIcon />
        <select
          ref={selectRef}
          onChange={changeLanguage}
          name="language"
          id="language-select"
        >
          <option value="ru">Русский</option>
          <option value="by">Белорусский</option>
        </select>
      </div>
      <Avatar src="/broken-image.jpg" />
    </header>
  );
}
