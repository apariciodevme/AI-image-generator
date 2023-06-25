import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-5 bg-white shadow-md">
      {/*Left*/}
      <div className="flex items-center space-x-4">
        <Image
          src={"https://links.papareact.com/4t3"}
          width={30}
          height={30}
          alt="logo"
        />
        <div>
          <h1 className="font-semibold">
            <span className="text-violet-500">DALL-E</span> Image Generator
          </h1>
          <h2 className="text-xs md:text-base">
            Powered by DALL-E 2, Chat GPT and Microsoft Azure.
          </h2>
        </div>
      </div>

      {/*Right*/}
      <div className="flex items-center gap-2 divide-x">
        <Link className="px-2 text-xs md:text-base" href={"/"}>
          Github
        </Link>
        <Link className="px-2 text-xs md:text-base" href={"/"}>
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
