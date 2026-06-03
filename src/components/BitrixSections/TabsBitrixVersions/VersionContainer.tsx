interface Props {
  title: string;
  forWhom: string[];
}

const VersionContainer = ({ title, forWhom }: Props) => {
  return (
    <div className="w-full flex flex-col items-center gap-20">
      <h2 className="font-semibold text-3xl text-primary text-center">{title}</h2>
      <div className="max-w-300 flex gap-10 flex-wrap justify-center">
        {forWhom.map((whom) => (
          <div className="w-fit border border-[#003FB0] rounded-full px-8 py-4">
            <h4>{whom}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VersionContainer;
