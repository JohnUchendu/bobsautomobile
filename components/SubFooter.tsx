import Link from "next/link";
import Image from "next/image";

const SubFooter = () => {
  return (
    <>
      <Link
        href="https://eaglecontractoragency.vercel.app/"
        className="mt-3 flex justify-center"
      >
        <Image
          src="/eagle.png"
          alt="Eagle Contractor Logo"
          width={15}
          height={15}
          className="object-contain hover:opacity-80 transition duration-300"
        />
        <p className="text-xs">Eaglee</p>
      </Link>
    </>
  );
};

export default SubFooter;
