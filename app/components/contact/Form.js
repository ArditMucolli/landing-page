import { RadioGroup, Radio } from "@heroui/react";

export default function Form() {
  return (
    <div className="ml-4 max-w-[900px] mx-auto">
      <form className="space-y-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <div>
              <label htmlFor="name" className="text-[14px] text-[#484848]">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                className="mt-2 px-4 py-2 w-[314px] h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="employees" className="text-[14px] text-[#484848]">
                Number of Employees
              </label>
              <input
                type="number"
                placeholder="Number of Employees"
                id="employees"
                name="employees"
                className="mt-2 px-4 py-2 w-[314px] h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="text-[14px] text-[#484848]">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="mt-2 px-4 py-2 w-[314px] h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <RadioGroup
                label="Demo Language"
                className="text-[14px] text-[#484848]"
                color="danger"
              >
                <Radio
                  value="buenos-aires"
                  className="mt-3 text-[14px]"
                  required
                >
                  <span className="ml-1">EN</span>
                </Radio>
                <Radio value="sydney" className="mt-3 text-[14px]" required>
                  <span className="ml-1">DE</span>
                </Radio>
              </RadioGroup>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <label htmlFor="company" className="text-[14px] text-[#484848]">
                Company
              </label>
              <input
                type="text"
                placeholder="Company Name"
                id="company"
                name="company"
                className="mt-2 px-4 py-2 w-[314px] h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-[14px] text-[#484848]">
                Email
              </label>
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                name="email"
                className="mt-2 px-4 py-2 w-[314px] h-[46px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="text-[14px] text-[#484848]"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="4"
                className="mt-2 px-4 py-2 w-[314px] h-[200px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="w-[314px] h-[50px]  text-white bg-gradient-to-b from-[#6C1EB0] via-[#ae7bdb] to-[#a866e2] rounded-full self-end"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
