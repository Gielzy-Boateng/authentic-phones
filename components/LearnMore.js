import Image from "next/image";

import { WidthConstraint } from ".";
import Button from "./Button";

export default function LearnMore() {
  return (
    <WidthConstraint className="mt-20 flex items-center gap-y-10 flex-col-reverse lg:flex-row justify-center lg:justify-between">
      <div>
        <Image
          src="/lady.jpg"
          width={350}
          height={350}
          alt="lady"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-y-5 items-center lg:max-w-[700px]">
        <h1 className="capitalize tracking-wide text-center text-xl font-semibold">
          Successfully Providing the best phones and computer services for over
          6 years.
        </h1>
        <p className="text-center">
          We&apos;re dedicated to bringing your devices back to life. Discover
          our story, expertise, and commitment to quality on our About Us page,
          and see how we&apos;re here to make your phone repair experience
          smooth and reliable.
        </p>
        <Button className="text-stone px-6 rounded-xl bg-yellow-400">
          Learn More
        </Button>
      </div>
    </WidthConstraint>
  );
}
