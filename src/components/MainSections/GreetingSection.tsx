import Button from "../Button";
import Fon from "/imgs/fon.svg";

const GreetingSection = () => {
  return (
    <section className="flex flex-col items-center pt-36">
      <div className="relative max-w-210 text-center flex flex-col gap-8 items-center -mb-50">
        <h1 className="font-semibold text-4xl text-primary">
          Проектируем и автоматизируем управляемые бизнес-процессы
        </h1>
        <h3 className="font-semibold text-lg text-text-gray">
          Центр проектных компетенций помогает компаниям выстраивать прозрачные
          продажи, сервис и внутренние процессы на базе Bitrix24, BPMsoft и
          интеграционных решений enterprise-уровня. Проводим предпроектную
          аналитику, проектируем архитектуру системы, автоматизируем процессы и
          объединяем корпоративные сервисы в единое цифровое пространство.
        </h3>
        <Button variant="black">Связаться</Button>
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
