const bitrixAdvantage = [
  {
    title: "Интеграции",
    listTitle:
      "Битрикс24 можно подключить к вашей IT-среде и любому ПО, у которого есть API.",
    list: [
      "1С",
      "Active directory",
      "Каталог вакансий",
      "ERP-системы",
      "IAM-системы",
      "Power BI",
      "Почтовые сервисы",
      "Телефония, и др.",
    ],
  },
  {
    title: "Мобильность",
    listTitle:
      "Функционалом портала можно пользоваться со смартфона на iOS или Android. Приложение поможет оставаться в рабочем процессе сотрудникам, находящимся вне офиса и не возле компьютера.",
    list: [
      "Чат",
      "Живая лента",
      "Задачи",
      "Календарь",
      "Диск",
      "CRM",
      "Голосовые сообщения",
      "Рабочее время",
      "Ассистенты",
      "Список сотрудников",
      "Пуш-уведомления",
    ],
  },
  {
    title: "Безопасность",
    listTitle:
      "Битрикс24 соответствует требованиям крупных организаций и имеет сертификацию ФСТЭК России для работы с персональными данными любого уровня. Комплекс инструментов безопасности обеспечивает высокий уровень защищенности доступа и сохранности информации.",
    list: [
      "Панель безопасности с уровнями защищенности",
      "Проактивный фильтр (Web Application FireWall)",
      "Инструмент для аудита безопасности PHP-кода",
      "Веб-антивирус",
      "Технология одноразовых паролей (OTP)",
      "Генератор одноразовых паролей (Bitrix OTP)",
      "Защита авторизованных сессий",
      "Контроль активности",
      "Безопасная авторизация без SSL",
      "Журнал вторжений",
      "Защита административных разделов по IP",
      "Стоп-листы",
      "Контроль целостности скрипта",
      "Рекомендации по настройке",
      "Монитор обновлений",
      "Внешний контроль инфосреды",
      "Защита редиректов от фишинга",
    ],
  },
];

const AdvantagesBitrix = () => {
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 my-34 text-primary">
      <h1 className="uppercase font-semibold text-4xl text-primary">
        Преимущества битрикс 24
      </h1>
      {bitrixAdvantage.map((advantage, index) => (
        <div className="w-full grid grid-cols-2" key={index}>
          <h4 className="font-semibold text-xl">{advantage.title}</h4>
          <div className="flex flex-col gap-10">
            <h5 className="font-semibold text-xl">{advantage.listTitle}</h5>
            <ul className="w-full grid grid-cols-2 text-text-gray text-base">
              {advantage.list.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AdvantagesBitrix;
