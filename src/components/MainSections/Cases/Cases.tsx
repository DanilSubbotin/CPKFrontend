import CasesGrid from "./CasesGrid";

const Cases = () => {
  return (
    <section className="w-full max-w-422 mx-auto flex flex-col gap-35 mb-34">
      <h1 className="uppercase text-center font-semibold text-4xl text-primary">кейсы</h1>
      <div className="flex justify-between gap-10">
        <ul className="sticky top-5 flex flex-col gap-2 min-w-80 h-fit font-semibold text-lg">
          <li>Все кейсы</li>
          <li>Сайты аэропортов</li>
          <li>Карьерные сайты</li>
          <li>No-code разработка</li>
          <li>UX/UI дизайн</li>
        </ul>
        <CasesGrid />
      </div>
    </section>
  );
};

export default Cases;
