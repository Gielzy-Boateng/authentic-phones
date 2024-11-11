// import Image from "next/image";
import Link from "next/link";
import WidthConstraint from "@/components/WidthConstraint";
export default function NavBar() {
  return (
    <nav className="z-50 bg-white shadow-xl fixed top-0 left-0 right-0">
      <WidthConstraint className=" flex items-center justify-between">
        <div>
          {/* <Image
            src="/image.png"
            alt="Authentic"
            width={70}
            height={70}
            className="rounded-2xl"
          /> */}
          <h1 className="text-xl font-semibold">
            <Link href={"/"}>Authentic Phones</Link>
          </h1>
        </div>

        <ul className="flex gap-5">
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          {/* <Link href={"/contact"}>Contact Us</Link> */}
        </ul>
      </WidthConstraint>
    </nav>
  );
}
