import styles from "./Home.module.css";
import { getDictionary } from "@/app/utils/getDictionary";
import { supportedLanguages } from "@/types";
import { getCategories } from "../actions/categories";
import { ICategory } from "@/types";
import CustomLink from "../components/CustomLink/CustomLink";

type Props = {
  lang: supportedLanguages;
};

export default async function Categories({ lang }: Props) {
  const dictionary = await getDictionary(lang);

  const categories = await getCategories();

  return (
    <section className={styles.wrapper}>
      <ul className={styles.categories}>
        {categories.map((category: ICategory) => (
          <li key={category.id}>
            <h2 className={styles.category}>
              {
                dictionary.home.categories[
                  category.name as keyof typeof dictionary.home.categories
                ]
              }
            </h2>
            <ul className={styles.subcategories}>
              {category.subcategories.map((subcategory) => (
                <li className={styles.subcategory} key={subcategory.id}>
                  <CustomLink
                    href={`/${category.name}/${subcategory.name}`}
                    lang={lang}
                  >
                    {
                      dictionary.home.subcategories[
                        subcategory.name as keyof typeof dictionary.home.subcategories
                      ]
                    }
                  </CustomLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
