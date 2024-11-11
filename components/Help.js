import Image from "next/image";
import { help } from "@/lib/constants";
import WidthConstraint from "@/components/WidthConstraint";

export default function Help() {
  return (
    <WidthConstraint className=" mt-20">
      <h1 className="capitalize text-center text-2xl font-semibold mb-10">
        Here&apos;s how we can help you
      </h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {help.map((help, i) => (
          <div
            key={i}
            className="bg-white flex flex-col items-start justify-center gap-y-3 rounded-xl shadow-2xl p-4"
          >
            <div className="bg-yellow-600 inline-block rounded-xl p-2">
              <Image src={help.src} width={30} alt={help.title} height={30} />
            </div>
            <h1 className="text-stone-900 font-semibold">{help.title}</h1>
            <p className="text-stone-700 text-[14px]">{help.text}</p>
          </div>
        ))}
      </div>
    </WidthConstraint>
  );
}
