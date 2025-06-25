export interface NavItemProps {
  href: string;
  text: string;
  className?: string;
}

export const NavItem = ({ href, text, className = "" }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className={
          className ||
          "duration-300 font-medium ease-linear hover:text-primary py-3"
        }
      >
        {text}
      </a>
    </li>
  );
};