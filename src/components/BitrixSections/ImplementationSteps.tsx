const steps = [
  {
    step: "Шаг 1",
    title: "Облачная версия",
    body: "Интервью с ключевыми сотрудниками. Анализ существующих систем, процессов и документации",
  },
  {
    step: "Шаг 1",
    title: "Облачная версия",
    body: "Интервью с ключевыми сотрудниками. Анализ существующих систем, процессов и документации",
  },
  {
    step: "Шаг 1",
    title: "Облачная версия",
    body: "Интервью с ключевыми сотрудниками. Анализ существующих систем, процессов и документации",
  },
  {
    step: "Шаг 1",
    title: "Облачная версия",
    body: "Интервью с ключевыми сотрудниками. Анализ существующих систем, процессов и документации",
  },
  {
    step: "Шаг 1",
    title: "Облачная версия",
    body: "Интервью с ключевыми сотрудниками. Анализ существующих систем, процессов и документации",
  },
  {
    step: "Шаг 1",
    title: "Облачная версия",
    body: "Интервью с ключевыми сотрудниками. Анализ существующих систем, процессов и документации",
  },
  {
    step: "Шаг 1",
    title: "Облачная версия",
    body: "Интервью с ключевыми сотрудниками. Анализ существующих систем, процессов и документации",
  },
];

const ImplementationSteps = () => {
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 my-34">
      <ul className="grid grid-cols-4 gap-10">
        {steps.map((step, index) => (
          <li key={index} className="p-8 pb-40 border border-text-footer/40 rounded-lg flex flex-col gap-10 text-primary">
            <h3 className="font-semibold text-xl">{step.step}</h3>
            <h4 className="font-semibold text-xl">{step.title}</h4>
            <p className="text-text-gray">{step.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ImplementationSteps;
