import { useState } from "react";
import { constantsConfig } from "../../utils/constants.config";
import TabPanel from "../TabPanel";
import TabContainer from "./TabsBlocks/TabContainer";

const BpmSoftTabbing = () => {
  const [activeTab, setActiveTab] = useState(constantsConfig.tabs[0]);

  const renderTabs = (tab: string) => {
    switch (tab) {
      case "Продажи":
        return (
          <TabContainer
            title="Автоматизация полного цикла продаж - от первого обращения клиента до повторных продаж и развития клиентской базы. BPMSoft помогает выстраивать прозрачные процессы, контролировать коммуникации, управлять воронками продаж и повышать эффективность коммерческих подразделений."
            imgLink=""
          />
        );
      case "Сервис":
        return (
          <TabContainer
            title="Управление клиентским сервисом, обращениями и внутренними сервисными процессами компании в единой системе. Контроль SLA, маршрутизация обращений, автоматизация сервисных сценариев и прозрачная аналитика качества обслуживания."
            imgLink=""
          />
        );
      case "Маркетинг":
        return (
          <TabContainer
            title="Инструменты для управления маркетинговыми коммуникациями, клиентскими сегментами, digital-активностями и аналитикой эффективности маркетинга. Поддержка сквозной аналитики и автоматизированных сценариев взаимодействия с клиентами."
            imgLink=""
          />
        );
      case "Портал":
        return (
          <TabContainer
            title="Единое цифровое пространство для сотрудников компании: коммуникации, задачи, согласования, документы, внутренние сервисы и совместная работа подразделений в рамках единой платформы."
            imgLink=""
          />
        );
      case "Конструктор":
        return (
          <TabContainer
            title="Low-code инструменты для гибкой настройки бизнес-процессов, интерфейсов, карточек, маршрутов согласования и корпоративных сценариев без необходимости сложной разработки."
            imgLink=""
          />
        );

      default:
        <div>Блока не найдено</div>;
    }
  };

  const onChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="w-full px-10 flex flex-col items-center gap-24 my-34 text-primary">
      <TabPanel
        id="bpmsoft"
        active={activeTab}
        tabs={constantsConfig.tabs}
        onChange={onChange}
      />
      <div className="w-full">{renderTabs(activeTab)}</div>
    </section>
  );
};

export default BpmSoftTabbing;
