const Clients = () => {
  return (
    <section className="w-full px-10 flex flex-col items-center gap-34 my-34">
      <h1 className="uppercase font-semibold text-4xl text-primary">клиенты</h1>
      <ul className="w-full grid grid-cols-4 gap-x-10 gap-y-24">
        {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="w-full h-16 bg-text-footer/50"></div>
        ))}
      </ul>
    </section>
  );
};

export default Clients