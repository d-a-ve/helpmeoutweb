import TLink from "@myTypes/TLink";

type FooterLinksProps = {
  links: TLink[];
};

const FooterLinks = ({ links }: FooterLinksProps) => {
  return (
    <div>
      <ul className="flex flex-col gap-4 items-start">
        {links.map((link, i) => (
          <li
            key={i}
            className={`text-white ${link.title ? "font-semibold" : ""}`}
          >
            {link.title ? (
              link.text
            ) : (
              <a href={link.url || "#"} className="footer-link">
                {link.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
