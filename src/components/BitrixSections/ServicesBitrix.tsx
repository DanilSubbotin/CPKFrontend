import { constantsConfig } from "../../utils/constants.config";
import ServiceItem from "../ServicesSections/ServiceItem";

const ServicesBitrix = () => {
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 mt-34">
      <h1 className="uppercase font-semibold text-4xl text-primary">
        услуги битрикс 24
      </h1>
      <ul className="w-full grid grid-cols-4 gap-x-10 gap-y-24">
        {constantsConfig.bpmSoftServices.map((s) => (
          <ServiceItem title='Битрикс 24' body={s.body} key={s.body} />
        ))}
      </ul>
    </section>
  );
};

export default ServicesBitrix;
