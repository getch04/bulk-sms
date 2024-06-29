import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={46} />
          </a>
          <p className="leading-7 mt-6 text-base font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for any occasion with our collection of shoes.Find
            your perfect size in the store.
          </p>
          <div className="flex items-center mt-8 gap-5">
            {socialMedia.map((item, index) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section, index) => (
            <div key={section}>
              <h4 className="text-white font-montserrat font-bold text-lg">
                {section.title}
              </h4>
              <div className="flex flex-col gap-2 mt-5">
                {section.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="text-white-400 font-montserrat text-base"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm: items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
