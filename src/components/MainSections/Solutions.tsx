import Cursor from "/imgs/Cursor.svg";

const Solutions = () => {
  const styleH3 = "font-semibold text-xl text-primary";
  const styleP = "font-semibold text-text-gray";
  return (
    <section className="w-full max-w-422 mx-auto flex flex-col gap-35 pb-64">
      <h1 className="uppercase text-center font-semibold text-4xl text-primary">
        решения
      </h1>
      <div className="grid grid-cols-4 gap-x-10 gap-y-24">
        <div className="flex flex-col gap-16">
          <h3 className={styleH3}>Проектирование и внедрение CRM-систем</h3>
          <p className={styleP}>
            Проектируем цифровую архитектуру продаж, сервиса и клиентских
            процессов на базе Bitrix24 и BPMsoft с учетом специфики бизнеса и
            целей компании.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <h3 className={styleH3}>Автоматизация бизнес-процессов</h3>
          <p className={styleP}>
            Автоматизируем согласования, документооборот, тендерные процессы,
            клиентский сервис, внутренние регламенты и операционные процессы
            компании.
          </p>
        </div>
        <div />
        <img src={Cursor} alt="Фотография" />
        <div className="flex flex-col gap-16">
          <h3 className={styleH3}>Интеграция корпоративных систем</h3>
          <p className={styleP}>
            Объединяем CRM, ERP, 1С, телефонию, сайты, мессенджеры и внешние
            сервисы в единое цифровое пространство компании.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <h3 className={styleH3}>BI и AI-инструменты</h3>
          <p className={styleP}>
            Настраиваем управленческую аналитику, цифровые дашборды, прогнозные
            модели и AI-инструменты для повышения прозрачности и эффективности
            бизнеса.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <h3 className={styleH3}>Enterprise-решения и сложные внедрения</h3>
          <p className={styleP}>
            Реализуем сложные проекты цифровизации для среднего и крупного
            бизнеса с использованием проектной методологии, интеграций и
            enterprise-подхода.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <h3 className={styleH3}>Сопровождение и развитие систем</h3>
          <p className={styleP}>
            Обеспечиваем развитие и поддержку внедренных решений, помогаем
            масштабировать процессы и адаптировать систему под рост бизнеса.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
