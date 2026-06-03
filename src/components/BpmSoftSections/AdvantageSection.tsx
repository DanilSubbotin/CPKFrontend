const AdvantageSection = () => {
  const advantage = [
    {
      title: "Гибкая настройка процессов",
      body: "BPMSoft позволяет проектировать и адаптировать бизнес-процессы под реальные задачи компании без жестких ограничений типовых решений.",
    },
    {
      title: "Enterprise-архитектура",
      body: "Платформа подходит для среднего и крупного бизнеса с распределенной структурой, высокими нагрузками и сложными корпоративными процессами.",
    },
    {
      title: "Low-code подход",
      body: "Гибкая настройка карточек, маршрутов, интерфейсов и процессов позволяет быстро адаптировать систему под изменения бизнеса.",
    },
    {
      title: "Интеграция корпоративных систем",
      body: "BPMSoft легко интегрируется с ERP, CRM, 1С, внешними сервисами, сайтами и корпоративной инфраструктурой компании.",
    },
    {
      title: "Масштабируемость и безопасность",
      body: "Платформа поддерживает высокий уровень отказоустойчивости, разграничение прав доступа и требования корпоративной безопасности.",
    },
    {
      title: "Аналитика и управление данными",
      body: "Система помогает руководству получать прозрачную аналитику по процессам, эффективности подразделений и ключевым показателям бизнеса.",
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
