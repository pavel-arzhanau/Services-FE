"use client";

import { getDictionaryInClientComponent } from "../utils/getDictionaryInClientComponent";
import { supportedLanguages } from "@/types";
import CustomLink from "../components/CustomLink/CustomLink";
import { useUserStore } from "../stores/userStore";
import styles from "./CreateTask.module.scss";

type Props = {
  lang: supportedLanguages;
};

export default function CreateTask({ lang }: Props) {
  const dictionary = getDictionaryInClientComponent(lang);
  const isAuth = useUserStore((state) => state.isAuth);

  return (
    <button className={styles.createTaskButton}>
      <CustomLink href={isAuth ? "/create-task" : "/login"} lang={lang}>
        {dictionary.home.createTask}
      </CustomLink>
    </button>
  );
}
