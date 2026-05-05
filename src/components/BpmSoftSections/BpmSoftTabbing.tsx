import { useState } from "react";
import { constantsConfig } from "../../utils/constants.config";
import TabPanel from "../TabPanel";
import SalesBlock from "./TabsBlocks/SalesBlock";
import ServiceBlock from "./TabsBlocks/ServiceBlock";
import MarketingBlock from "./TabsBlocks/MarketingBlock";
import PortalBlock from "./TabsBlocks/PortalBlock";
import ConstructorBlock from "./TabsBlocks/ConstructorBlock";

const BpmSoftTabbing = () => {
  const [activeTab, setActiveTab] = useState(constantsConfig.tabs[0]);

  const renderTabs = (tab: string) => {
    switch (tab) {
      case "Продажи":
        return <SalesBlock />;
      case "Сервис":
        return <ServiceBlock />;
      case "Маркетинг":
        return <MarketingBlock />;
      case "Портал":
        return <PortalBlock />;
      case "Конструктор":
        return <ConstructorBlock />;

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
      <div className="min-h-100 w-full">{renderTabs(activeTab)}</div>
    </section>
  );
};

export default BpmSoftTabbing;
