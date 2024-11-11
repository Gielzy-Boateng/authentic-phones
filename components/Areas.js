import { Areas } from "@/lib/constants";

export default function AreasOfExpertise() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold text-center text-blue-700">
        Areas of Expertise
      </h1>
      <ul className="space-y-3">
        {Areas.map((area, i) => (
          <li key={i}>
            <p className="text-lg font-semibold">
              {area.title}:{" "}
              <span className="text-[16px] font-normal text-stone-700">
                {area.text}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
