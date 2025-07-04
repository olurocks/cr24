import { Container } from "../shared/Container";
import { Subtitle } from "../shared/Title";

export const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex flex-col justify-center align-center">
        <header className=" mb-4 md:mb-12 text-center">
          <Subtitle>Exciting tiers for Larger Volumes </Subtitle>
        </header>
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-full rounded-3xl 
            backdrop-blur-lg border border-white/30 
            shadow-lg shadow-black/10 md:divide-x divide-white/30
            grid grid-cols-2 md:grid-cols-4 bg-carousel"
        >
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              90%{" "}
            </h2>
            <p className="mt-2 text-body-text text-lg"> $20M+</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              80%{" "}
            </h2>
            <p className="mt-2 mt-2 text-body-text text-lg"> $10M - $20M</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              70%{" "}
            </h2>
            <p className="mt-2 mt-2 text-body-text text-lg">$5M - $10M</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              60%{" "}
            </h2>
            <p className="mt-2 mt-2 text-body-text text-lg"> $1M - $5M</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
