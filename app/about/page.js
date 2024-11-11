import WidthConstraint from "@/components/WidthConstraint";

import React from "react";
import AreasOfExpertise from "@/components/Areas";
import Avatar from "@/components/Avatar";
import Milestones from "@/components/Milestones";

export default function About() {
  return (
    <div className="mt-28">
      <WidthConstraint className="space-y-10">
        <Avatar />

        <div className="space-y-3">
          <h1 className="text-2xl text-center text-blue-700 font-semibold">
            Background & Skills
          </h1>
          <p className="text-stone-700">
            Frederick is a seasoned phone repair specialist known for
            exceptional skill in diagnosing and repairing a wide variety of
            mobile device issues. With over six years in the industry, Frederick
            has built a reputation for precision and throughness, handling
            everything from common screen replacements to complex motherboard
            repairs. Frederick&apos;s expertise spans across major brands
            including Apple, Google, Samsung, Huawei etc and encompasses various
            types of devices such as smartphones, tablets and even smartwatches
          </p>
        </div>
        <hr />
        <AreasOfExpertise />
        <hr />
        <Milestones />
        <hr />

        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-center text-blue-700">
            Certificates and Training
          </h1>
          <ul className="list-disc space-y-2 text-stone-700 ">
            <li>Certified iPhone Repair Specialist (CIRS)</li>
            <li>Samsung Authorized Service Provider certification</li>
            <li>
              Micro-Soldering Mastery Course – Completed advanced
              micro-soldering training for intricate logic board repairs
            </li>
          </ul>
        </div>
        <hr />

        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-center text-blue-700">
            Customer Approach
          </h1>
          <p className="text-stone-700">
            Frederick is known for his honesty and transparency with clients,
            often explaining the nature of the problem and the repair process in
            detail, providing customers with the knowledge they need to make
            informed decisions. He goes above and beyond to ensure customers
            understand their options, from quick fixes to replacement parts,
            depending on their budget and the urgency of the repair.
          </p>
        </div>
        <hr />

        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-center text-blue-700">
            Future goals
          </h1>
          <p className="text-stone-700">
            Frederick is currently interested in expanding his skills to cover
            more niche repairs for lesser-known brands and experimenting with
            sustainable practices in device repairs. He is also exploring
            launching a series of online tutorials for DIY enthusiasts and
            aspiring phone repair technicians.
          </p>
          <p className="text-stone-700">
            This description highlights the depth of expertise, customer service
            focus, and dedication to growth that define Frederick&apos;s career
            as a top-tier phone repair technician.
          </p>
        </div>
        <hr />
      </WidthConstraint>
    </div>
  );
}
