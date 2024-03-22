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

  return (
    <header className={styles.header}>
      <Image src="/logo.png" alt="logo" width={150} height={75} />
      <nav>
        <ul className={styles.list}>
          <li>
            <a href="/">{t("header.nav.home")}</a>
          </li>
          <li>
            <a href="/tasks">{t("header.nav.tasks")}</a>
          </li>
          <li>
            <a href="/favorites">{t("header.nav.favorites")}</a>
          </li>
          <li>
            <a href="/about">{t("header.nav.about")}</a>
          </li>
        </ul>
      </nav>
      <div>
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
