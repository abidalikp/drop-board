import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <footer className="flex items-center justify-end gap-4 px-4 py-6 border-t inset-shadow-sm inset-shadow-shadow border-tertiary">
      <ThemeToggle />
    </footer>
  );
};

export default Footer;
