import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import YoutubeIcon from "./YoutubeIcon";
import GithubIcon from "./GithubIcon";
import Logo from "./Logo";

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
          <a>
            <FacebookIcon className="w-10"/>
          </a>
          <a>
            <InstagramIcon className="w-10"/>
          </a>
          <a>
            <YoutubeIcon className="w-10"/>
          </a>
          <a>
            <GithubIcon className="w-10"/>
          </a>
        </div>
      </nav>
    </footer>
  );
}
