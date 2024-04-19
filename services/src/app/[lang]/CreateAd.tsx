"use client";
import { getDictionaryInClientComponent } from "../utils/getDictionaryInClientComponent";
import styles from "./Home.module.css";
import { supportedLanguages } from "@/types";
import CustomLink from "../components/CustomLink/CustomLink";
import { useUserStore } from "../stores/userStore";
import Image from "next/image";

type Props = {
  lang: supportedLanguages;
};

export default function CreateAd({ lang }: Props) {
  const dictionary = getDictionaryInClientComponent(lang);
  const isAuth = useUserStore((state) => state.isAuth);

  return (
    <section className={`${styles.createWrapper}`}>
      <h2 className={styles.createTitle}>{dictionary.home.createAdSlogan}</h2>
      <Image
        className={styles.createAdImg}
        src="/images/home1.jpg"
        alt="service"
        width={300}
        height={176}
        sizes="(min-width: 768px) 600px, (min-width: 960px) 700px"
      />
      <button className={styles.createAdButton}>
        <CustomLink href={isAuth ? "/create-ad" : "/login"} lang={lang}>
          {dictionary.home.createAd}
        </CustomLink>
      </button>
    </section>
  );
}
