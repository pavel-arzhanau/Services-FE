import { supportedLanguages } from "@/types";
import { getDictionaryInClientComponent } from "@/app/utils/getDictionaryInClientComponent";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import { useForm } from "react-hook-form";
import styles from "../login.module.css";

type Props = {
  lang: supportedLanguages;
  login: (phone: string, password: string) => Promise<void>;
};

type Inputs = {
  phone: string;
  password: string;
};

export default function LoginForm({ lang, login }: Props) {
  const dictionary = getDictionaryInClientComponent(lang);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const signIn = async (data: Inputs) => {
    login(data.phone, data.password);
  };

  return (
    <form onSubmit={handleSubmit(signIn)}>
      <h1>{dictionary.login.signIn}</h1>
      <PhoneInput
        country="BY"
        name="phone"
        international
        withCountryCallingCode
        control={control}
        rules={{ required: true, minLength: 13, maxLength: 13 }}
      />
      {errors.phone && (
        <span className={styles.errorMessage}>
          {dictionary.login.phoneError}
        </span>
      )}
      <input
        {...register("password", { required: true, minLength: 8 })}
        type="password"
        placeholder={dictionary.login.password}
      />
      {errors.password && (
        <span className={styles.errorMessage}>
          {dictionary.login.passwordError}
        </span>
      )}
      <button>{dictionary.login.signIn}</button>
    </form>
  );
}
