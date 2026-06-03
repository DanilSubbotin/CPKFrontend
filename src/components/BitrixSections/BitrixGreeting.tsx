import { constantsConfig } from "../../utils/constants.config";

const BitrixGreeting = () => {
  return (
    <>
      <section className="w-full px-10 flex flex-col items-center gap-34 my-34 text-primary">
        <h1 className="uppercase font-semibold text-4xl">Битрикс 24</h1>
        <div className="flex flex-col gap-15">
          <p className="font-semibold text-3xl text-center">
            Bitrix24 — цифровая платформа для управления продажами, клиентским
            сервисом, внутренними коммуникациями и бизнес-процессами компании.
            Система помогает выстраивать прозрачную работу сотрудников,
            автоматизировать рутинные операции, объединять корпоративные сервисы
            и принимать управленческие решения на основе данных.
          </p>
          <p className="font-semibold text-3xl text-center">
            Центр проектных компетенций реализует проекты внедрения Bitrix24 для
            среднего и крупного бизнеса: от CRM и корпоративных порталов до
            сложных интеграций, автоматизации процессов и enterprise-решений.
          </p>
        </div>
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
