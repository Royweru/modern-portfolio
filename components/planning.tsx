import { pricingPlans } from "@/data";
export const Planning = () => {
  return (
    <section className="relative py-4 bg-transparent w-full md:px-6" id="pricing">
      <h1 className="text-cyan-400 font-semibold heading my-4">Pricing</h1>
      <div className="w-full mx-auto space-y-3 px-4 sm:text-center sm:px-0 mt-4">
        <p className="text-white font-semibold  text-sm text-center">
          Pay as you grow, this prices include a monthly fee charged for
          maintanance and upkeep
        </p>

        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
        <div className="relative w-full mx-auto text-gray-300 sm:px-4 md:px-8"></div>
        <div className="mt-16 justify-center sm:flex">
          {pricingPlans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col mt-6 border-2 sm:mt-0 sm:rounded-xl sm:max-w-md ${
                item.isMostPop
                  ? "bg-gray-900 border-cyan-400 border-x-0 sm:border-x-2"
                  : "border-transparent"
              }`}
            >
              <div className="p-4 py-8 space-y-4 border-b border-gray-700 md:p-8">
                <span className="text-gray-200 font-medium">{item.name}</span>
                <div className=" text-center font-semibold txt-lg text-white-200">
                  ${item.usd}
                </div>
                <div className="text-cyan-400 text-3xl font-semibold">
                  Kes {item.price}
                </div>
                <p className="text-gray-400">
                  {item.desc}
                  <span className=" ml-2  text-zinc-100 italic font-extralight text-sm">
                    a monthly maintanance fee of {item.maintanance}{" "}
                  </span>
                </p>
                <a href="emailto:weruroy347@gmail.com">
                  <button
                    className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 
                text-white bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700"
                  >
                    Reach out
                  </button>
                </a>
              </div>
              <ul className="p-4 py-8 space-y-3 md:p-8">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        item.isMostPop ? "text-cyan-600" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
