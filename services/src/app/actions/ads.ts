"use server";

import { cookies } from "next/headers";
import { API_BASE_URL } from "../constants";
import { IAd } from "@/types/IAd";

async function getAdsBySubcategory(
  category: string,
  subcategory: string
): Promise<IAd[]> {
  const ads = await fetch(`${API_BASE_URL}/ads/${category}/${subcategory}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });

  return ads.json();
}

async function getAdById(id: string): Promise<IAd> {
  const ad = await fetch(`${API_BASE_URL}/ads/${id}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });

  return ad.json();
}

async function createAd(
  userId: number,
  subcategoryId: number,
  title: string,
  description: string | null,
  price: number | null
): Promise<IAd> {
  const ad = await fetch(`${API_BASE_URL}/ads`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
    body: JSON.stringify({
      userId,
      subcategoryId,
      title,
      description,
      price,
    }),
  });

  return ad.json();
}
export { getAdsBySubcategory, createAd, getAdById };
