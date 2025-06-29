import { useState } from "react";
import { Container } from "../shared/Container";
import logo from "../../assets/logo.svg";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";

export const navItems = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#tools", text: "Tools" },
  { href: "#referral", text: "Referrals" },
  { href: "#partners", text: "Partners" },
  { href: "#contact", text: "Contact" },
];

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6 bg-body">
      <Container>
        <nav className="flex items-center justify-between gap-6 w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="bg-body  box-sd flex items-center justify-center">
                <img src={logo} alt="CR2140 Logo" className="w-12 h-12" />
              </div>
              <div className="text-xl font-semibold text-heading-3">CR2140</div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 text-heading-3">
            <ul className="flex items-center gap-8">
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} />
              ))}
            </ul>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 py-1">
            {/* Sign In Button - Desktop */}
            <div className="hidden lg:block">
              <BtnLink text="Sign In" href="#cta" />
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-box-border text-heading-3 transform transition duration-300 hover:scale-110 cursor-pointer transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-box-border text-heading-2 transition-transform duration-300 hover:scale-110 hover:shadow-sm"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-box-border animate-fadeIn">
            <ul className="flex flex-col gap-4 mb-4">
              {navItems.map((item, key) => (
                <NavItem
                  href={item.href}
                  text={item.text}
                  key={key}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </ul>
            <div className="pt-4 border-t border-box-border">
              <BtnLink text="Sign In" href="#cta" />
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};