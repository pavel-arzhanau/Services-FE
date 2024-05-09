import Image from "next/image";
import styles from "./Footer.module.scss";
import { getDictionary } from "@/app/utils/getDictionary";
import CustomLink from "../CustomLink/CustomLink";
import { supportedLanguages } from "@/types";
import Divider from "@mui/material/Divider";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import LanguageIcon from "@mui/icons-material/Language";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

type Props = {
  lang: supportedLanguages;
};

export default async function Footer({ lang }: Props) {
  const dictionary = await getDictionary(lang);
  const menuItems = [
    {
      path: `/create-task`,
      title: dictionary.header.nav.createTask,
    },
    {
      path: `/tasks`,
      title: dictionary.header.nav.tasks,
    },
    {
      path: `/ads`,
      title: dictionary.header.nav.ads,
    },
    {
      path: `/responses`,
      title: dictionary.header.nav.responses,
    },
    {
      path: `/about`,
      title: dictionary.header.nav.about,
    },
    {
      path: `/faq`,
      title: dictionary.header.nav.faq,
    },
  ];

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.flexContainer}>
          <ul className={styles.list}>
            {menuItems.map((item) => (
              <li key={item.path}>
                <CustomLink href={item.path} lang={lang}>
                  {item.title}
                </CustomLink>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ color: "#9ECDF6", margin: 0 }}>По всем вопросам:</p>
            <p style={{ margin: 0 }}>mockservices@gmail.com</p>
          </div>
          <div className={styles.iconsBlock}>
            <TelegramIcon className={styles.icon} />
            <InstagramIcon className={styles.icon} />
            <YouTubeIcon className={styles.icon} />
          </div>
        </div>
        <Divider variant="middle" sx={{ width: "90%" }} />
        <div className={styles.basement}>
          <p>© 2024 Services </p>
          <div className={styles.languageBlock}>
            <LanguageIcon />
            <LanguageSwitcher lang={lang} />
          </div>
        </div>
      </div>
    </footer>
  );
}
