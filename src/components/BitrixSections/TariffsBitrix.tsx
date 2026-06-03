import Button from "../Button";

const TariffsBitrix = () => {
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 my-34">
      <h1 className="uppercase font-semibold text-4xl text-primary">
        Тарифы битрикс 24
      </h1>
      <div className="flex gap-10">
        <div className="w-98 aspect-square rounded-xl border border-text-footer/40 p-8 flex flex-col items-center gap-20">
          <h3 className="font-semibold text-xl text-primary">
            Облачная версия Битрикс24
          </h3>
          <span>От 1 743 ₽/месяц за команду.</span>
          <span className="text-center">
            Подходит для быстрого запуска CRM, автоматизации продаж, задач,
            коммуникаций и внутренних процессов компании без необходимости
            собственной серверной инфраструктуры.
          </span>
        </div>
        <div className="w-98 aspect-square rounded-xl border border-text-footer/40 p-8 flex flex-col items-center gap-20">
          <h3 className="font-semibold text-xl text-primary">
            Коробочная версия Битрикс24
          </h3>
          <span>От 109 000 ₽/год.</span>
          <span className="text-center">
            Решение для среднего и крупного бизнеса с повышенными требованиями к
            безопасности, интеграциям, производительности и кастомизации
            бизнес-процессов.
          </span>
        </div>
        <div className="w-98 aspect-square rounded-xl border border-text-footer/40 p-8 flex flex-col items-center gap-20">
          <h3 className="font-semibold text-xl text-primary">
            Битрикс24 Enterprise
          </h3>
          <span>???</span>
          <span className="text-center">
            Enterprise-решение для крупных компаний и холдинговых структур с
            большим количеством сотрудников, сложной архитектурой процессов,
            распределенными подразделениями и высокими требованиями к
            масштабируемости системы.
          </span>
        </div>
      </div>
      <Button>Больше информации о цене</Button>
    </section>
  );
};

export default TariffsBitrix;
