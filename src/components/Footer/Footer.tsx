const Footer = () => {
  const footerItems = [
    {
      title: "ЦПК",
      children: [
        { name: "Решение", href: "#" },
        { name: "Кейсы", href: "#" },
        { name: "Рассказать о проекте", href: "#" },
      ],
    },
    {
      title: "Услуги",
      children: [
        { name: "Решение", href: "#" },
        { name: "Кейсы", href: "#" },
        { name: "Рассказать о проекте", href: "#" },
      ],
    },
    {
      title: "О Компании",
      children: [
        { name: "Решение", href: "#" },
        { name: "Кейсы", href: "#" },
        { name: "Рассказать о проекте", href: "#" },
        { name: "Рассказать о проекте", href: "#" },
      ],
    },
    {
      title: "Битрикс 24",
      children: [
        { name: "Решение", href: "#" },
        { name: "Кейсы", href: "#" },
        { name: "Рассказать о проекте", href: "#" },
        { name: "Рассказать о проекте", href: "#" },
        { name: "Рассказать о проекте", href: "#" },
        { name: "Рассказать о проекте", href: "#" },
      ],
    },
    {
      title: "BPMSOFT",
      children: [
        { name: "Решение", href: "#" },
        { name: "Кейсы", href: "#" },
      ],
    },
    {
      title: "Контакты",
      children: [
        { name: "Решение", href: "#" },
        { name: "Кейсы", href: "#" },
        { name: "Рассказать о проекте", href: "#" },
      ],
    },
  ];

  return (
    <footer className="px-10 py-24 bg-primary">
      <div className="w-full max-w-422 mx-auto flex flex-col gap-24 items-start">
        <ul className="w-full flex justify-between">
          {footerItems.map((item, i) => (
            <li key={i} className="flex flex-col gap-10">
              <h4 className="uppercase text-xl text-white">{item.title}</h4>
              <div className="flex flex-col gap-4 text-text-footer">
                {item.children.map((child, i) => (
                  <a href={child.href} key={i}>
                    {child.name}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <article className="flex flex-col gap-5 text-text-footer">
          <h3 className="text-xl text-text-footer">COMPANY NAME</h3>
          <p className="font-light">
            © 20XX–20XX company name Accredited IT-company
          </p>
          <span className="font-light">Made by inwebstudio</span>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
