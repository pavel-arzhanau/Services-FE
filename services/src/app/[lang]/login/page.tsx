"use client";
import { supportedLanguages } from "@/types";
import styles from "./login.module.css";
import { useEffect, useState } from "react";
import { getDictionaryInClientComponent } from "@/app/utils/getDictionaryInClientComponent";

type Props = {
  params: {
    lang: supportedLanguages;
  };
};

export default function LoginDesktop({ params: { lang } }: Props) {
  const [isContainerActive, setIsContainerActive] = useState(false);
  const dictionary = getDictionaryInClientComponent(lang);

  useEffect(() => {
    const registerBtn = document.getElementById("register") as HTMLElement;
    const loginBtn = document.getElementById("login") as HTMLElement;

    const addActiveClass = () => {
      setIsContainerActive(true);
    };

    const removeActiveClass = () => {
      setIsContainerActive(false);
    };

    registerBtn.addEventListener("click", addActiveClass);

    loginBtn.addEventListener("click", removeActiveClass);

    return () => {
      registerBtn?.removeEventListener("click", addActiveClass);

      loginBtn?.removeEventListener("click", removeActiveClass);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.container} ${
          isContainerActive ? styles.active : ""
        }`}
        id="container"
      >
        <div className={`${styles.formContainer} ${styles.signUp}`}>
          <form>
            <h1>{dictionary.login.createAccount}</h1>
            <input type="text" placeholder={dictionary.login.name} />
            <input type="test" placeholder={dictionary.login.phone} />
            <input type="password" placeholder={dictionary.login.password} />
            <button>{dictionary.login.signUp}</button>
          </form>
        </div>
        <div className={`${styles.formContainer} ${styles.signIn}`}>
          <form>
            <h1>{dictionary.login.signIn}</h1>
            <input type="text" placeholder={dictionary.login.phone} />
            <input type="password" placeholder={dictionary.login.password} />
            <button>{dictionary.login.signIn}</button>
          </form>
        </div>
        <div className={styles.toggleContainer}>
          <div className={styles.toggle}>
            <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
              <h1>{dictionary.login.welcomeBack}</h1>
              <p>{dictionary.login.signInSuggestion}</p>
              <button className="hidden" id="login">
                {dictionary.login.signIn}
              </button>
            </div>
            <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
              <h1>{dictionary.login.welcome}</h1>
              <p>{dictionary.login.signUpSuggestion}</p>
              <button className="hidden" id="register">
                {dictionary.login.signUp}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
