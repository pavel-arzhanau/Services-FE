import type { Locale } from "../../i18n-config";
import ru from "../dictionaries/ru.json";
import by from "../dictionaries/by.json";

const dictionaries = {
  ru,
  by,
};

export const getDictionaryInClientComponent = (locale: Locale) =>
  dictionaries[locale] ?? dictionaries.ru;
