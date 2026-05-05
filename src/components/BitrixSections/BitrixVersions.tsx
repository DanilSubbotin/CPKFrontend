import { useState } from "react";
import TabPanel from "../TabPanel";
import CloudVersion from "./TabsBitrixVersions/CloudVersion";
import BoxVersion from "./TabsBitrixVersions/BoxVersion";

const tabs = ["Облачная версия", "Коробочная версия"];

const BitrixVersions = () => {
  const [tab, setTab] = useState("Облачная версия");

  const onChange = (tab: string) => {
    setTab(tab);
  };

  const renderTabs = () => {
    if (tab === "Облачная версия") {
      return <CloudVersion />;
    } else return <BoxVersion />;
  };
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 my-34">
      <TabPanel id="bitrix" active={tab} onChange={onChange} tabs={tabs} />
      {renderTabs()}
    </section>
  );
};

export default BitrixVersions;
