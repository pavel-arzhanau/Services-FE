import { supportedLanguages } from "@/types";
import { getDictionaryInClientComponent } from "@/app/utils/getDictionaryInClientComponent";
import { CONFIG } from "../../../constants";

type Props = {
  lang: supportedLanguages;
};

export default function SignUpForm({ lang }: Props) {
  const dictionary = getDictionaryInClientComponent(lang);

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
    <form onClick={(e) => e.preventDefault()}>
      <h1>{dictionary.login.createAccount}</h1>
      <input type="text" placeholder={dictionary.login.name} />
      <input type="test" placeholder={dictionary.login.phone} />
      <input type="password" placeholder={dictionary.login.password} />
      <button onClick={signUp}>{dictionary.login.signUp}</button>
    </form>
  );
}
