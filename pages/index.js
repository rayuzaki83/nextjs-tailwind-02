import Head from "next/head";
import Image from "next/image";

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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="https://flowbite.com/">Feature</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>

            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </header>
      </div>

      <div className="p-10">
        <blockquote className="text-center text-2xl font-semibold italic text-slate-70 ml">
          When you look
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-purple-500 p-1 mx-2">
            <span className="relative text-white">annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>
      </div>
    </>
  );
}
