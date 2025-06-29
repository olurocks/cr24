interface TitleProps {
    children: React.ReactNode;
  }
  
  export const Title = ({ children }: TitleProps) => {
    return (
      <h1 className="text-heading-3 font-semibold text-2xl sm:text-3xl md:text-4xl">
        {" "}
        {children}{" "}
      </h1>
    );
  };

  export const Subtitle = ({ children }: TitleProps) => {
    return (
      <h2 className="text-subheading font-semibold text-xl sm:text-2xl md:text-3xl">
        {" "}
        {children}{" "}
      </h2>
    );
  };