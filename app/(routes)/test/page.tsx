import Link from "next/link";

const linkStyles =
  "px-4 py-1 rounded-lg text-white bg-black/80 dark:bg-white/80 dark:text-black";

const TestPage = () => {
  const linkPaths = [
    { path: "/test/flip", label: "Flip" },
    { path: "/test/scale", label: "Scale" },
    { path: "/test/image-card", label: "ImageCard" },
    { path: "/test/moving-card", label: "MovingCard" },
  ];

  return (
    <div className="flex justify-center items-center space-x-4">
      {linkPaths.map(({ path, label }, index) => (
        <Link key={index} href={path} target="_blank" className={linkStyles}>
          {label}
        </Link>
      ))}
    </div>
  );
};

export default TestPage;
