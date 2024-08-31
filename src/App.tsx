import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, useEffect } from "react";
import { Hero } from "./components/Hero";
import { Item1 } from "./grid/Item1";
import { Item10 } from "./grid/Item10";
import { Item11 } from "./grid/Item11";
import { Item12 } from "./grid/Item12";
import { Item2 } from "./grid/Item2";
import { Item3 } from "./grid/Item3";
import { Item4 } from "./grid/Item4";
import { Item5 } from "./grid/Item5";
import { Item6 } from "./grid/Item6";
import { Item7 } from "./grid/Item7";
import { Item8 } from "./grid/Item8";
import { Item9 } from "./grid/Item9";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";
import { preloadFonts } from "./js/utils.js";
import Lenis from "@studio-freight/lenis";
import Logopath from "./logos/logo.png";
const Wrapper = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <div className="relative rounded-md cursor-pointer bg-white/10 card p-[1px]">
      <View className="flex z-[2] bg-[#171717]  aspect-square  relative rounded-t-md">
        {children}
      </View>

      <div className="relative z-20 flex items-center mt-[1px] justify-between  w-full px-4 py-2 bg-[#171717] rounded-b-md">
        <span className="w-1 h-1 rounded-full bg-white/20"></span>
        <span className="">{name}</span>
        <span className="w-1 h-1 rounded-full bg-white/20"></span>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 rounded-md opacity-0 group-hover:opacity-100 z-1"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y),rgba(255, 255, 255, 0.3),transparent 40%)`,
        }}
      ></div>
    </div>
  );
};

