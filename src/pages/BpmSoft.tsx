import AdvantageSection from "../components/BpmSoftSections/AdvantageSection"
import BpmSoftGreeting from "../components/BpmSoftSections/BpmSoftGreeting"
import BpmSoftTabbing from "../components/BpmSoftSections/BpmSoftTabbing"
import CasesBPMSection from "../components/BpmSoftSections/CasesBPMSection"
import ServicesBPMSection from "../components/BpmSoftSections/ServicesBPMSection"
import TellButtonSection from "../components/TellButtonSection"

const BpmSoft = () => {
    return (
        <main className="w-full max-w-422 mx-auto font-primary">
            <BpmSoftGreeting />
            <BpmSoftTabbing />
            <AdvantageSection />
            <ServicesBPMSection />
            <CasesBPMSection />
            <TellButtonSection title="Расскажите о своем проекте"/>
        </main>
    )
}

export default BpmSoft