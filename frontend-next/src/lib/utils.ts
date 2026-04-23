/**
 * Scrolls to a specific element by its ID with a smooth animation.
 * @param id The ID of the element to scroll to.
 */
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
