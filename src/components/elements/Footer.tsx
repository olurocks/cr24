import { Container } from "../shared/Container";
import logo from "../../assets/icon.svg";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    company: [
      { text: "About Us", href: "/about" },
      { text: "Careers", href: "/careers" },
      { text: "Press", href: "/press" },
      { text: "Blog", href: "/blog" },
    ],
    support: [
      { text: "Help Center", href: "/help" },
      { text: "Documentation", href: "/docs" },
      { text: "API Reference", href: "/api" },
      { text: "Community", href: "/community" },
    ],
    legal: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
      { text: "Cookie Policy", href: "/cookies" },
      { text: "Security", href: "/security" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: <FaTwitter /> },
    { name: "LinkedIn", href: "#", icon: <FaLinkedin /> },
    { name: "GitHub", href: "#", icon: <FaGithub /> },
    { name: "Discord", href: "#", icon: <FaDiscord /> },
    {
      name: "Telegram",
      href: "https://t.me/CR2140",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M9.993 15.674l-.39 4.13c.56 0 .803-.24 1.096-.527l2.63-2.497 5.454 3.98c1 .552 1.71.262 1.96-.924l3.553-16.66c.323-1.497-.547-2.08-1.52-1.73L1.7 9.34c-1.46.57-1.44 1.38-.25 1.75l4.37 1.37 10.16-6.41c.48-.31.92-.14.56.2" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative mt-20 bg-carousel">
      {/* Main Footer Content */}
      <Container className="pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} className="w-8 h-8" alt="CR2140 Logo" />
              <span className="text-xl font-bold footer-header">CR2140</span>
            </div>
            <p className="text-body-text mb-6 max-w-md leading-relaxed">
              Empowering businesses with cutting-edge AI solutions. Transform
              your operations with intelligent automation and data-driven
              insights.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary transition-colors duration-300 flex items-center justify-center text-white hover:text-white hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-heading-1 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerSections.company.map((item, index) => (
                <li key={index}>
                  <NavItem
                    href={item.href}
                    text={item.text}
                    className="transition-colors duration-200 text-body-text"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-heading-1 mb-4">Support</h3>
            <ul className="space-y-2">
              {footerSections.support.map((item, index) => (
                <li key={index}>
                  <NavItem
                    href={item.href}
                    text={item.text}
                    className="text-body-text hover:text-primary transition-colors duration-200"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-heading-1 mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerSections.legal.map((item, index) => (
                <li key={index}>
                  <NavItem
                    href={item.href}
                    text={item.text}
                    className="text-body-text hover:text-primary transition-colors duration-200"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-heading-1 mb-2">
                Stay Updated
              </h3>
              <p className="text-white/80 text-sm">
                Get the latest insights and product updates.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white">
              <p>&copy; {currentYear} CR2140. All rights reserved.</p>
            </div>

            {/* Main Navigation in Footer */}
            <ul className="flex gap-6 text-sm">
              {navItems.map((item, key) => (
                <NavItem
                  key={key}
                  href={item.href}
                  text={item.text}
                  className="text-white hover:text-primary transition-colors duration-200"
                />
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </footer>
  );
};
