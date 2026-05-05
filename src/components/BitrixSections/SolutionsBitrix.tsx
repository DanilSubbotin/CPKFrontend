const solutions = [
    {title: 'Битрикс 24', body: 'Оптимизируем процессы, продажи, коммуникации и отношения с клиентами'},
    {title: 'Битрикс 24', body: 'Разработаем прибыльные интернет-магазины или маркетплейсы'},
    {title: 'Битрикс 24', body: 'Сделаем онлайн-витрины, которые увеличат конверсию в заявку'},
    {title: 'Битрикс 24', body: 'Оцифруем услуги компании и повысим эффективность коммуникации с клиентами'},
]

const SolutionsBitrix = () => {
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 my-60 text-primary">
      <h1 className="uppercase font-semibold text-4xl">Решения битрикс 24</h1>
      <ul className="w-full grid grid-cols-4 gap-x-10 gap-y-24">
        {solutions.map((adv, idx) => (
          <li className="flex flex-col gap-16" key={idx}>
            <h3 className="font-semibold text-xl">{adv.title}</h3>
            <p className="font-medium">{adv.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SolutionsBitrix;
