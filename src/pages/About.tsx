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
            <TellButtonSection title="Мы превращаем идеи в решения, которые двигают ваш бизнес и вашу команду вперёд и только вперед."/>
        </main>
    )
}

export default About