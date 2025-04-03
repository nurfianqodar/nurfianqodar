const useScreenSize = () => {
  const size = {
    innerWidth: useState("innerWidth", () => 0),
    innerHeight: useState("innerHeight", () => 0),
  };

  const updateSize = () => {
    size.innerHeight.value = window.innerHeight;
    size.innerWidth.value = window.innerWidth;
  };

  onMounted(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateSize);
  });

  return size;
};

export default useScreenSize;
