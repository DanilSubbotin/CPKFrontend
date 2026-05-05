import Bestseller from "../components/MainSections/Bestseller";
import Cases from "../components/MainSections/Cases/Cases";
import GreetingSection from "../components/MainSections/GreetingSection";
import Solutions from "../components/MainSections/Solutions";
import TellButtonSection from "../components/TellButtonSection";

const Main = () => {
  return (
    <main className="font-primary">
      <GreetingSection />
      <Bestseller />
      <Solutions />
      <Cases />
      <TellButtonSection title="Расскажите о своем проекте"/>
    </main>
  );
};

export default Main;
