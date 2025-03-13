import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const defaultLang = "en";

export function useTranslations(basePath: string) {
  const { locale, messages } = useI18n();
  const route = useRoute();
  const translationsLoaded = ref(false);

  const loadTranslations = async () => {
    const lang = Array.isArray(route.params.lang)
      ? route.params.lang[0]
      : route.params.lang || locale.value;

    try {
      const commonTranslations = await import(`../locales/${defaultLang}.ts`);

      const fallbackTranslations = await import(
        `${basePath}/locales/${defaultLang}.ts`
      );

      const translations = await import(`${basePath}/locales/${lang}.ts`);

      messages.value[lang] = {
        ...commonTranslations.default,
        ...fallbackTranslations.default,
        ...messages.value[lang],
        ...translations.default,
      };

      console.log("[aec] messages: ", messages.value[lang]);

      translationsLoaded.value = true;
    } catch (error) {
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
  };
}
