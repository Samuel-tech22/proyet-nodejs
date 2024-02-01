import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="bg-slate-400 mb-4 flex justify-around items-center px-20 p-5 font-bold text-black">
      <Link href="/">
        Home
      </Link>
      <ul>
        <li>
          <Link href="/about">
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};
