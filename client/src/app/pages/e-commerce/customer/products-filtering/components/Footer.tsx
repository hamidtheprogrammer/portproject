import { footerItems } from "..";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 flex flex-wrap justify-between gap-8">
        {footerItems.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
