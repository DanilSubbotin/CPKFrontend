interface Props {
    title: string
}

const  TellButtonSection = ({ title }: Props) => {
    return (
        <section className="w-full px-10 flex flex-col gap-24 items-center mb-48">
            <h1 className="font-semibold text-4xl text-primary text-center">{title}</h1>
            <button className="w-full max-w-82 aspect-square bg-primary rounded-full text-white cursor-pointer">
                Рассказать о проекте
            </button>
        </section>
    )
}

export default TellButtonSection