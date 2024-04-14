"use server";

import { cookies } from "next/headers";
import { API_BASE_URL } from "../constants";
import { ICategory } from "@/types";

async function getCategories(): Promise<ICategory[]> {
  const categories = await fetch(`${API_BASE_URL}/categories`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });

  return categories.json();
}

export { getCategories };
