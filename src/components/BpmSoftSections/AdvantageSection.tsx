const AdvantageSection = () => {
  const advantage = [
    {
      title: "BPMsoft",
      body: "Разработаем прибыльные интернет-магазины или маркетплейсы",
    },
    {
      title: "BPMsoft",
      body: "Разработаем прибыльные интернет-магазины или маркетплейсы",
    },
    {
      title: "BPMsoft",
      body: "Разработаем прибыльные интернет-магазины или маркетплейсы",
    },
  ];

  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 my-34 text-primary">
      <h1 className="uppercase font-semibold text-4xl">ПРЕИМУЩЕСТВА BPMSOFT</h1>
      <ul className="w-full grid grid-cols-3 gap-x-10 gap-y-24">
        {advantage.map((adv, idx) => (
            <li className="flex flex-col gap-16" key={idx}>
                <h3 className="font-semibold text-xl">{adv.title}</h3>
                <p className="font-medium">{adv.body}</p>
            </li>
        ))}
      </ul>
    </section>
  );
};

export default AdvantageSection;
