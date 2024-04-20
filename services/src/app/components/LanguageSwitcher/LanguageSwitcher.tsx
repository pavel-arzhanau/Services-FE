"use client";

import { ChangeEvent, useEffect, useRef } from "react";
import { i18n } from "@/i18n-config";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { supportedLanguages } from "@/types";
import styles from "./LanguageSwitcher.module.css";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

type Props = {
  lang: supportedLanguages;
};

export default function LanguageSwitcher({ lang }: Props) {
  const selectRef = useRef(null);
  const pathName = usePathname();
  const router = useRouter();

  const change = (event: ChangeEvent<HTMLSelectElement>) => {
    const path = redirectedPathName(event.target.value as supportedLanguages);
    router.push(path);
  };

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  useEffect(() => {
    (document.getElementById("language-select") as HTMLSelectElement).value =
      lang;
  }, []);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
      <select
        ref={selectRef}
        name="language"
        id="language-select"
        onChange={change}
        className={styles.select}
      >
        <option className={styles.option} value="ru">
          RU
        </option>
        <option className={styles.option} value="by">
          BY
        </option>
      </select>
    </>
  );
}
