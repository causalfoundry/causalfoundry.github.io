import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";

const defaultLang = "jp";

export function useTranslations(basePath: string) {
  const { locale, messages } = useI18n();
  const translationsLoaded = ref(false);
  const loadTranslations = async () => {
    const lang = locale.value;

    try {
      const translations = await import(`${basePath}/locales/${lang}.ts`);
      messages.value[lang] = {
        ...messages.value[lang],
        ...translations.default,
      };
      translationsLoaded.value = true;
    } catch (error) {
      console.error(
        `Failed to load translations for ${lang}, falling back to English:`,
        error
      );
      try {
        const fallbackTranslations = await import(
          `${basePath}/locales/${defaultLang}.ts`
        );
        messages.value[defaultLang] = {
          ...messages.value[defaultLang],
          ...fallbackTranslations.default,
        };

        translationsLoaded.value = true;
      } catch (fallbackError) {
        console.error(`Failed to load fallback translations:`, fallbackError);
      }
    }
  };
  onMounted(loadTranslations);

  const currentTranslations = computed(
    () => messages.value[locale.value] || messages.value[defaultLang]
  );

  return {
    translationsLoaded,
    messages,
    currentTranslations,
  };
}
