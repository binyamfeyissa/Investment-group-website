import { useStore } from "../store/useStore";

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="hover:underline underline-offset-2"
      target="_blank"
    >
      {children}
    </a>
  );
};

export const Hero = () => {
  const [index, setIndex] = useStore((state) => [state.index, state.setIndex]);

  return (
    <div className="w-[100vw] sticky top-0 z-50 space-y-3 sm:space-y-5  border flex flex-col justify-between  bg-black bg-opacity-10 backdrop-blur border-white/10 rounded-md p-5">
      <div className="flex items-center justify-between">
        {/* <div className="text-md sm:text-xl lg:text-2xl">
          12+ 3D Motion Graphics
        </div> */}
      </div>
      <div className="text-l text-transparent text-[#FF8E01] zen-dots-regular from-[#828282] to-white bg-gradient-to-l bg-clip-text ">
        INVE$TO
      </div>
      <div className="flex flex-col justify-around text-xs border lg:flex-row md:text-s border-white/10">
        <div className="px-2 py-2 sm:px-4">
          ©️ 2024 <Link href="https://x.com/codrops">Codrops</Link> &amp;{" "}
          <Link href="https://x.com/deadrabbbbit">deadrabbbbit</Link>
        </div>
        <div className="flex justify-between flex-grow px-2 py-2 sm:px-4 lg:justify-around border-white/10 md:border-x">
          <Link href="https://tympanus.net/codrops/demos/?tag=webgl">
            webgl
          </Link>
          <div className="hidden text-[#FF8E01] sm:inline-block">▲</div>
          <Link href="https://tympanus.net/codrops/demos/?tag=three-js">
            three.js
          </Link>
          <div className="hidden text-[#FF8E01] sm:inline-block">▲</div>
          <Link href="https://tympanus.net/codrops/demos/?tag=react-three-fiber">
            R3F
          </Link>
          <div className="hidden text-[#FF8E01] sm:inline-block">▲</div>
          <Link href="https://tympanus.net/codrops/demos/?tag=3d">3D</Link>
        </div>
        <div className="flex px-2 py-2 space-x-4 sm:px-4 lg:justify-around">
          <Link href="https://github.com/d3adrabbit/origami">GitHub</Link>
          <Link href="https://tympanus.net/codrops/?p=79782">Article</Link>
        </div>
      </div>
    </div>
  );
};
