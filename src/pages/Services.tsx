import Clients from "../components/ServicesSections/Clients";
import Industry from "../components/ServicesSections/Industry";
import ServicesSection from "../components/ServicesSections/ServicesSection";
import TellButtonSection from "../components/TellButtonSection";

const Services = () => {
  return (
    <main className="w-full max-w-422 mx-auto font-primary">
      <ServicesSection />
      <Industry />
      <Clients />
      <TellButtonSection title="Расскажите о своем проекте"/>
    </main>
  );
};

export default Services;
