import { constantsConfig } from "../../utils/constants.config";
import ServiceItem from "./ServiceItem";

const ServicesSection = () => {
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 mt-34">
      <h1 className="uppercase font-semibold text-4xl text-primary">услуги</h1>
      <div className="flex justify-between w-full">
        {constantsConfig.actions.map((service) => (
          <div
            className="flex flex-col gap-5 items-center w-fit"
            key={service.title}
          >
            <h3 className="font-semibold text-4xl text-primary">
              {service.title}
            </h3>
            <span className="font-medium text-lg text-text-gray">
              {service.body}
            </span>
          </div>
        ))}
      </div>
      <span className="text-text-footer text-center">
        Создаем и развиваем цифровые продукты для бизнеса и государства. В
        основе <br /> наших решений — исследования, аналитика и цифры
      </span>
      <ul className="w-full grid grid-cols-4 gap-x-10 gap-y-24">
        {constantsConfig.services.map((s) => (
          <ServiceItem title={s.title} body={s.body} key={s.title} />
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;
