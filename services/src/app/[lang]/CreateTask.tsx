"use client";
import { getDictionaryInClientComponent } from "../utils/getDictionaryInClientComponent";
import styles from "./Home.module.css";
import { supportedLanguages } from "@/types";
import CustomLink from "../components/CustomLink/CustomLink";
import { useUserStore } from "../stores/userStore";

type Props = {
  lang: supportedLanguages;
};

export default function CreateTask({ lang }: Props) {
  const dictionary = getDictionaryInClientComponent(lang);
  const isAuth = useUserStore((state) => state.isAuth);

  return (
    <section className={`${styles.wrapper} ${styles.createWrapper}`}>
      <button className={styles.createTaskButton}>
        <CustomLink href={isAuth ? "/create-task" : "/login"} lang={lang}>
          {dictionary.home.createTask}
        </CustomLink>
      </button>
    </section>
  );
}
