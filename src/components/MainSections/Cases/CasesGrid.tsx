import CaseCard from "./CaseCard";
import Case1 from "/imgs/Case1.png";
import Case2 from "/imgs/Case2.png";

const CasesGrid = () => {
  return (
    <div className="w-full max-w-7xl flex flex-col gap-20">
      <div className="flex gap-10 justify-end">
        <CaseCard
          className="basis-3/8"
          title="Hot pizza"
          img={Case1}
          body="It should be noted that the rise of human consciousness, to some extent, determines the principles of advanced process"
        />
        <CaseCard
          className="basis-4/8"
          title="Hot pizza"
          img={Case2}
          body="It should be noted that the rise of human consciousness, to some extent, determines the principles of advanced process management"
        />
      </div>

      <div className="flex gap-10 justify-end">
        <CaseCard
          className="basis-4/8"
          title="ScaleBit IT"
          img={Case2}
          body="Создана микросервисная архитектура, внедрена контейнеризация и организован централизованный логинг сервисов."
        />
        <CaseCard
          className="basis-3/8"
          title="DataCraft"
          img={Case1}
          body="Построен отказоустойчивый дата-контур, оптимизированы ETL-процессы и внедрена система автоматизированной"
        />
      </div>

      <div className="flex gap-10 justify-end">
        <CaseCard
          className="basis-3/8"
          title="Hot pizza"
          img={Case1}
          body="It should be noted that the rise of human consciousness, to some extent, determines the principles of advanced process"
        />
        <CaseCard
          className="basis-4/8"
          title="Hot pizza"
          img={Case2}
          body="It should be noted that the rise of human consciousness, to some extent, determines the principles of advanced process management"
        />
      </div>
    </div>
  );
};

export default CasesGrid
