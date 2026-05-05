import Button from "../Button";

const TariffsBitrix = () => {
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 my-34">
      <h1 className="uppercase font-semibold text-4xl text-primary">
        Тарифы битрикс 24
      </h1>
      <div className="flex gap-10">
        <div className="w-98 aspect-square rounded-xl border border-text-footer/40 p-8 flex flex-col items-center gap-30">
          <h3 className="font-semibold text-xl text-primary">Облачная версия</h3>
          <span>от 2 490 ₽/мес.</span>
        </div>
        <div className="w-98 aspect-square rounded-xl border border-text-footer/40 p-8 flex flex-col items-center gap-30">
          <h3 className="font-semibold text-xl text-primary">Облачная версия</h3>
          <span>от 2 490 ₽/мес.</span>
        </div>
      </div>
      <Button>
        Больше информации о цене
      </Button>
    </section>
  );
};

export default TariffsBitrix;
