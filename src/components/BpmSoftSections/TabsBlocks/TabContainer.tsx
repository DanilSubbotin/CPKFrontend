interface Props {
  title: string;
  imgLink: string
}

const TabContainer = ({ title, imgLink }: Props) => {
  return (
    <div className="w-full grid grid-cols-2">
      <div className="flex flex-col gap-10">
        <h3 className="text-xl font-semibold">{title}</h3>
        {/* <ul className="flex flex-col text-text-gray">
          <li>Профиль клиента 360</li>
          <li>Профиль клиента 360</li>
          <li>Профиль клиента 360</li>
          <li>Профиль клиента 360</li>
          <li>Профиль клиента 360</li>
          <li>Профиль клиента 360</li>
          <li>Профиль клиента 360</li>
        </ul> */}
      </div>
      <div className="flex justify-end">
        <img
          src={`/imgs/${imgLink}`}
          alt="Фотография таба"
          className="w-full max-w-139 h-auto"
        />
      </div>
    </div>
  );
};

export default TabContainer;
