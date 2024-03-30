"use client";
import { supportedLanguages } from "@/types";
import styles from "./login.module.css";
import useLoginContainerActive from "./hooks/useLoginContainerActive";
import { getDictionaryInClientComponent } from "@/app/utils/getDictionaryInClientComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import { CONFIG } from "../../constants";

type Props = {
  params: {
    lang: supportedLanguages;
  };
};

export default function LoginDesktop({ params: { lang } }: Props) {
  const dictionary = getDictionaryInClientComponent(lang);
  const router = useRouter();
  const isContainerActive = useLoginContainerActive();

  const signUp = () => {
    // TODO now it sends mock data
    fetch(`${CONFIG.API_BASE_URL}/auth/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "test2",
        password: "11231",
        phone: "112311233",
      }),
    });
  };

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
          <form onClick={(e) => e.preventDefault()}>
            <h1>{dictionary.login.createAccount}</h1>
            <input type="text" placeholder={dictionary.login.name} />
            <input type="test" placeholder={dictionary.login.phone} />
            <input type="password" placeholder={dictionary.login.password} />
            <button onClick={signUp}>{dictionary.login.signUp}</button>
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
