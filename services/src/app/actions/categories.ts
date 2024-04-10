"use server";

import { cookies } from "next/headers";
import { API_BASE_URL } from "../constants";

async function getCategories() {
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
