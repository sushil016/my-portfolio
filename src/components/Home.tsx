import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

interface HomeProps {
  bgVariant: string;
  setBgVariant: React.Dispatch<React.SetStateAction<string>>;
  cursorText: string;
  setCursorText: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({ setBgVariant, setCursorText }) => {
  function textEnter() {
    setBgVariant("nameCursor");
    setCursorText("");
  }

  function textOut() {
    setBgVariant("default");
    setCursorText("");
  }

  return (
    <>
      <div className="bg-[#1E1E2E] h-screen w-full flex">
        <div className="w-1/2 h-screen flex justify-center items-center flex-col">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textOut}
            className="text-[#B2DBF2] text-center text-[80px] font-bold pointer-events "
          >
            Sushil Here!
          </div>
          <div className="text-[#CAA6F7] text-center text-[30px] font-bold ml-[40px] mt-6 ">
            Full Stack Devloper | Open source
          </div>
          <div className="text-[#CAA6F7] text-center text-[30px] font-bold ml-[60px] w-[600px]  p-8">
            Feel free to tweak it to match your style!
          </div>
          <div className="flex  bg-slate-900 p-4 rounded-full gap-12">
            <div>
              <Link
                data-popover-target="popover-default"
                href="https://github.com/sushil016"
                className="hover:text-white"
              >
                <GitHubIcon />
              </Link>
              <div
                data-popover
                id="popover-default"
                
                className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
              >
                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Github
                  </h3>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/sushil-sahani-46235527b/">
                <LinkedInIcon />
              </Link>
            </div>
            <div>
              <Link href="https://x.com/Sushil_Sahani37">
                <TwitterIcon />
              </Link>
            </div>
            <div>
              <Link href="">
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-white text-center h-full w-1/2 text-2xl font-bold flex justify-center items-center bg-slate-800">
          3D artist here
        </div>
      </div>
      <div className="bg-[#353576] h-screen w-full ">
        {/* <div className="flex w-[200px] h-[200px] justify-center items-center relative">
          <div className="w-[110%] h-[110%] shadow-lg shadow-pink-500 bg-transparent rounded-full absolute"></div>
          <div className="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute rotate-90"></div>
          <div className="w-[106%] h-[106%] shadow-lg shadow-cyan-500 bg-transparent rounded-full absolute rotate-180"></div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
// #1E1E2E
// #B2DBF2
