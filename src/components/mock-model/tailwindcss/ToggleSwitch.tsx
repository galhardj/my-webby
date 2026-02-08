"use client";

import { useState } from "react";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="bg-white from-slate-50 to-slate-100 px-16 py-12">
      <div className="flex w-max flex-col items-start justify-start gap-3 rounded-lg bg-gray-200 p-6">
        <div className="">
          <h2 className="h2">Toggle!</h2>
          <p>Checkout below toggle to se what will happen!</p>
        </div>
        <button
          onClick={() => setIsOn(!isOn)}
          className={`relative h-10 w-20 rounded-full transition-colors duration-300 ease-in-out focus:ring-4 focus:ring-offset-2 focus:outline-none ${
            isOn
              ? "bg-blue-600 focus:ring-blue-300"
              : "bg-slate-300 focus:ring-slate-200"
          }`}
          aria-label="Toggle switch"
          role="switch"
          aria-checked={isOn}
        >
          <span
            className={`absolute top-1 left-1 h-8 w-8 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
              isOn ? "translate-x-10" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
