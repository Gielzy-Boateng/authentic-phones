import WidthConstraint from "@/components/WidthConstraint";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="relative">
      <div className="bg-black bg-opacity-70 absolute inset-0" />
      <div className="bg-[url(/hero.jpg)] bg-center bg-no-repeat bg-cover w-full h-screen" />{" "}
      <WidthConstraint className="absolute inset-0 flex flex-col items-start justify-center gap-y-3 text-white">
        <h3 className="text-lg border-x-2 px-2 border-yellow-500 font-medium">
          Mobile and Computer
        </h3>
        <h1 className="text-3xl font-bold tracking-wider">Repair Service</h1>
        <p className="">
          Whether it is a cracked screen, battery issue or water damage, our
          certified technicians can fix it all.
        </p>
        <p>
          With same day service, affordable pricing and a satisfaction
          guarantee, we bring your device back to life hassle-free.
        </p>

        <div className="space-x-4 ">
          <Button className="bg-yellow-600 hover:bg-white hover:text-yellow-600 ">
            Contact Us Now
          </Button>
          <Button className="bg-gray-600 px-4 hover:bg-white hover:text-gray-600">
            About Us
          </Button>
        </div>
        <div className="bg-white w-[70%] h-1 mt-10 " />
      </WidthConstraint>
    </div>
  );
}
