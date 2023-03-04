import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://media.licdn.com/dms/image/D5635AQEDCYkEf8YR2w/profile-framedphoto-shrink_200_200/0/1671587024769?e=1678420800&v=beta&t=kXZFCh-yKFLM3So4rrkH4ayBCrNAsjsfpZps5BbjMBg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Curry Coder</h1>
      </div>
      <div>
        <Link
          href="http://mustafa-portfolio-24msaf-gmailcom.vercel.app/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#a6855b] flex items-center rounded-full text-center"
        >
          Check Out My Personal Portfolio!
        </Link>
      </div>
    </header>
  );
}

export default Header;
