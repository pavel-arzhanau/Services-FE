import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Avatar from "@mui/material/Avatar";
import LanguageIcon from "@mui/icons-material/Language";

export default function Header() {
  const menuItems = [
    {
      path: "/",
      title: "header.nav.home",
    },
    {
      path: "/tasks",
      title: "header.nav.tasks",
    },
    {
      path: "/favorites",
      title: "header.nav.favorites",
    },
    {
      path: "/about",
      title: "header.nav.about",
    },
  ];

  return (
    <header className={styles.header}>
      <Image src="/logo.png" alt="logo" width={150} height={75} />
      <nav>
        <ul className={styles.list}>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.languageBlock}>
        <LanguageIcon />
        <select name="language" id="language-select">
          <option value="ru">Русский</option>
          <option value="by">Белорусский</option>
        </select>
      </div>
      <Avatar src="/broken-image.jpg" />
    </header>
  );
}
