import Image from "next/image";
import styles from "./Footer.module.css";
import { getDictionary } from "@/app/utils/getDictionary";
import CustomLink from "../CustomLink/CustomLink";
import { supportedLanguages } from "@/types";
import Divider from "@mui/material/Divider";

type Props = {
  lang: supportedLanguages;
};

export default async function Footer({ lang }: Props) {
  const dictionary = await getDictionary(lang);
  const menuItems = [
    {
      path: `/support`,
      title: dictionary.header.nav.support,
    },
    {
      path: `/tasks`,
      title: dictionary.header.nav.tasks,
    },
    {
      path: `/favorites`,
      title: dictionary.header.nav.favorites,
    },
    {
      path: `/about`,
      title: dictionary.header.nav.about,
    },
  ];

  return (
    <header className={styles.footer}>
      <CustomLink href={"/"} lang={lang}>
        <Image src="/logo.png" alt="logo" width={280} height={140} />
      </CustomLink>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item.path}>
            <CustomLink href={item.path} lang={lang}>
              {item.title}
            </CustomLink>
          </li>
        ))}
      </ul>
      <Divider variant="middle" sx={{ width: "90%" }} />
      <p>© 2024 Services</p>
    </header>
  );
}
