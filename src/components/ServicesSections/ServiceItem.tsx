interface Props {
    title: string,
    body: string
}

const ServiceItem = ({
    title,
    body
}: Props) => {
  return (
    <li className="w-full max-w-98 flex flex-col gap-16 items-start">
      <h3 className="font-semibold text-2xl text-primary">{title}</h3>
      <div className="w-16 h-16 bg-text-footer self-center"/>
      <p className="text-text-gray font-medium">{body}</p>
    </li>
  );
};

export default ServiceItem
