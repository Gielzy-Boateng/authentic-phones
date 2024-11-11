import { mileStones } from "@/lib/constants";
import React from "react";

export default function Milestones() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold text-center text-blue-700">
        Professional Milestones
      </h1>
      {mileStones.map((milestone, i) => (
        <ul key={i}>
          <li>
            <p className="text-lg font-semibold">
              {milestone.title}
              <span className="text-[16px] font-normal text-stone-700">
                {milestone.text}
              </span>
            </p>
          </li>
        </ul>
      ))}
    </div>
  );
}
