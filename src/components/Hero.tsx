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
      <div className="flex items-center justify-between"></div>
      <div className="text-xl text-transparent text-[#FF8E01] zen-dots-regular from-[#828282] to-white bg-gradient-to-l bg-clip-text ">
        መላ መላ
      </div>
      <div className="flex flex-col justify-around text-xs border lg:flex-row md:text-s border-white/10">
        <div className="px-2 py-2 sm:px-4">
          ©️ 2024{" "}
          <Link href="https://www.linkedin.com/in/binyam-feyissa/">
            Made by Binyam F.
          </Link>
        </div>
        <div className="flex justify-between flex-grow px-2 py-2 sm:px-4 lg:justify-around border-white/10 md:border-x">
          <Link href="#">Real Estate</Link>
          <div className="hidden text-[#FF8E01] sm:inline-block">▲</div>
          <Link href="#">Forex</Link>
          <div className="hidden text-[#FF8E01] sm:inline-block">▲</div>
          <Link href="#">Bitcoin</Link>
          <div className="hidden text-[#FF8E01] sm:inline-block">▲</div>
          <Link href="#">Start up</Link>
        </div>
      </div>
    </div>
  );
};
