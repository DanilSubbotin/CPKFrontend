import Cursor from "/imgs/Cursor.svg";

const Solutions = () => {
  const styleH3 = "font-semibold text-xl text-primary";
  const styleP = "font-semibold text-text-gray";
  return (
    <section className="w-full max-w-422 mx-auto flex flex-col gap-35 pb-64">
      <h1 className="uppercase text-center font-semibold text-4xl text-primary">решения</h1>
      <div className="grid grid-cols-4 gap-x-10 gap-y-24">
        <div className="flex flex-col gap-16">
          <h3 className={styleH3}>Продуктовые каталоги</h3>
          <p className={styleP}>
            Сделаем онлайн-витрины, которые увеличат конверсию в заявку
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <h3 className={styleH3}>Личные кабинеты</h3>
          <p className={styleP}>
            Оцифруем услуги компании и повысим эффективность коммуникации с
            клиентами
          </p>
        </div>
        <div />
        <img src={Cursor} alt="Фотография" />
        <div className="flex flex-col gap-16">
          <h3 className={styleH3}>Сайты аэропортов</h3>
          <p className={styleP}>
            Обладаем самой широкой экспертизой на рынке. Более 15 аэропортов
            проинтегрировано
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <h3 className={styleH3}>Корпоративные сайты</h3>
          <p className={styleP}>
            Повысим инвестиционную привлекательность компании
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <h3 className={styleH3}>Карьерные сайты</h3>
          <p className={styleP}>
            Увеличим количество и качество соискателей, усилим HR-бренд и
            сократим расходы
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <h3 className={styleH3}>Онлайн-сервисы</h3>
          <p className={styleP}>
            Оптимизируем процессы, продажи, коммуникации и отношения с клиентами
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
