import { companyLogos } from "../constants";

const CompanyLogosComp = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex ">
        {companyLogos.map((logo, index) => (
          <li
            className="flex flex-1 items-center justify-center h-[8.5rem]] mx-4"
            key={index}
          >
            <img src={logo} width={100} height={100} alt="logo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogosComp;
