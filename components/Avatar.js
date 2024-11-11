import Image from "next/image";

export default function Avatar() {
  return (
    <div className="border-b-8 border-blue-400 border-double sm:border-none">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20">
        <div>
          <Image
            src="/fred.jpg"
            alt="Authentic"
            width={200}
            height={100}
            className="rounded-2xl"
          />
        </div>
        <div>
          <h1 className="text-xl ">
            <strong>Name:</strong>{" "}
            <span className="text-stone-700">Frederick Boateng</span>
          </h1>
          <h2 className="text-xl">
            <strong>Occupation:</strong>{" "}
            <span className="text-stone-700">
              Senior Phone Repair Technician
            </span>
          </h2>
          <h3 className="text-xl">
            <strong>Experience:</strong>
            <span className="text-stone-700"> 6+ years</span>
          </h3>
          <h4 className="text-xl">
            <strong>Location:</strong>{" "}
            <span className="text-stone-700">
              Authentic Phones, Circle-Accra
            </span>
          </h4>
        </div>
        <div></div>
      </div>
    </div>
  );
}
