import { Arvo } from "next/font/google";
import Link from "next/link";

const arvo = Arvo({
  weight: "400",
  subsets: ["latin"],
});

const NotFound = () => {
  return (
    <div
      className={`${arvo.className} text-center flex flex-col items-center font-arvo p-6 md:mb-14 space-y-8`}
    >
      <h1 className="text-6xl sm:text-8xl p-6">404</h1>
      <div>
        <h3 className="text-2xl sm:text-4xl">Look like you&apos;re lost</h3>

        <p className="opacity-80 text-sm pt-1">
          the page you are looking for not avaible!
        </p>
      </div>

      <Link
        href="/"
        className="px-4 py-1 transition-colors duration-500 rounded-lg hover:text-white hover:bg-black/80 dark:hover:bg-white/80 dark:hover:text-black"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;