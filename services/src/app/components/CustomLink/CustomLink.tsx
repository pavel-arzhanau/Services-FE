import Link from "next/link";
import { i18n } from "@/i18n-config";
import styles from "./CustomLink.module.css";

interface CustomLinkProps {
  href: string;
  lang: string;
  children: React.ReactNode;
  [key: string]: any;
}

export default function CustomLink({ href, lang, ...props }: CustomLinkProps) {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;
  return <Link className={styles.link} href={path} {...props} />;
}
