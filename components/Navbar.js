import Link from "next/link";
import { navLinks } from "../src/data";

function Navbar() {
  return (
    <div class="flex flex-row w-5/12 h-12 items-center justify-between sticky top-0 z-50 space-x-4 bg-transparent backdrop-blur-md text-blue-900">
      <div class="flex flex-row rounded-sm cursor-pointer p-1 hover:text-yellow-300 hover:bg-blue-900 space-x-1">
        <Link href="/">
          {/* logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
      </div>

      <div class="w-4/12 flex items-center justify-center">
        {navLinks.map((nl) => {
          return (
            <Link href={nl.path}>
              <p class="px-4 py-3 cursor-pointer hover:text-yellow-300 hover:bg-blue-900 backdrop-invert">
                {nl.name}
              </p>
            </Link>
          );
        })}
      </div>

      <div class="rounded-sm cursor-pointer p-1 hover:text-yellow-300 hover:bg-blue-900">
        {/* burger button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