function App() {
  useEffect(() => {
    const slidingText = document.querySelector(".sliding-text");
    if (slidingText) {
      slidingText.addEventListener("animationiteration", () => {
        slidingText.style.transform = "translateX(0)";
      });
    }
  }, []);

  useEffect(() => {
    Splitting();

    const initSmoothScrolling = () => {
      const lenis = new Lenis({
        lerp: 0.2,
        smooth: true,
      });

      lenis.on("scroll", () => ScrollTrigger.update());

      const scrollFn = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const initAnimations = () => {
      const fx25Titles = document.querySelectorAll<HTMLElement>(
        ".content__title[data-splitting][data-effect25]"
      );

      fx25Titles.forEach((title) => {
        gsap.fromTo(
          title.querySelectorAll(".char"),
          {
            "will-change": "transform",
            transformOrigin: "50% 100%",
            scaleY: 0,
          },
          {
            ease: "power3.in",
            opacity: 1,
            scaleY: 1,
            stagger: 0.05,
            scrollTrigger: {
              trigger: title,
              start: "center center",
              end: "+=500%",
              scrub: true,
              pin: title.parentNode,
            },
          }
        );
      });

      const fx26Titles = document.querySelectorAll<HTMLElement>(
        ".content__title[data-splitting][data-effect26]"
      );

      fx26Titles.forEach((title) => {
        const words = [...title.querySelectorAll(".word")];
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: title,
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: title.parentNode,
          },
        });
        for (const [wordPosition, word] of words.entries()) {
          tl.fromTo(
            word.querySelectorAll(".char"),
            {
              "will-change": "transform",
              transformOrigin: () =>
                !wordPosition % 2 ? "50% 0%" : "50% 100%",
              scaleY: 0,
            },
            {
              ease: "power1.inOut",
              scaleY: 1,
              stagger: {
                amount: 0.3,
                from: "center",
              },
            },
            0
          );
        }
      });
    };
    preloadFonts("cvn8slu").then(() => {
      document.body.classList.remove("loading");
      initSmoothScrolling();
      initAnimations();
    });

    // Card hover effect
    const cards = document.querySelectorAll<HTMLDivElement>(".card");

    const handlePointerMove = (e: PointerEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    document
      .querySelector<HTMLDivElement>("[data-gird]")
      ?.addEventListener("pointermove", handlePointerMove);

    return () => {
      document
        .querySelector<HTMLDivElement>("[data-gird]")
        ?.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);
  const items = [
    { component: Item1, name: "Rings" },
    { component: Item2, name: "Loop" },
    { component: Item3, name: "Coins" },
    { component: Item4, name: "Core" },
    { component: Item5, name: "Rubik" },
    { component: Item6, name: "Travel" },
    { component: Item7, name: "Stagger" },
    { component: Item8, name: "Balance" },
    { component: Item9, name: "Pulse" },
    { component: Item10, name: "Pie" },
    { component: Item11, name: "Newton's Cradle" },
    { component: Item12, name: "Arrows" },
  ];
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLDivElement>(".card");

    const handlePointerMove = (e: PointerEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    document
      .querySelector<HTMLDivElement>("[data-gird]")
      ?.addEventListener("pointermove", handlePointerMove);

    return () => {
      document
        .querySelector<HTMLDivElement>("[data-gird]")
        ?.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="min-h-screen text-white bg-[#0c0c0c] select-none background">
      <div className="container pb-20">
        <Hero></Hero>
        <div className="relative border border-white/10 h-[80vh] w-[100vw] flex flex-col justify-center items-center">
          <h1 className="absolute z-10 text-[7em] text-[#FF8E01] zen-dots-regular font-medium">
            $
          </h1>
          <Canvas className="absolute top-0 left-0 w-full h-full">
            <Item3 />
          </Canvas>
        </div>
        <div className="content">
          <h2
            className="content__title content__title--left"
            data-splitting
            data-effect25
          >
            <span className="font-13 font-medium font-height-medium ">
              <span className="zen-dots-regular ">
                Inve<span className="text-[#FF8E01]">$</span>to
              </span>{" "}
              Modern investment
              <br />
              management combining cutting
              <span className="text-[#FF8E01]">-</span>edge
              <br />
              technology with personalized
              <br /> expertise for 21st<span className="text-[#FF8E01]">-</span>
              century <br />
              clients<span className="text-[#FF8E01]">.</span>
            </span>
          </h2>
        </div>
        {/* <div className="flex flex-col h-[60vh] px-20 w-[100vw]">
          <div className="w-1/3 p-4 flex flex-col justify-center items-center">
            <Canvas>
              <Item4 />
            </Canvas>
          </div>
        </div> */}
        {/* <div className="bg-gray-100 py-10">
          <div className="overflow-hidden relative">
            <div className="flex space-x-10 animate-slide">
              <img src={Logopath} alt="Company 1" className="h-16" />
              <img src={Logopath} alt="Company 2" className="h-16" />
              <img src={Logopath} alt="Company 3" className="h-16" />
              <img src={Logopath} alt="Company 4" className="h-16" />
              <img src={Logopath} alt="Company 5" className="h-16" />
              <img src={Logopath} alt="Company 1" className="h-16" />
              <img src={Logopath} alt="Company 2" className="h-16" />
              <img src={Logopath} alt="Company 3" className="h-16" />
              <img src={Logopath} alt="Company 4" className="h-16" />
              <img src={Logopath} alt="Company 5" className="h-16" />
            </div>
          </div>
        </div> */}
        <div className="border border-white/10 py-10 w-[100vw] mt-[150px]">
          <div className="overflow-hidden relative  w-[100%]">
            <div className="flex space-x-10 animate-slide w-[100%]">
              <img src={Logopath} alt="Company 1" className="h-16" />
              <img src={Logopath} alt="Company 2" className="h-16" />
              <img src={Logopath} alt="Company 3" className="h-16" />
              <img src={Logopath} alt="Company 4" className="h-16" />
              <img src={Logopath} alt="Company 5" className="h-16" />
              <img src={Logopath} alt="Company 1" className="h-16" />
              <img src={Logopath} alt="Company 2" className="h-16" />
              <img src={Logopath} alt="Company 3" className="h-16" />
              <img src={Logopath} alt="Company 4" className="h-16" />
              <img src={Logopath} alt="Company 5" className="h-16" />
              <img src={Logopath} alt="Company 3" className="h-16" />
              <img src={Logopath} alt="Company 4" className="h-16" />
              <img src={Logopath} alt="Company 5" className="h-16" />
              <img src={Logopath} alt="Company 3" className="h-16" />
              <img src={Logopath} alt="Company 4" className="h-16" />
              <img src={Logopath} alt="Company 5" className="h-16" />
            </div>
          </div>
        </div>
        <div className="w-[100vw] h-[100%] px-20 flex flex-row justify-center">
          <div className="pt-[200px] w-[40%]">
            <div className="sticky top-[10rem]">
              <p className="mb-[16px] text-2xl font-thin leading-7">
                Our product offerings
              </p>
              <h1 className="my-0 text-5xl font-normal leading-[50px]">
                Discover your investment potential
              </h1>
            </div>
          </div>
          <div className="flex flex-col  w-[60%] pt-[200px] pl-20 gap-20">
            <div className="border border-white corde p-8 rounded-[24px]  text-white relative">
              <div className="offer-card-hero">
                <img
                  src="https://cdn.prod.website-files.com/6477332607fa08930fe00261/647ef2863d065963ee9c6a2a_decor-wealth%20management.png"
                  loading="lazy"
                  alt=""
                  className="h-[40px] mb-[50px]"
                />
              </div>
              <h2 className="border-b border-white mb-6 pb-[74px] text-[56px] leading-[58px]">
                Wealth management
              </h2>

              <p className="text-xl font-normal leading-6">
                Advising individuals and families with our expert team,
                investing your money based on your goals, and providing access
                to the Cadro app and Cadro Club community.
              </p>
              <div className="absolute top-6 right-6 flex items-center justify-center w-[94px] h-[94px] bg-white rounded-full">
                <div className="ic-circle-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/6477332607fa08930fe00261/648716ed11e52910fe26f283_Arrow_Up_Right_L.svg"
                    loading="lazy"
                    alt=""
                    className="icon is-absolute"
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  />
                  <div
                    className="ic-wrap is-circle is-large"
                    style={{ opacity: 1 }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="border border-white corde p-8 rounded-[24px]  text-white relative">
              <div className="offer-card-hero">
                <img
                  src="https://cdn.prod.website-files.com/6477332607fa08930fe00261/647ef2863d065963ee9c6a2a_decor-wealth%20management.png"
                  loading="lazy"
                  alt=""
                  className="h-[40px] mb-[50px]"
                />
              </div>
              <h2 className="border-b border-white mb-6 pb-[74px] text-[56px] leading-[58px]">
                Wealth management
              </h2>

              <p className="text-xl font-normal leading-6">
                Advising individuals and families with our expert team,
                investing your money based on your goals, and providing access
                to the Cadro app and Cadro Club community.
              </p>
              <div className="absolute top-6 right-6 flex items-center justify-center w-[94px] h-[94px] bg-white rounded-full">
                <div className="ic-circle-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/6477332607fa08930fe00261/648716ed11e52910fe26f283_Arrow_Up_Right_L.svg"
                    loading="lazy"
                    alt=""
                    className="icon is-absolute"
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  />
                  <div
                    className="ic-wrap is-circle is-large"
                    style={{ opacity: 1 }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="border border-white corde p-8 rounded-[24px]  text-white relative">
              <div className="offer-card-hero">
                <img
                  src="https://cdn.prod.website-files.com/6477332607fa08930fe00261/647ef2863d065963ee9c6a2a_decor-wealth%20management.png"
                  loading="lazy"
                  alt=""
                  className="h-[40px] mb-[50px]"
                />
              </div>
              <h2 className="border-b border-white mb-6 pb-[74px] text-[56px] leading-[58px]">
                Wealth management
              </h2>

              <p className="text-xl font-normal leading-6">
                Advising individuals and families with our expert team,
                investing your money based on your goals, and providing access
                to the Cadro app and Cadro Club community.
              </p>
              <div className="absolute top-6 right-6 flex items-center justify-center w-[94px] h-[94px] bg-white rounded-full">
                <div className="ic-circle-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/6477332607fa08930fe00261/648716ed11e52910fe26f283_Arrow_Up_Right_L.svg"
                    loading="lazy"
                    alt=""
                    className="icon is-absolute"
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  />
                  <div
                    className="ic-wrap is-circle is-large"
                    style={{ opacity: 1 }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="border border-white corde p-8 rounded-[24px]  text-white relative">
              <div className="offer-card-hero">
                <img
                  src="https://cdn.prod.website-files.com/6477332607fa08930fe00261/647ef2863d065963ee9c6a2a_decor-wealth%20management.png"
                  loading="lazy"
                  alt=""
                  className="h-[40px] mb-[50px]"
                />
              </div>
              <h2 className="border-b border-white mb-6 pb-[74px] text-[56px] leading-[58px]">
                Wealth management
              </h2>

              <p className="text-xl font-normal leading-6">
                Advising individuals and families with our expert team,
                investing your money based on your goals, and providing access
                to the Cadro app and Cadro Club community.
              </p>
              <div className="absolute top-6 right-6 flex items-center justify-center w-[94px] h-[94px] bg-white rounded-full">
                <div className="ic-circle-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/6477332607fa08930fe00261/648716ed11e52910fe26f283_Arrow_Up_Right_L.svg"
                    loading="lazy"
                    alt=""
                    className="icon is-absolute"
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  />
                  <div
                    className="ic-wrap is-circle is-large"
                    style={{ opacity: 1 }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100vw] h-[100%] p-20 flex flex-row justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              backgroundImage:
                "url('https://cdn.prod.website-files.com/6477332607fa08930fe00261/648829e97ad23fd8992a626e_CADRO SHOWREEL V2-poster-00001.jpg')",
              objectFit: "cover",
            }}
            className="object-cover rounded-[24px] bg-center bg-cover w-full h-full m-auto inset-[-100%]"
          >
            <source src="https://cdn.prod.website-files.com/6477332607fa08930fe00261/648829e97ad23fd8992a626e_CADRO SHOWREEL V2-transcode.mp4" />
            <source src="https://cdn.prod.website-files.com/6477332607fa08930fe00261/648829e97ad23fd8992a626e_CADRO SHOWREEL V2-transcode.webm" />
          </video>
        </div>
        <div className="absolute top-0 z-20 content content--full">
          <h2 className="content__title" data-splitting data-effect26>
            <span className="font-upper font-12 zen-dots-regular">Time is</span>
            <span className="font-upper font-17 zen-dots-regular">
              ticking<span className="text-[#FF8E01]">!</span>
            </span>
          </h2>
        </div>
        <div className="relative h-[100vh] w-[100vw] flex flex-col justify-center items-center">
          <Canvas className="absolute top-20 left-0 w-full h-full">
            <Item11 />
          </Canvas>
        </div>
        <div className="relative mt-5 overflow-hidden">
          {/* <div
            className="grid h-full gap-5 overflow-hidden group grid-clos-1 md:grid-cols-2 lg:grid-cols-4"
            data-gird
          >
            {items.map((item, index) => (
              <Wrapper key={index} name={item.name}>
                <item.component />
              </Wrapper>
            ))}
          </div>

          <div className="fixed top-0 left-0 z-20 w-full h-screen pointer-events-none ">
            <Canvas
              camera={{
                zoom: 0.8,
              }}
              className="fixed"
              eventSource={document.getElementById("root")!}
            >
              <View.Port />
            </Canvas>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
