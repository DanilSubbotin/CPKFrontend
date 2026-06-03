const BpmSoftGreeting = () => {
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 my-34 text-primary">
      <h1 className="uppercase font-semibold text-4xl">BPMSoft</h1>
      <div className="flex flex-col gap-15">
        <p className="font-semibold text-3xl text-center">
          BPMSoft — enterprise-платформа для автоматизации и управления сложными
          бизнес-процессами компании. Решение позволяет выстраивать сквозные
          процессы продаж, клиентского сервиса, согласований и внутренних
          операций в едином цифровом пространстве.
        </p>
        <p className="font-semibold text-3xl text-center">
          Платформа подходит для среднего и крупного бизнеса с высокими
          требованиями к масштабируемости, гибкости настройки, безопасности и
          интеграции корпоративных систем. BPMSoft помогает стандартизировать
          процессы, повысить прозрачность работы подразделений и ускорить
          принятие управленческих решений на основе данных.
        </p>
      </div>
    </section>
  );
};

export default BpmSoftGreeting;
