import { ref, watchEffect } from 'vue';

export function useDarkMode() {
  const isDark = ref(localStorage.getItem('theme') === 'dark');

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
  };

  watchEffect(() => {
    if (isDark.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });

  return { isDark, toggleDarkMode };
}
