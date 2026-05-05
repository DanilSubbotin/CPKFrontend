import AdvantagesBitrix from "../components/BitrixSections/AdvantagesBitrix";
import BitrixGreeting from "../components/BitrixSections/BitrixGreeting";
import BitrixVersions from "../components/BitrixSections/BitrixVersions";
import ImplementationSteps from "../components/BitrixSections/ImplementationSteps";
import ServicesBitrix from "../components/BitrixSections/ServicesBitrix";
import SolutionsBitrix from "../components/BitrixSections/SolutionsBitrix";
import TariffsBitrix from "../components/BitrixSections/TariffsBitrix";
import CasesBPMSection from "../components/BpmSoftSections/CasesBPMSection";
import TellButtonSection from "../components/TellButtonSection";

const Bitrix = () => {
  return (
    <main className="w-full max-w-422 mx-auto font-primary">
      <BitrixGreeting />
      <SolutionsBitrix />
      <ServicesBitrix />
      <TariffsBitrix />
      <TellButtonSection title="Тарифы на лицензии подбираем индивидуально по бизнес-требованиям." />
      <CasesBPMSection />
      <AdvantagesBitrix />
      <BitrixVersions />
      <ImplementationSteps />
      <TellButtonSection title="Расскажите о своем проекте"/>
    </main>
  );
};

export default Bitrix;
