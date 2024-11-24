import { certifications } from "@/data/certifications";
import { icons } from "@/app/assets/icons";

const Certifications = () => {
  return (
    <>
      <div className="flex items-center space-x-2 mt-2 mb-4">
        {icons.certify}
        <p className="about-extra">Certifications</p>
      </div>
      <ul className="space-y-1">
        {certifications.map(({ title, link }, index) => (
          <li className="gap-2 flex-align" key={index}>
            {/* <span className="h-4 fill-green-500">{icons.tick}</span> */}
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="opacity-80 hover:opacity-100 hover:underline underline-offset-4"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Certifications;
