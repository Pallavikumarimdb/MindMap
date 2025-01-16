

import React from "react";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  return (
    <div>
      <div className="relative isolate bg-slate-400 px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Pricing
          </p>
        </div>
        <div className="mx-auto mt-16 grid gap-8 max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          <div className="rounded-xl  bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 ">
            <h3 id="tier-hobby" className="text-3xl text-gray-950">
              Monthly
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-gray-900">
                $5
              </span>
              <span className="text-base text-gray-500">/month</span>
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              The perfect plan if you're just getting started with our product.
            </p>
            <Link to={"/comingsoon"}>
            <a
              aria-describedby="tier-hobby"
              className="mt-8 block bg-gray-900 rounded-md px-3.5 py-2.5 text-center text-md font-bold text-slate-100 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
            >
              Get started today
            </a>
            </Link>
          </div>
          <div className="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
            <h3 id="tier-enterprise" className="text-3xl text-slate-100">
              Yearly
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-white">
                $50
              </span>
              <span className="text-base text-gray-400">/year</span>
            </p>
            <p className="mt-6 text-base/7 text-gray-300">
            Enjoy maximum savings and exclusive features with our Yearly plan.
            </p>    
            <Link to={"/comingsoon"}>
            <a
              aria-describedby="tier-enterprise"
              className="mt-8 block bg-gradient-to-r from-amber-500 to-pink-500 rounded-md px-3.5 py-2.5 text-center text-center text-md font-bold text-gray-950 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:mt-10"
            >
              Get started today
            </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
