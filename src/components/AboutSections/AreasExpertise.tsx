import { constantsConfig } from "../../utils/constants.config";

const AreasExpertise = () => {
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 my-34 text-primary">
      <h1 className="uppercase font-semibold text-4xl">
        ОБЛАСТИ ЭКСПЕРТИЗЫ 
      </h1>
      <ul className="w-full grid grid-cols-4 gap-x-10 gap-y-24">
        {constantsConfig.areas.map(area => (
            <li className="flex gap-8 items-center justify-center" key={area.title}>
                <div className="w-8 h-8 bg-text-footer"/>
                <h4 className="font-semibold">{area.title}</h4>
            </li>
        ))}
      </ul>
    </section>
  );
};

export default AreasExpertise;
