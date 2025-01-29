import FooterInfos from "./FooterInfos";
import Hr from "../Hr";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <div className="w-full flex justify-center items-start pt-8">
      <div className="w-full max-w-[1126px]">
        <Hr />
        <FooterInfos />
        <Hr />
        <FooterSocials />
      </div>
    </div>
  );
}
