import { supportedLanguages } from "@/types";
import { getDictionaryInClientComponent } from "@/app/utils/getDictionaryInClientComponent";

type Props = {
  lang: supportedLanguages;
};

export default function LoginForm({ lang }: Props) {
  const dictionary = getDictionaryInClientComponent(lang);

  return (
    <form>
      <h1>{dictionary.login.signIn}</h1>
      <input type="text" placeholder={dictionary.login.phone} />
      <input type="password" placeholder={dictionary.login.password} />
      <button>{dictionary.login.signIn}</button>
    </form>
  );
}
