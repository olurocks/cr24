import { services } from "../../utils/services-data";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Subtitle } from "../shared/Title";

export const Services = () => {
  return (
    <section id="services">
      {" "}
      <Container className="space-y-6 md:space-y-12 pb-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Subtitle> Affiliates</Subtitle>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
