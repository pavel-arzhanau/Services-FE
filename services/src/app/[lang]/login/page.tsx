"use server";
import { supportedLanguages } from "@/types";
import LoginDesktopClient from "./components/LoginClientDesktop";
import { login } from "@/app/actions/auth";
import { registration, checkAuth } from "@/app/actions/auth";
import { redirect } from "next/navigation";

type Props = {
  params: {
    lang: supportedLanguages;
  };
};

export default async function LoginDesktop({ params: { lang } }: Props) {
  const auth = await checkAuth();
  if (auth.user) {
    redirect("/");
  }

  return (
    <LoginDesktopClient login={login} lang={lang} registration={registration} />
  );
}
