import ButtonSvg from "../assets/svg/ButtonSvg";
import ButtonGradient from "../assets/svg/ButtonGradient";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative infline-flex
  items-center justify-center h-11 transition-colors
  hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${
    className || ""
  }`;

  const spanClasses = "relative z-10";

  const renderButton = () => {
    return (
      <>
        <button className={classes} onClick={onClick}>
          <span className={spanClasses}>{children}</span>
          {ButtonSvg(white)}
        </button>
      </>
    );
  };

  const renderLink = () => {
    return (
      <a className={classes} onClick={onClick} href={href}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </a>
    );
  };

  return href ? renderLink() : renderButton();
};

export default Button;
