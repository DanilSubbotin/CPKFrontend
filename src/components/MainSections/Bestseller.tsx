import Earth from "/imgs/Earth.svg";

const Bestseller = () => {
  const styleH2 = "font-semibold text-4xl text-primary";
  const styleH3 = "font-semibold text-lg text-text-gray";

  return (
    <section className="w-full max-w-422 mx-auto py-30.5 px-10 flex items-center justify-between">
      <img src={Earth} alt="Фотография Земли" />
      <div className="w-full max-w-190 grid grid-cols-2 gap-y-16">
        <div>
          <h2 className={styleH2}>Лидер продаж</h2>
          <h3 className={styleH3}>BPMsoft</h3>
        </div>
        <div />
        <div>
          <h2 className={styleH2}>Топ-15</h2>
          <h3 className={styleH3}>Интеграторов Москвы</h3>
        </div>
        <div>
          <h2 className={styleH2}>250+</h2>
          <h3 className={styleH3}>Реализованных проектов</h3>
        </div>
        <div>
          <h2 className={styleH2}>Аттестованы по enterprise-направлениям</h2>
          <h3 className={styleH3}>Bitrix24 и BPMsoft</h3>
        </div>
      </div>
    </section>
  );
};

export default Bestseller;
