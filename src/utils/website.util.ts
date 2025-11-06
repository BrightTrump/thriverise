export const handleSmoothScroll = (id: string) => {
  if (!id) return;
  console.log("scroll");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
