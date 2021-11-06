import isEmpty from "lodash/isEmpty";

export function translateOptions(value: string, options: Record<string, any>, translations: Record<string, any>) {
  const defaultLocale = window.I18n.defaultLocale || "en";

  if (isEmpty(options)) {
    return translations[defaultLocale][value];
  }

  let currValue = translations[options?.locale || defaultLocale][value];

  Object.entries(options).forEach(option => {
    const [optionKey, optionValue] = option;

    currValue = currValue.replace(optionKey, optionValue);
  });

  return currValue?.replace(/[^\w\s\'.]/gi, "");
}
