import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-5 my-5">
      <div className="flex">
        <div className="w-1/2 pb-4 flex justify-center">
          <Image
            src="/user.png"
            alt="Nithin"
            width={1080}
            height={1080}
            // placeholder="blur"
            className="w-3/4 ml-auto h-auto"
            priority
          />
          {/* <Image
            src="/user.svg"
            alt="Nithin"
            width={1080}
            height={1080}
            // placeholder="blur"
            className="w-8/12 ml-auto h-auto"
            priority
          /> */}
        </div>
        
        <div className="w-1/2 px-5 flex items-center">
          <div>
            <p className="pl-1 text-2xl">Hi there, i&apos;m</p>
            <h1 className="text-8xl leading-none">NITHIN</h1>
            <p className="pl-1">
              Developer, Freelancer
              <br /> &amp; Tech Enthusiast
            </p>
            
            <Link href="/contact">
            <button className="ml-1 mt-5 px-4 py-2 custom-button bg-[#f05f45] text-white font-bold text-md rounded-md">
                Let&apos;s Talk!
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
