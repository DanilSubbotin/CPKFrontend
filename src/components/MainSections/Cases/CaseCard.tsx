interface Props {
  img: string;
  title: string;
  body: string;
  className?: string;
}

const CaseCard = ({ img, title, body, className }: Props) => {
  return (
    <article className={`flex flex-col gap-5 ${className}`}>
        <img 
          src={img} 
          alt={title}
          className="aspect-16/9 h-full object-cover rounded-xl"
        />

      <div className="flex flex-col gap-3">
        <h5 className="font-semibold text-text-gray">{title}</h5>
        <p className="text-text-gray">{body}</p>
      </div>
    </article>
  );
};

export default CaseCard;
