import { constantsConfig } from "../../utils/constants.config";

const BitrixGreeting = () => {
  return (
    <>
      <section className="w-full px-10 flex flex-col items-center gap-34 my-34 text-primary">
        <h1 className="uppercase font-semibold text-4xl">Битрикс 24</h1>
        <p className="font-semibold text-3xl text-center">
          Битрикс24 — это платформа для управления бизнесом, которая помогает
          оптимизировать ключевые направления деятельности предприятия,
          эффективно управлять процессами, сокращать расходы и продавать больше.
        </p>
        <ul className="flex justify-between w-full mt-20">
          {constantsConfig.actions.map((service) => (
            <li
              className="flex flex-col gap-5 items-center w-fit"
              key={service.title}
            >
              <h3 className="font-semibold text-4xl text-primary">
                {service.title}
              </h3>
              <span className="font-medium text-lg text-text-gray">
                {service.body}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default BitrixGreeting;
