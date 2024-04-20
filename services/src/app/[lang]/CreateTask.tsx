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

export default function CreateTask({ lang }: Props) {
  const dictionary = getDictionaryInClientComponent(lang);
  const isAuth = useUserStore((state) => state.isAuth);

  return (
    <section className={`${styles.createWrapper}`}>
      <h2 className={styles.createTitle}>{dictionary.home.createTaskSlogan}</h2>
      <Image
        className={styles.createAdImg}
        src="/images/home2.jpg"
        alt="service"
        width={300}
        height={300}
      />
      <button className={styles.createTaskButton}>
        <CustomLink href={isAuth ? "/create-task" : "/login"} lang={lang}>
          {dictionary.home.createTask}
        </CustomLink>
      </button>
    </section>
  );
}
