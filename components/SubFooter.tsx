import Link from "next/link";
import Image from "next/image";

const SubFooter = () => {
  return (
    <>
      <div className="bg-gray-900 text-white text-center py-4 text-sm">
        Copyright © 2025 benfield attorneys and solicitors All Rights Reserved.
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="https://eaglecontractoragency.vercel.app/#">
          <Image
            src="/eagle.png"
            alt="Eagle Contractor Logo"
            width={35}
            height={35}
            className="object-contain hover:opacity-80 transition duration-300"
          />ECA
        </Link>
      </div>
    </>
  );
};

export default SubFooter;
