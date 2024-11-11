import Image from "next/image";
import { footerMedia } from "@/lib/constants";
import WidthConstraint from "@/components/WidthConstraint";
import Link from "next/link";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-yellow-500 mt-20">
      <WidthConstraint className="flex flex-col gap-y-5">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-center md:justify-between">
          <h1 className="text-white font-semibold text-xl">Authentic Phones</h1>
          <div className="flex items-center gap-x-3">
            {footerMedia.map((media, i) => (
              <div key={i}>
                <Image src={media.src} width={15} height={15} alt={media.src} />
              </div>
            ))}
          </div>
        </div>

        <hr className="w-full text-white" />

        <div className="text-white flex items-center justify-between text-[14px]">
          <p>Copyright &copy;{date}</p>
          <div>
            Designed by{" "}
            <Link href="https://www.bithubinc.com/" className="font-bold">
              Bithub Inc,USA
            </Link>
          </div>
        </div>
      </WidthConstraint>
    </footer>
  );
}
