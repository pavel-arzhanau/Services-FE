"use client";
import { supportedLanguages } from "@/types";
import styles from "./login.module.css";
import useLoginContainerActive from "./hooks/useLoginContainerActive";
import { getDictionaryInClientComponent } from "@/app/utils/getDictionaryInClientComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

type Props = {
  params: {
    lang: supportedLanguages;
  };
};

export default function LoginDesktop({ params: { lang } }: Props) {
  const dictionary = getDictionaryInClientComponent(lang);
  const router = useRouter();
  const isContainerActive = useLoginContainerActive();

  return (
    <>
      <div
        className={`${styles.container} ${
          isContainerActive ? styles.active : ""
        }`}
        id="container"
      >
        <ArrowBackIcon
          sx={{
            position: "absolute",
            zIndex: 15,
            top: "20px",
            left: "20px",
            cursor: "pointer",
          }}
          onClick={router.back}
        />
        <div className={`${styles.formContainer} ${styles.signUp}`}>
          <SignUpForm lang={lang} />
        </div>
        <div className={`${styles.formContainer} ${styles.signIn}`}>
          <LoginForm lang={lang} />
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
