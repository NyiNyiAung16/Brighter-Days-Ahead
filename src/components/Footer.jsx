import FacebookIcon from "./FacebookIcon";
import LinkedinIcon from "./LinkedinIcon";
import YoutubeIcon from "./YoutubeIcon";
import GithubIcon from "./GithubIcon";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-gray-50 bg-opacity-30 text-primary-content p-10">
      <aside>
        <Logo className="w-52 h-16"/>
        <p className="font-bold">
          Your daily dose of motivation and positivity.
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://www.facebook.com/nyinyiaung.nyinyiaung.75054689" target="_blank" className="hover:scale-105 duration-150">
            <FacebookIcon className="w-10"/>
          </Link>
          <Link to="https://www.linkedin.com/in/nyi-nyi-36500b264/" target="_blank" className="hover:scale-105 duration-150">
            <LinkedinIcon className="w-10"/>
          </Link>
          <Link to="https://www.youtube.com/@NyiNyi-qe6gs" target="_blank" className="hover:scale-105 duration-150">
            <YoutubeIcon className="w-10"/>
          </Link>
          <Link to="https://github.com/NyiNyiAung16" target="_blank" className="hover:scale-105 duration-150">
            <GithubIcon className="w-10"/>
          </Link>
        </div>
      </nav>
    </footer>
  );
}
