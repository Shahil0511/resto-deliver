import Link from "next/link";
import Image from "next/image";

const RestaurantHeader = () => {
  return (
    <header className="bg-orange-400 p-4 sm:p-1 transition-colors duration-300 hover:bg-orange-500">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="hidden md:block w-full sm:w-1/4 sm:mb-0">
          <Image
            src="/images/logo.jpg"
            alt="navlogo"
            width={75}
            height={75}
            className="rounded-full"
          />
        </div>

        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
            <li>
              <Link
                className="text-white font-bold text-lg hover:border-b-2 hover:border-white"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-bold text-lg hover:border-b-2 hover:border-white"
                href="/"
              >
                Login/SignUp
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-bold text-lg hover:border-b-2 hover:border-white"
                href="/"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default RestaurantHeader;
