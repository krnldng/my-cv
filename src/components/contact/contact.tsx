import homeIcon from "../../assets/home.png";
import phoneIcon from "../../assets/phone.png";
import emailIcon from "../../assets/email.png";
import linkedinIcon from "../../assets/linkedin.png";

export const Contact = () => {
  return (
    <div className="flex flex-col gap-2 text-left">
      <div className="flex gap-4">
        <img src={homeIcon} alt="Home icon" className="size-6" />
        <div>615/19 Ton Dan, An Khe, Da Nang</div>
      </div>
      <div className="flex gap-4">
        <img src={phoneIcon} alt="Phone icon" className="size-6"></img>
        <div>+84 963 240 344</div>
      </div>
      <div className="flex gap-4">
        <img src={emailIcon} alt="Email icon" className="size-6"></img>
        <div>kerneldang@gmail.com</div>
      </div>
      <div className="flex gap-4">
        <img src={linkedinIcon} alt="Phone icon" className="size-6"></img>
        <a href="https://www.linkedin.com/in/kernel-dang" target="_blank">
          linkedin.com/in/kernel-dang
        </a>
      </div>
    </div>
  );
};
