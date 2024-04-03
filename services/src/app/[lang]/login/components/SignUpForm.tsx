import { supportedLanguages } from "@/types";
import { getDictionaryInClientComponent } from "@/app/utils/getDictionaryInClientComponent";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import { useForm } from "react-hook-form";
import styles from "../login.module.css";

type Props = {
  lang: supportedLanguages;
  registration: (
    phone: string,
    password: string,
    name: string
  ) => Promise<void>;
};

type Inputs = {
  name: string;
  phone: string;
  password: string;
};

export default function SignUpForm({ lang, registration }: Props) {
  const dictionary = getDictionaryInClientComponent(lang);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const signUp = (data: Inputs) => {
    registration(data.phone, data.password, data.name);
  };

  return (
    <form onSubmit={handleSubmit(signUp)}>
      <h1>{dictionary.login.createAccount}</h1>
      <input
        {...register("name", { required: true, minLength: 2 })}
        type="text"
        placeholder={dictionary.login.name}
      />
      {errors.name && (
        <span className={styles.errorMessage}>
          {dictionary.login.nameError}
        </span>
      )}
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
      <button>{dictionary.login.signUp}</button>
    </form>
  );
}
