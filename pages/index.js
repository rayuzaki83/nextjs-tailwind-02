import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <div>
        <h1 className="text-3xl font-bold underline text-sky-700">
          Hello World!
        </h1>
      </div> */}
      <div className="p-2">
        <header className="flex justify-between align-middle">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Tour_de_France_logo.svg/193px-Tour_de_France_logo.svg.png?20110125070730"
              className="h-20 mx-auto"
            />
          </a>

          <ul className="hidden sm:flex flex-row gap-7 font-normal items-center align-middle">
            <li className="bg-purple-500 p-3 rounded-lg text-white">
              <Link href="/">
                <a className="hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:underline">About</a>
              </Link>
            </li>
            <li>
              <Link href="/feature">
                <a className="hover:underline">Feature</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="hover:underline">Blog</a>
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <a className="hover:underline">Contact</a>
              </Link>
            </li>
          </ul>
        </header>
      </div>

      <div className="p-10">
        <blockquote className="text-center text-2xl font-semibold italic text-slate-70 ml">
          You look so
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-purple-500 p-1 mx-2">
            <span className="relative text-white">beautiful</span>
          </span>
          when you smile.
        </blockquote>
      </div>
      <div className="flex align-middle justify-center">
        <button className="bg-purple-500 text-center text-white font-bold p-3 w-40 rounded-3xl shadow-lg shadow-purple-500/50 hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-500/50 ">
          Click me!
        </button>
      </div>
    </>
  );
}
