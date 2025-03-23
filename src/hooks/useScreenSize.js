import { onMounted, onUnmounted, ref } from "vue";

function useScreenSize() {
  const width = ref(0);
  const height = ref(0);

  function updateScreenSize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }

  onMounted(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateScreenSize);
  });

  return { width, height };
}

export default useScreenSize;
