export default function Form() {
  return (
    <div className="p-10 max-w-[600px] mx-auto">
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className=" text-[14px] font-medium">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="employees" className=" text-[14px] font-medium">
            Number of Employees
          </label>
          <input
            type="number"
            placeholder="Number of Employees"
            id="employees"
            name="employees"
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="date" className=" text-[14px] font-medium">
            Date
          </label>
          <input
            type="date"
            id="date"
            placeholder="sss"
            name="date"
            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[314px] h-[50px] mt-6 text-white bg-gradient-to-b from-[#6C1EB0] via-[#ae7bdb] to-[#a866e2] rounded-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
