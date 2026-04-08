"use client";

import { useState } from "react";

type MenuItemType = {
  name: string;
  description: string;
  price: string;
};

export default function MenuSection({
  title,
  items,
}: {
  title: string;
  items: MenuItemType[];
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-6">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-black border border-white/10 hover:border-white/30 transition px-5 py-4 rounded-xl"
      >
        <h2 className="text-lg md:text-xl font-semibold tracking-wide">
          {title}
        </h2>

        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
          <span
            className={`transform transition ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            ⌄
          </span>
        </div>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-200 mt-4" : "max-h-0"
        }`}
      >
        <div className="space-y-4 px-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-start border-b border-white/10 pb-3 hover:border-white/30 transition"
            >
              <div>
                <h3 className="text-base md:text-lg font-medium">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {item.description}
                </p>
              </div>

              <span className="text-sm md:text-base font-medium">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
