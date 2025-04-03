const useMenu = () => {
  const isOpenMenu = useState("isOpenMenu", () => false);
  const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value;
  };
  const closeMenu = () => {
    isOpenMenu.value = false;
  };
  return { isOpenMenu, toggleMenu, closeMenu };
};

export default useMenu;
