"use client";

import { ICategory, supportedLanguages } from "@/types";
import { getDictionaryInClientComponent } from "@/app/utils/getDictionaryInClientComponent";
import { useForm } from "react-hook-form";
import styles from "./createAd.module.css";
import { useUserStore } from "@/app/stores/userStore";
import { IAd } from "@/types";
import { ChangeEvent, useState } from "react";

type Props = {
  lang: supportedLanguages;
  create: (
    userId: number,
    subcategoryId: number,
    title: string,
    description: string | null,
    price: number | null
  ) => Promise<IAd>;
  categories: ICategory[];
};

type Inputs = {
  title: string;
  description: string;
  price: number;
  subcategoryId: number;
};

export default function CreateAdForm({ lang, create, categories }: Props) {
  const dictionary = getDictionaryInClientComponent(lang);
  const user = useUserStore((state) => state.user);
  const [categorySelectValue, setCategorySelectValue] = useState<
    string | undefined
  >();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const changeCategoryValue = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategorySelectValue(event.target.value);
  };

  const submit = async (data: Inputs) => {
    await create(
      user.id as number,
      data.subcategoryId,
      data.title,
      data.description,
      data.price
    );

    // TODO redirect
    reset();
  };

  return (
    <form className={styles.form} id="ad-form" onSubmit={handleSubmit(submit)}>
      <select
        value={categorySelectValue}
        onChange={changeCategoryValue}
        id="categories-select"
        form="ad-form"
      >
        <option disabled selected value={0}>
          {dictionary.createAd.chooseCategory}
        </option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {
              dictionary.home.categories[
                category.name as keyof typeof dictionary.home.categories
              ]
            }
          </option>
        ))}
      </select>
      <select
        disabled={!categorySelectValue}
        id="categories-select"
        form="ad-form"
        {...register("subcategoryId", { required: true })}
      >
        <option disabled selected value={0}>
          {dictionary.createAd.chooseSubcategory}
        </option>
        {categories
          .find((category) => +category.id === +(categorySelectValue as string))
          ?.subcategories.map((subcategory) => (
            <option key={subcategory.id} value={subcategory.id}>
              {
                dictionary.home.subcategories[
                  subcategory.name as keyof typeof dictionary.home.subcategories
                ]
              }
            </option>
          ))}
      </select>
      <input
        {...register("title", { required: true, minLength: 2 })}
        type="text"
        placeholder={dictionary.createAd.title}
      />
      {errors.title && (
        <span className={styles.errorMessage}>
          {dictionary.createAd.titleError}
        </span>
      )}
      <input
        {...register("description")}
        type="text"
        placeholder={dictionary.createAd.description}
      />
      <input
        {...register("price")}
        type="number"
        placeholder={dictionary.createAd.price}
      />
      <button>{dictionary.createAd.createAd}</button>
    </form>
  );
}
