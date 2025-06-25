export interface NavItemProps {
  href: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

export const NavItem = ({
  href,
  text,
  className = "",
  onClick,
}: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className={
          className ||
          "duration-300 font-medium ease-linear hover:text-primary py-3"
        }
        onClick={onClick}
      >
        {text}
      </a>
    </li>
  );
};
