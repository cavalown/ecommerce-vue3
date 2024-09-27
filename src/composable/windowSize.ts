import { ref, onMounted, onUnmounted, computed } from "vue";

export function windowSize() {
  const windowWidth = ref(window.innerWidth);

  const updateWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener("resize", updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateWidth);
  });

  const isDesktop = computed(() => windowWidth.value >= 992);

  return {
    windowWidth,
    isDesktop,
  };
}
