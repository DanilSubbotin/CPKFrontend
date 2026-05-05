const Industry = () => {

    const industries = [
        { title: 'Финансовые технологии', count: 201 },
        { title: 'Крупнейшие корпорации', count: 23 },
        { title: 'Медицинские технологии', count: 32 },
        { title: 'Образовательные технологии', count: 12 },
        { title: 'Зелёные и чистые технологии', count: 11 },
        { title: 'Технологии в недвижимости', count: 123 },
        { title: 'Транспортные технологии', count: 41 },
        { title: 'Технологии в ритейле', count: 46 },
        { title: 'Кадровые технологии', count: 86 },
        { title: 'Кадровые технологии', count: 4 },
        { title: 'Кибербезопасность', count: 55 },
    ]
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 mt-34">
      <h1 className="uppercase font-semibold text-4xl text-primary">отрасли</h1>
      <ul className="w-full grid grid-cols-4 gap-x-10 gap-y-24">
        {industries.map(ind => (
            <li key={ind.count} className="flex flex-col gap-6">
                <h3 className="font-semibold text-2xl text-primary">{ind.title}</h3>
                <span className="text-text-footer font-medium">{ind.count}+</span>
            </li>
        ))}
      </ul>
    </section>
  );
};

export default Industry;
