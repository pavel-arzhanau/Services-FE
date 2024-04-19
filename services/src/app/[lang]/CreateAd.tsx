"use client";
import { getDictionaryInClientComponent } from "../utils/getDictionaryInClientComponent";
import styles from "./Home.module.css";
import { supportedLanguages } from "@/types";
import CustomLink from "../components/CustomLink/CustomLink";
import { useUserStore } from "../stores/userStore";

type Props = {
  lang: supportedLanguages;
};

export default function CreateAd({ lang }: Props) {
  const dictionary = getDictionaryInClientComponent(lang);
  const isAuth = useUserStore((state) => state.isAuth);

  return (
    <section className={`${styles.wrapper} ${styles.createWrapper}`}>
      <button className={styles.createAdButton}>
        <CustomLink href={isAuth ? "/create-ad" : "/login"} lang={lang}>
          {dictionary.home.createAd}
        </CustomLink>
      </button>
    </section>
  );
}
