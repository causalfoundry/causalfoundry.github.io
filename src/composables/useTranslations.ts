import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const defaultLang = "en";

export function useTranslations(basePath: string) {
  const { locale, messages } = useI18n();
  const route = useRoute();
  const translationsLoaded = ref(false);

  const lang = Array.isArray(route.params.lang)
    ? route.params.lang[0]
    : route.params.lang || locale.value;

  const loadTranslations = async () => {
    try {
      const fallbackTranslations = await fetch(
        `/locales/${basePath}/${defaultLang}.json`
      ).then((res) => res.json());

      const commonTranslations = await fetch(`/locales/${lang}.json`).then(
        (res) => res.json()
      );

      const translations = await fetch(
        `/locales/${basePath}/${lang}.json`
      ).then((res) => res.json());

      messages.value[lang] = {
        ...commonTranslations,
        ...messages.value[lang],
        ...translations,
        ...fallbackTranslations,
      };

      translationsLoaded.value = true;
    } catch (error) {
      try {
        const commonTranslations = await fetch(
          `/locales/${defaultLang}.json`
        ).then((res) => res.json());

        const fallbackTranslations = await fetch(
          `./locales/${basePath}/${defaultLang}.json`
        ).then((res) => res.json());

        messages.value[defaultLang] = {
          ...commonTranslations,
          ...messages.value[defaultLang],
          ...fallbackTranslations,
        };

        translationsLoaded.value = true;
      } catch (fallbackError) {
        console.error(
          `Failed to load fallback translations:`,
          defaultLang,
          basePath,
          fallbackError
        );
      }
    }
  };

  onMounted(loadTranslations);

  const currentTranslations = computed(() => {
    const lang = Array.isArray(route.params.lang)
      ? route.params.lang[0]
      : route.params.lang || locale.value;

    return messages.value[lang] || messages.value[defaultLang];
  });

  return {
    translationsLoaded,
    messages,
    currentTranslations,
    currentLang: lang,
  };
}
