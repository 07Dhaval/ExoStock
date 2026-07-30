import { useState } from "react";

import {
  CheckCircle,
  TrendingUp,
  Building2,
  Shield,
  MessageCircle,
  Gift,
} from "lucide-react";

const plans = [
  {
    name: "Trial",
    color: "#0d5b96",
    featured: false,
    price: "Free 7 Days",
    duration: "",
    products: "50 Products",
    staff: "1 Staff",
    franchise: "0 Franchise",
    features: ["Dashboard Access", "Product Management", "Stock Tracking"],
    description: "Try ExoStock free for 7 days.",
    icon: Gift,
    button: "Start Free Trial",
  },
  {
    name: "Basic",
    color: "#0d5b96",
    featured: false,
    monthlyPrice: {
      INR: "₹799",
      USD: "$9",
    },

    yearlyPrice: {
      INR: "₹7,990",
      USD: "$79",
    },
    products: "200 Products",
    staff: "1 Staff",
    franchise: "0 Franchise",
    features: [
      "Inventory Management",
      "Sales & Purchase",
      "GST Billing",
      "Reports",
    ],
    description: "Perfect for small businesses.",
    icon: TrendingUp,
    button: "Choose Plan",
  },

  {
    name: "Standard",
    color: "#0d5b96",
    featured: true,
    monthlyPrice: {
      INR: "₹1,999",
      USD: "$9",
    },

    yearlyPrice: {
      INR: "₹7,990",
      USD: "$79",
    },
    products: "500 Products",
    staff: "3 Staff",
    franchise: "1 Franchise",
    features: [
      "Everything in Basic",
      "Barcode Support",
      "Low Stock Alerts",
      "Role Management",
    ],
    description: "Great for growing businesses.",
    icon: Building2,
    button: "Most Popular",
  },

  {
    name: "Business",
    color: "#0d5b96",
    featured: false,
    monthlyPrice: {
      INR: "₹2,999",
      USD: "$39",
    },
    yearlyPrice: {
      INR: "₹29,990",
      USD: "$390",
    },
    products: "1000 Products",
    staff: "5 Staff",
    franchise: "5 Franchise",
    features: [
      "Multi Warehouse",
      "Analytics Dashboard",
      "Inventory Forecast",
      "Priority Support",
    ],
    description: "For expanding businesses.",
    icon: Building2,
    button: "Choose Plan",
  },

  {
    name: "Enterprise",
    color: "#0d5b96",
    featured: false,
    monthlyPrice: {
      INR: "₹6,999",
      USD: "$99",
    },
    yearlyPrice: {
      INR: "₹69,990",
      USD: "$990",
    },
    products: "Unlimited Products",
    staff: "10+ Staff",
    franchise: "10 Franchise",
    features: [
      "Unlimited Inventory",
      "API Access",
      "Dedicated Support",
      "Custom Reports",
    ],
    description: "Complete enterprise solution.",
    icon: Shield,
    button: "Contact Sales",
  },

  {
    name: "Custom",
    color: "#0d5b96",
    featured: false,
    monthlyPrice: {
      INR: "Custom",
      USD: "Custom",
    },

    yearlyPrice: {
      INR: "Custom",
      USD: "Custom",
    },
    products: "Unlimited Products",
    staff: "Unlimited Staff",
    franchise: "Unlimited Franchise",
    features: [
      "White Label",
      "Cloud Deployment",
      "Custom Modules",
      "Dedicated Team",
    ],
    description: "Tailored to your requirements.",
    icon: MessageCircle,
    button: "Let's Talk",
  },
];

