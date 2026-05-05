import Button from "../Button";
import Fon from "/imgs/fon.svg";

const GreetingSection = () => {
  return (
    <section className="flex flex-col items-center pt-36">
      <div className="relative max-w-210 text-center flex flex-col gap-8 items-center -mb-50">
        <h1 className="font-semibold text-4xl text-primary">
          Внедряем IT-решения, которые <br /> делают бизнес проще и сильнее
        </h1>
        <h3 className="font-semibold text-lg text-text-gray">
          Внедряем IT-решения, которые <br /> делают бизнес проще и сильнее
        </h3>
        <Button variant="black">
          Связаться
        </Button>
      </div>
      <img
        src={Fon}
        alt="Фон"
        className="w-full h-auto object-cover rounded-xl"
      />
    </section>
  );
};

export default GreetingSection;
