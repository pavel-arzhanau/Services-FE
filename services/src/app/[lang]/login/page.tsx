"use server";
import { supportedLanguages } from "@/types";
import LoginDesktopClient from "./components/LoginClientDesktop";
import { login } from "@/app/actions/auth";
import { registration } from "@/app/actions/auth";

type Props = {
  params: {
    lang: supportedLanguages;
  };
};

export default async function LoginDesktop({ params: { lang } }: Props) {
  return (
    <LoginDesktopClient login={login} lang={lang} registration={registration} />
  );
}
