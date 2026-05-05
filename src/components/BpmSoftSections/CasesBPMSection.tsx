const CasesBPMSection = () => {
  const cases = [
    {
      title: "TechNova",
      body: "Внедрена система автоматизированного мониторинга и выполнена оптимизация серверной инфраструктуры.",
    },
    {
      title: "TechNova",
      body: "Внедрена система автоматизированного мониторинга и выполнена оптимизация серверной инфраструктуры.",
    },
    {
      title: "TechNova",
      body: "Внедрена система автоматизированного мониторинга и выполнена оптимизация серверной инфраструктуры.",
    },
  ];

  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 my-34 text-primary">
      <h1 className="uppercase font-semibold text-4xl">КЕЙСЫ BPMSOFT</h1>
      <ul className="w-full grid grid-cols-3 gap-x-10 gap-y-24">
        {cases.map((c, idx) => (
          <li className="flex flex-col gap-5" key={idx}>
            <div className="w-full aspect-[5/3] bg-text-footer/40 rounded-lg" />
            <div className="flex flex-col gap-3">
              <h4>{c.title}</h4>
              <span>{c.body}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CasesBPMSection;
