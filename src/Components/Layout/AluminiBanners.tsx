import Instagram from "../../assets/images/Instgram.png";
import YouTube from "../../assets/images/Youtube.png";
import FaceBook from "../../assets/images/FaceBook.png";
import HomeBannerTest from "../../assets/images/HomeBanner.png";
import MobileHomeBanner from "../../assets/images/MobileHomeBanner.png";
import useWindowSize from "../../hooks/useWindowSize";
import { useState, useEffect } from "react";
import RightArrow from '../../assets/images/rightArrow.png';
import LeftArrow from '../../assets/images/leftArrow.png';
import TannerHenricks from "../../assets/images/TannerHenricks.png";
import TyHenricks from "../../assets/images/TyHenricks.png";
import TylerMcGowan from "../../assets/images/TylerMcGowan.png";
import CK from "../../assets/images/CK.png";
import ColinFrank from "../../assets/images/ColinFrank.png";
import MilesRoberts from "../../assets/images/MilesRoberts.png";
import MerrilSteenari from "../../assets/images/MerrilSteenari.png";
import JamesHong from "../../assets/images/JamesHong.png";
import JonasKemps from "../../assets/images/JonasKemps.png";
import ZaneTorre from "../../assets/images/ZaneTorre.png";
import Odin from "../../assets/images/Odin.png";
function AluminiBanners() {
    const { width } = useWindowSize();
    const bannerImage = width < 1024 ? MobileHomeBanner : HomeBannerTest;
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1023);
    const [activeSlide, setActiveSlide] = useState(0); // Manage active slide
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1023);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const slides = [
        {
            img: TannerHenricks,
            title: "Tanner Henricks",
            subtitle: "Defence",
            subyear: "OHA 2023",
            description: [
                "NHL - Columbus Blue Jackets 2024 Draft Pick (Round 4, #101 overall)",
                "NCAA - St Cloud State University",
                "NCDC - Utah Outliers 2023 Entry Draft Pick (Round 8, #145 overall)",
                "USHL - Lincoln Stars 2022 USHL Futures Draft Pick (Round 6, #86 overall)"
            ],
        },
        {
            img: TyHenricks,
            title: "Ty Henricks",
            subtitle: "Left Wing",
            subyear: "OHA 2022",
            description: [
                "NHL - New York Rangers 2023 Draft Pick (Round 6, #183 overall)",
                "NCAA - Western Michigan University",
                "USHL - Muskegon Lumberjacks",
                "USHL - Fargo Force",
                "USHL - Youngstown Phantoms 2021 Draft Pick (Round 7, #91 overall)",
                "WHL - Brandon Wheat Kings 2020 US Prospect Draft Pick (Round 2, #28 overall)"
            ],
        },
        {
            img: TylerMcGowan,
            title: "Tyler McGowan",
            subtitle: "Defense",
            subyear: "OHA 2023",
            description: [
                "NAHL - Fairbanks Ice Dogs",
                "NAHL - Janesville Jets",
                "NCDC - Utah Outliers 2023 Entry Draft Pick (Round 9, #163 overall)",
                "USHL - Muskegon Lumberjacks 2022 Draft Pick (Round 5, #70 overall)",
                "WHL - Victoria Royals 2021 US Prospect Draft Pick (Round 2, #36 overall) ",

            ],
        },
        {
            img: CK,
            title: "Christian Kim",
            subtitle: "Forward",
            subyear: "OHA 2022",
            description: [
                "BCHL - Trail Smoke Eaters",
                "BCHL - Wenatchee Wild",
                "NCDC - New Jersey Rockets 2022 Entry Draft Pick (Round 17, #227 overall)",
                "USHL - Tri City Storm 2021 USHL Futures Draft Pick (Round 4, #52 overall)",
                "WHL - Vancouver Giants 2020 Bantam Draft Pick (Round 7, #135 overall)",

            ],
        },
        {
            img: ColinFrank,
            title: "Colin Frank",
            subtitle: "Forward",
            subyear: "OHA 2023",
            description: [
                "NCAA - University of Connecticut",
                "NCDC - Rock Springs Propsectors 2023 Draft Pick (ROund 11, #195 overall)",
                "USHL - Dubuque Fighting Saints 2022 Draft Pick (Round 2, #27 overall)",
                "WHL - Brandon Wheat Kings 2021 US Prospect Draft Pick (Round 1, # 13 overall)",


            ],
        },
        {
            img: MilesRoberts,
            title: "Miles Roberts",
            subtitle: "Goalie",
            subyear: "OHA 2022",
            description: [
                "BCHL - Cranbook Bucks",
                "USHL - Muskegon Lumberjacks",
                "NAHL - Danbury Jr Hat Tricks",
                "USHL - Chicago Steel 2021 Draft Pick (Round 5, #40 overall)",
                "WHL - Everett Silvertips 2020 US Prospect Draft Pick  (Round 1, #4 overall)",
                "NTDP - NTDP Evaluation Camp Invitee"

            ],
        },
        {
            img: MerrilSteenari,
            title: "Merril Steenari",
            subtitle: "Forward",
            subyear: "OHA 2021",
            description: [
                "USHL - Fargo Force",
                "NAHL - Janesville Jets",
                "NAHL - St Cloud Norsemen 2021 Draft (Round 2, #54 overall)",
                "USHL - Sioux Falls Stampede 2020 Futures Draft Pick (Round 7, #97 overall) ",

            ],
        },
        {
            img: JamesHong,
            title: "James Hong",
            subtitle: "Forward",
            subyear: "OHA 2021",
            description: [
                "NCAA - Ohio State University",
                "USHL - Madison Capitals “A”",
                "NAHL - Chippewa Steel 2021 Draft Pick (Round 9, #245 overall)",
                "USHL - Waterloo Blackhawks 2020 Futures Draft Pick (Round 3, #43 overall) ",
                "WHL - Everett Silvertips 2019 Draft Pick (Round 5, #108 overall) "
            ],
        },
        {
            img: JonasKemps,
            title: "Jonas Kemps",
            subtitle: "Defense",
            subyear: "OHA 2024",
            description: [
                "NCAA - Michigan State University",
                "NTDP - US National U17 Team",
            ],
        },
        {
            img: ZaneTorre,
            title: "Zane Torre",
            subtitle: "Forward",
            subyear: "OHA 2021",
            description: [
                "USHL - Dubuque Fighting Saints USHL Futures Draft (Round 2, #29 overall) ",
                "WHL - Seattle Thunderbirds WHL US Prospect Draft (Round 2, #43 overall)",
                "USA-S16 - USA Hockey Boys 16 Player Development Camp - Team Black",
                "USA-S15 - USA Hockey Boys 15 Player Development Camp - Team Navy"
            ],
        },
        {
            img: Odin,
            title: "Odin Vauhkonen",
            subtitle: "Defense",
            subyear: "OHA 2022",
            description: [
                "USHL - Youngstown Phantoms USHL Futures Draft (Round 7, #101 overall) ",
                "WHL - Victoria Royals WHL US Prospect Draft (Round 2, #25 overall)",

            ],
        },
    ];


    const handlePrevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div
            className="relative min-h-screen  md:pt-7 xs:pt-[90px]"  // Set min-height to full screen
            style={{
                backgroundImage: isLargeScreen ? `url(${bannerImage})` : "none",
                backgroundSize: "cover", // Ensures the image covers the entire div
                backgroundPosition: "center", // Centers the background image
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
            }}
        >
            {width && width < 1024 ? (
                // Mobile version
                <>
                    <div className="flex justify-center md:pt-6 xs:pt-[80px] bg-white">
                        <div className="flex flex-col text-white w-full md:w-3/4 lg:w-2/3">
                            <div className="text-[24px] font-bold leading-[1.2] text-black text-center">
                                OPTIMUM HOCKEY ACADEMY
                            </div>
                            <div
                                className="text-[64px] text-red-text pt-5 font-bold text-center leading-[1.2]"
                                style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#907E7E" }}
                            >
                                Notable Alumni
                            </div>

                            <div className="flex justify-center py-5">
                                <div className="w-96 relative">
                                    <div className="w-full">
                                        <div className=" flex transition-all duration-300 justify-center">
                                            <img className=" w-[140px] h-[140px]" src={slides[activeSlide].img} alt="Slide" />

                                        </div>
                                        <div className="py-4 px-8 flex flex-col bg-[#D9D9D9] border border-[#737373] mt-[36px]">
                                            <h1 className="text-red-text text-[32px] font-bold leading-[1.2]">
                                                {slides[activeSlide].title}
                                            </h1>
                                            <div className="text-black text-[16px] font-normal leading-[1.2]">
                                                {slides[activeSlide].subtitle}
                                            </div>
                                            <div className="text-black text-[16px] font-bold leading-[1.2]">
                                                {slides[activeSlide].subyear}
                                            </div>
                                            <ul className="py-3 text-black text-[20px] font-normal leading-[1.2] list-disc">
                                                {slides[activeSlide].description.map((item, index) => (
                                                    <li key={index} className="">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Button controls outside the box */}
                    <div className="flex justify-between gap-4 pt-4 mx-3 pb-10"> {/* Ensure centered alignment */}
                        <button
                            onClick={handlePrevSlide}
                            className="text-red-600 cursor-pointer flex items-center gap-2"
                        >
                            <img src={LeftArrow} alt="Previous" className="w-6 h-6" /> {/* Adjust icon size */}
                            <div className="text-black text-[11px] font-normal leading-normal uppercase">Prev</div>
                        </button>
                        <button
                            onClick={handleNextSlide}
                            className="text-red-600 cursor-pointer  flex items-center gap-2"
                        >
                            <div className="text-black text-[11px] font-normal leading-normal uppercase">Next</div>
                            <img src={RightArrow} alt="Next" className="w-6 h-6" /> {/* Adjust icon size */}
                        </button>
                    </div>

                </>
            ) : (
                // Desktop version
                <>
                    <div className="absolute left-0 top-[50%] flex flex-col py-2 gap-4 z-10 bg-red-text items-start">
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-white  hover:text-red-text pl-2 hover:scale-110 transition-transform duration-300">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-text  hover:scale-110 transition-transform duration-300">
                            <img src={YouTube} alt="YouTube" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-white  hover:text-red-text pl-2.5">
                            <img src={FaceBook} alt="FaceBook" />
                        </a>
                    </div>

                    <div className="flex justify-end pt-6 ">
                        <div className="flex flex-col text-[24px] font-bold leading-[1.2] text-white w-full md:w-3/4 lg:w-2/4">
                            <div className="text-white text-[24px] font-bold leading-[1.2]">OPTIMUM HOCKEY ACADEMY</div>
                            <div className="text-[64px] text-red-text font-bold ml-[-70px] leading-[1.2]" style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#907E7E" }}>
                                Notable Alumni
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 pt-8 ml-[204px] mr-[37px] ">
                        <div className="flex gap-5">
                            <div className="flex ">
                                <img src={TannerHenricks} alt="" className="object-cover flex-shrink-0 max-w-[120px] max-h-[140px] " />
                            </div>
                            <div className="flex flex-row border border-[#737373] bg-[#E8E4E4] gap-6 w-full xl:max-h-[140px] lg:min-h-[140px]  ">
                                <div className="flex flex-col pt-9 pl-[14px] pb-[43px]">
                                    <div className="text-[32px] text-red-text font-bold leading-[1.2]">Tanner Henricks</div>
                                    <div className="text-black text-[16px] font-normal leading-[1.2]">Defense</div>
                                    <div className="text-black text-[16px] font-bold leading-[1.2]">OHA 2023</div>
                                </div>
                                <div className="flex flex-col pt-6">
                                    <ul className="list-disc pl-5 list-outside ">
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">NHL - Columbus Blue Jackets 2024 Draft Pick (Round 4, #101 overall)</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">NCAA - St Cloud State University</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">NCDC - Utah Outliers 2023 Entry Draft Pick (Round 8, #145 overall)</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">USHL - Lincoln Stars 2022 USHL Futures Draft Pick (Round 6, #86 overall)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="flex ">
                                <img src={TyHenricks} alt="" className="max-h-[138px] max-w-[138px]" />
                            </div>
                            <div className="flex flex-row border border-[#737373] bg-[#E8E4E4] gap-[94px] w-full xl:max-h-[186px] lg:min-h-[186px]">
                                <div className="flex flex-col pt-9 pl-[14px] pb-[43px] ">
                                    <div className="text-[32px] text-red-text font-bold leading-[1.2]">Ty Henricks</div>
                                    <div className="text-black text-[16px] font-normal leading-[1.2]">Left Wing</div>
                                    <div className="text-black text-[16px] font-bold leading-[1.2]">OHA 2022</div>
                                </div>
                                <div className="flex flex-col pt-2 ">
                                    <ul className="list-disc pl-5 list-outside">
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">NHL - New York Rangers 2023 Draft Pick (Round 6, #183 overall)</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">NCAA - Western Michigan University</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">USHL - Muskegon Lumberjacks</li>
                                        <li className="text-[20px] text-black leading-[1.2]l font-normal">USHL - Fargo Force</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">USHL - Youngstown Phantoms 2021 Draft Pick (Round 7, #91 overall)</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">WHL - Brandon Wheat Kings 2020 US Prospect Draft Pick (Round 2, #28 overall)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex  justify-center gap-3">
                            <div className="flex ">
                                <img src={TylerMcGowan} alt="" className="max-w-[124px] max-h-[124px]" />
                            </div>
                            <div className="flex flex-row border border-[#737373] bg-[#E8E4E4] gap-9  w-full xl:max-h-[141px] lg:min-h-[141px]">
                                <div className="flex flex-col pt-9 pl-[14px] pb-[43px]">
                                    <div className="text-[32px] text-red-text font-bold leading-[1.2]">Tyler McGowan</div>
                                    <div className="text-black text-[16px] font-normal leading-[1.2]">Defense</div>
                                    <div className="text-black text-[16px] font-bold leading-[1.2]">OHA 2023</div>
                                </div>
                                <div className="flex flex-col">
                                    <ul className="list-disc pl-5 pt-2 list-outside ">
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">NAHL - Fairbanks Ice Dogs</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">NAHL - Janesville Jets</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">NCDC - Utah Outliers 2023 Entry Draft Pick (Round 9, #163 overall)</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">USHL - Muskegon Lumberjacks 2022 Draft Pick (Round 5, #70 overall)</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">WHL - Victoria Royals 2021 US Prospect Draft Pick (Round 2, #36 overall) </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex  justify-center gap-3 pb-5">
                            <div className="flex ">
                                <img src={CK} alt="" className="max-h-[70px] max-w-[125px] mt-[10px]" />
                            </div>
                            <div className="flex flex-row border border-[#737373] bg-[#E8E4E4] gap-16  w-full xl:max-h-[141px] lg:min-h-[141px]">
                                <div className="flex flex-col pt-9 pl-[14px] pb-[43px]">
                                    <div className="text-[32px] text-red-text font-bold leading-[1.2]">Christian Kim</div>
                                    <div className="text-black text-[16px] font-normal leading-[1.2]">Forward</div>
                                    <div className="text-black text-[16px] font-bold leading-[1.2]">OHA 2022</div>
                                </div>
                                <div className="flex flex-col">
                                    <ul className="list-disc pl-5 pt-2 list-outside ">
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">BCHL - Trail Smoke Eaters</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">BCHL - Wenatchee Wild</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">NCDC - New Jersey Rockets 2022 Entry Draft Pick (Round 17, #227 overall)</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">USHL - Tri City Storm 2021 USHL Futures Draft Pick (Round 4, #52 overall)</li>
                                        <li className="text-[20px] text-black leading-[1.2] font-normal">WHL - Vancouver Giants 2020 Bantam Draft Pick (Round 7, #135 overall) </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default AluminiBanners;
