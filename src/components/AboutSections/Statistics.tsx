import { constantsConfig } from "../../utils/constants.config";
import Button from "../Button";

const Statistics = () => {
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 my-48">
      <h1 className="uppercase font-semibold text-4xl text-primary">статистика</h1>
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
      <Button variant="white">
        Скачать презентацию
      </Button>
    </section>
  );
};

export default Statistics;
