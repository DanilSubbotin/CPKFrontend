import { useState } from "react";
import TabPanel from "../TabPanel";
import VersionContainer from "./TabsBitrixVersions/VersionContainer";

const tabs = ["Облачная версия", "Коробочная версия"];
const forWhomCloud = [
  "Быстрый запуск CRM и автоматизации",
  "Компании без собственной IT-инфраструктуры",
  "Малый и средний бизнес",
  "Стандартные процессы и типовые сценарии",
  "Минимальные затраты на поддержку системы",
];
const forWhomBox = [
  "Средний и крупный бизнес",
  "Холдинговые и распределенные структуры",
  "Сложные бизнес-процессы и кастомизация",
  "Повышенные требования к безопасности",
  "Сложные интеграции и высокая нагрузка",
  "Необходимость размещения системы на собственных серверах",
];

const BitrixVersions = () => {
  const [tab, setTab] = useState("Облачная версия");

  const onChange = (tab: string) => {
    setTab(tab);
  };

  const renderTabs = () => {
    if (tab === "Облачная версия") {
      return (
        <VersionContainer
          title="Облачная версия позволяет быстро запустить систему без собственной инфраструктуры и подходит большинству компаний малого и среднего бизнеса."
          forWhom={forWhomCloud}
        />
      );
    } else
      return (
        <VersionContainer
          title="Коробочная версия предоставляет расширенные возможности кастомизации, интеграций, безопасности и масштабирования для среднего и крупного бизнеса."
          forWhom={forWhomBox}
        />
      );
  };
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 my-34">
      <TabPanel id="bitrix" active={tab} onChange={onChange} tabs={tabs} />
      {renderTabs()}
    </section>
  );
};

export default BitrixVersions;
