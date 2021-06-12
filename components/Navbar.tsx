import Link from "next/link";
import { Wrapper } from "./";

function Navbar() {
  return (
    <header className="bg-green-800 text-white">
      <Wrapper>
        <div className="py-4">
          <Link href="/">
            <a>
              <h1 className="text-xl">Township</h1>
            </a>
          </Link>
        </div>
      </Wrapper>
    </header>
  );
}

export default Navbar;
