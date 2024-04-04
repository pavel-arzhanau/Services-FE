"use server";
import { AuthResponse } from "@/types";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

const API_BASE_URL = "http://localhost:4000";

async function login(phone: string, password: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone,
      password,
    }),
  });

  const token = response.headers.getSetCookie()[0].split(";")[0].split("=")[1];

  cookies().set({
    name: "refreshToken",
    value: token,
    httpOnly: true,
    expires: new Date(jwtDecode(token).exp! * 1000),
  });

  redirect("/");
}

async function logout(): Promise<void> {
  await fetch(`${API_BASE_URL}/auth/logout`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  cookies().delete("refreshToken");
}
async function registration(
  phone: string,
  password: string,
  name: string
): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/auth/registration`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone,
      password,
      name,
    }),
  });

  const token = response.headers.getSetCookie()[0].split(";")[0].split("=")[1];

  cookies().set({
    name: "refreshToken",
    value: token,
    httpOnly: true,
    expires: new Date(jwtDecode(token).exp! * 1000),
  });

  redirect("/");
}

async function checkAuth(): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
    credentials: "include",
    headers: {
      Cookie: cookies().toString(),
    },
  });
  return response.json();
}

export { login, checkAuth, registration, logout };
