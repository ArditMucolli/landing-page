import Image from "next/image";

export default function FooterInfos() {
  return (
    <div className="w-full min-h-[372px] flex justify-center items-center">
      <div className="w-full text-center flex flex-col lg:flex-row justify-between ">
        <div className="flex-1 text-left">
          <h1 className="text-[16px] text-[#1D1D1F] font-medium mb-4">
            Useful Links
          </h1>
          <div className="text-[14px] text-[#6E6E73] flex flex-col gap-5">
            <p>About Us</p>
            <p>Modules</p>
            <p>News</p>
            <p>Contacts</p>
          </div>
        </div>
        <div className="flex-1 text-left">
          <h1 className="text-[16px] text-[#1D1D1F] font-medium mb-4">Legal</h1>
          <div className="text-[14px] text-[#6E6E73] flex flex-col gap-5">
            <p>Imprint</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3 mt-10 text-left">
          <Image
            src="/assets/footer/app-store.svg"
            alt="App Store"
            width={100}
            height={28.05}
          />
          <Image
            src="/assets/footer/play-store.svg"
            alt="Play Store"
            width={100}
            height={28.05}
          />
        </div>
        <div className="flex-1 text-left">
          <h1 className="text-[16px] text-[#1D1D1F] font-medium mb-4">
            Subscribe
          </h1>
          <label
            htmlFor="email"
            className="text-[14px] text-[#6E6E73] font-medium"
          >
            Join our community to receive updates
          </label>
          <div className="mt-3 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
              className="px-4 py-2 w-[240px] h-[38px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="w-[106px] h-[38px] text-[14px] text-white bg-gradient-to-b from-[#6C1EB0] via-[#ae7bdb] to-[#a866e2] rounded-full"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-3 text-[14px] text-[#6E6E73] font-medium">
            By subscribing, you agree to our Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
