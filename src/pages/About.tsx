import AboutSection from "../components/AboutSections/AboutSection"
import AreasExpertise from "../components/AboutSections/AreasExpertise"
import Statistics from "../components/AboutSections/Statistics"
import TellButtonSection from "../components/TellButtonSection"

const About = () => {
    return (
        <main className="w-full max-w-422 mx-auto font-primary">
            <AboutSection />
            <AreasExpertise />
            <Statistics />
            <TellButtonSection title="Помогаем компаниям расти, масштабироваться и принимать решения на основе данных"/>
        </main>
    )
}

export default About