export default function PricingPlans() {
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("INR");
  return (
    <section className="bg-[#f7f8fc] py-16 lg:py-20">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#e9f3ff] px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#0d5b96]">
            EXOSTOCK PLANS
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-[#0d5b96] sm:text-4xl lg:text-5xl">
            Choose the Perfect Plan
            <br />
            For Your Business
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#0d5b96] sm:text-lg">
            Affordable inventory management plans for retailers, wholesalers,
            distributors and enterprise businesses.
          </p>
        </div>
        <div className="mb-12 flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:gap-8">
          {/* Billing Switch */}
          <div className="flex items-center rounded-full border border-[#0d5b96] bg-white p-2 shadow-lg">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                billing === "monthly"
                  ? "bg-[#0d5b96] text-white"
                  : "text-[#0d5b96]"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`relative rounded-full px-6 py-2 text-sm font-semibold transition ${
                billing === "yearly"
                  ? "bg-[#0d5b96] text-white"
                  : "text-[#0d5b96]"
              }`}
            >
              Yearly
              <span className="absolute -top-3 -right-2 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-bold text-white">
                2 Months FREE
              </span>
            </button>
          </div>

          {/* Currency Switch */}
          {/* <div className="flex items-center rounded-full border border-[#0d5b96] bg-white p-2 shadow-lg">
            <button
              onClick={() => setCurrency("INR")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                currency === "INR"
                  ? "bg-[#0d5b96] text-white"
                  : "text-[#0d5b96]"
              }`}
            >
              ₹ INR
            </button>

            <button
              onClick={() => setCurrency("USD")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                currency === "USD"
                  ? "bg-[#0d5b96] text-white"
                  : "text-[#0d5b96]"
              }`}
            >
              $ USD
            </button>
          </div> */}
        </div>

        {/* Responsive Grid */}

        <div className="flex items-start snap-x snap-mandatory gap-5 overflow-x-auto pb-6 lg:grid lg:grid-cols-3 lg:items-start xl:grid-cols-6 lg:overflow-visible">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <div
                key={index}
                className={`mt-7.5 snap-center min-w-72.5 lg:min-w-0 overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:shadow-2xl ${
                  plan.featured
                    ? "border-2 border-[#0d5b96] shadow-2xl lg:-translate-y-8 lg:hover:-translate-y-10 z-10"
                    : "border-[#0d5b96] hover:-translate-y-2"
                }`}
              >
                {/* Top Header */}

                <div className="mt-[-25px] h-[88px]">
                  {plan.featured ? (
                    <>
                      {/* Most Popular Strip */}
                      <div className="mt-[25px] flex h-[44px] items-center justify-center bg-[#0d5b96]">
                        <span className="text-sm font-bold uppercase tracking-wider text-white">
                          MOST POPULAR
                        </span>
                      </div>

                      {/* Plan Name */}
                      <div className="mt-[10px] flex h-[44px] items-center justify-center bg-white ">
                        <div className="flex flex-col items-center">
                          <h3 className="text-[30px] font-black leading-none text-[#0d5b96]">
                            {plan.name}
                          </h3>

                          <div className="mt-2 h-1 w-16 rounded-full bg-[#0d5b96]"></div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Empty strip keeps same height */}
                      <div className="h-[44px] bg-transparent"></div>

                      {/* Plan Name */}
                      <div className="flex h-[44px] items-center justify-center bg-white">
                        <div className="flex flex-col items-center">
                          <h3 className="text-[30px] font-black leading-none text-[#0d5b96]">
                            {plan.name}
                          </h3>

                          <div className="mt-2 h-1 w-16 rounded-full bg-[#0d5b96]"></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Card Body */}

                <div className="flex h-full min-h-[560px] flex-col p-5">
                  {/* Price */}

                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-[#0d5b96] lg:text-2xl">
                      {plan.name === "Trial"
                        ? plan.price
                        : billing === "monthly"
                          ? plan.monthlyPrice[currency]
                          : plan.yearlyPrice[currency]}
                    </h2>

                    {plan.duration && (
                      <p className="mt-2 text-base text-gray-500">
                        {plan.name === "Trial"
                          ? plan.duration
                          : billing === "monthly"
                            ? "/month"
                            : "/year"}
                      </p>
                    )}
                  </div>

                  {/* Button */}

                  <button
                    className={`mt-6 w-full rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
                      plan.featured
                        ? "bg-[#0d5b96] text-white hover:bg-[#084b7d]"
                        : "border-2 border-[#0d5b96] text-[#0d5b96] hover:bg-[#0d5b96] hover:text-white"
                    }`}
                  >
                    {plan.button}
                  </button>

                  {/* Plan Stats */}

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 border-b border-dashed border-gray-200 pb-2">
                      <CheckCircle
                        size={20}
                        className="text-green-600 flex-shrink-0"
                      />
                      <span className="text-[#0d5b96] font-medium">
                        {plan.products}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 border-b border-dashed border-gray-200 pb-2">
                      <CheckCircle
                        size={20}
                        className="text-green-600 flex-shrink-0"
                      />
                      <span className="text-[#0d5b96] font-medium">
                        {plan.staff}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle
                        size={20}
                        className="text-green-600 flex-shrink-0"
                      />
                      <span className="text-[#0d5b96] font-medium">
                        {plan.franchise}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}

                  <div className="my-5 border-t border-dashed border-gray-300"></div>

                  {/* Features */}

                  <div className="flex-1 min-h-[150px]">
                    <h4 className="mb-5 text-lg font-bold text-[#0d5b96]">
                      Included Features
                    </h4>

                    <ul className="space-y-2.5">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle
                            size={18}
                            className="mt-1 flex-shrink-0 text-green-600"
                          />

                          <span className="text-[13px] leading-5 text-[#0d5b96]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Info */}

                  <div className="mt-auto rounded-xl bg-[#f8fafc] p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9f3ff]">
                        <Icon size={20} className="text-[#0d5b96]" />
                      </div>

                      <p className="text-sm leading-6 text-[#0d5b96]">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
