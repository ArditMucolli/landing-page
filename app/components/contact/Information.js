import { Address } from "./Address";
import SocialLinks from "../about/SocialLinks";

export default function Information() {
  return (
    <div className="w-[370px] h-[486px] bg-gradient-to-b from-[#6C1EB0] via-[#ae7bdb] to-[#ae7bdb] p-10 rounded-lg">
      <h1 className="text-[24px] text-[#FFFFFF] mb-2">Contact infromation</h1>
      <p className="text-[14px] text-[#FFFFFF]">
        Fill up the form and our Team will get back to you within 24 hours.
      </p>
      <Address />
      <SocialLinks />
    </div>
  );
}
