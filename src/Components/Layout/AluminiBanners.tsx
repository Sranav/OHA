import HomeCircle from "../../assets/images/HomeCircle.png";
import Instagram from "../../assets/images/Insta.png";
import YouTube from "../../assets/images/YouTube.png";
import FaceBook from "../../assets/images/FaceBook.png";
import HomeBannerTest from "../../assets/images/HomeBanner.png";
import MobileHomeBanner from "../../assets/images/MobileHomeBanner.png";
import useWindowSize from "../../hooks/useWindowSize";
import AluminImage1 from "../../assets/images/aluminImage.png";
import { useState, useEffect } from "react";
import RightArrow from '../../assets/images/rightArrow.png';
import LeftArrow from '../../assets/images/leftArrow.png';
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
            img: AluminImage1,
            title: "Tanner Henricks",
            subcontent: "Defence, OHA 2023",
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Curabitur pretium tincidunt lacus.",
                "Pellentesque convallis ligula eget ante.",
            ],
        },
        {
            img: AluminImage1,
            title: "Scelerisque eleifend donec pretium vulputate sapien.",
            description: [
                "Egestas diam in arcu cursus euismod quis.",
                "Fusce id velit ut tortor.",
                "Donec pretium vulputate sapien.",
            ],
        },
        {
            img: AluminImage1,
            title: "Consectetur purus ut faucibus pulvinar elementum.",
            description: [
                "Aliquam ultrices sagittis orci a scelerisque purus semper.",
                "Pellentesque habitant morbi tristique senectus et netus.",
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
                    <div className="flex justify-end md:pt-6 xs:pt-[80px] bg-white">
                        <div className="flex flex-col text-white w-full md:w-3/4 lg:w-2/3">
                            <div className="text-[24px] font-bold leading-normal text-black text-center">
                                OPTIMUM HOCKEY ACADEMY
                            </div>
                            <div
                                className="text-[64px] text-red-text pt-5 font-bold text-center"
                                style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#907E7E" }}
                            >
                                Notable Alumni
                            </div>

                            <div className="flex justify-center py-5">
                                <div className="w-96 relative">
                                    <div className="w-full">
                                        <div className="w-96 bg-white rounded-lg shadow-lg transition-all duration-300">
                                            <img className="rounded-t-lg w-96 h-64" src={slides[activeSlide].img} alt="Slide" />
                                           
                                        </div>
                                        <div className="py-4 px-8 flex flex-col bg-[#D9D9D9] border border-[#737373] mt-[36px]">
                                                <h1 className="text-gray-900 font-bold text-2xl tracking-tight">
                                                    {slides[activeSlide].title}
                                                </h1>
                                                <div className="text-black">
                                                    {slides[activeSlide].subcontent}
                                                </div>
                                                <ul className="py-3 text-gray-600 leading-6 list-disc">
                                                    {slides[activeSlide].description.map((item, index) => (
                                                        <li key={index} className="mb-2">{item}</li>
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
                            <div>Prev</div>
                        </button>
                        <button
                            onClick={handleNextSlide}
                            className="text-red-600 cursor-pointer  flex items-center gap-2"
                        >
                            <div>Next</div>
                            <img src={RightArrow} alt="Next" className="w-6 h-6" /> {/* Adjust icon size */}
                        </button>
                    </div>

                </>
            ) : (
                // Desktop version
                <>
                    <div className="absolute left-0 top-[50%] flex flex-col py-2 gap-4 z-10 bg-red-text items-start">
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-text">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-text">
                            <img src={YouTube} alt="YouTube" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-text">
                            <img src={FaceBook} alt="FaceBook" />
                        </a>
                    </div>

                    <div className="flex justify-end pt-6 ">
                        <div className="flex flex-col text-[24px] font-bold leading-normal text-white w-full md:w-3/4 lg:w-2/4">
                            <div className="text-white text-[24px] font-bold leading-normal">OPTIMUM HOCKEY ACADEMY</div>
                            <div className="text-[64px] text-red-text font-bold ml-[-70px] leading-normal" style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#907E7E" }}>
                                Notable Alumni
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 pt-8">
                        <div className="flex  justify-center gap-5">
                            <div className="flex ">
                                <img src={AluminImage1} alt="" className="w-[200px]" />
                            </div>
                            <div className="flex flex-row border border-[#737373] bg-[#E8E4E4] gap-6  w-3/4">
                                <div className="flex flex-col pt-9 p-4">
                                    <div className="text-[32px] text-red-text font-bold leading-normal">Tanner Henricks</div>
                                    <div className="text-black text-[16px] font-normal leading-normal">Defense</div>
                                    <div className="text-black text-[16px] font-bold leading-normal">OHA 2023</div>
                                </div>
                                <div className="flex flex-col pt-6 p-4">
                                    <ul className="list-disc pl-5 list-outside space-y-2">
                                        <li className="text-[20px] text-black leading-normal font-normal">NHL - Columbus Blue Jackets 2024 Draft Pick (Round 4, #101 overall)</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">NCAA - St Cloud State University</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">NCDC - Utah Outliers 2023 Entry Draft Pick (Round 8, #145 overall)</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">USHL - Lincoln Stars 2022 USHL Futures Draft Pick (Round 6, #86 overall)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex  justify-center gap-5">
                            <div className="flex ">
                                <img src={AluminImage1} alt="" className="w-[200px]" />
                            </div>
                            <div className="flex flex-row border border-[#737373] bg-[#E8E4E4] gap-6  w-3/4">
                                <div className="flex flex-col pt-9 p-4">
                                    <div className="text-[32px] text-red-text font-bold leading-normal">Ty Henricks</div>
                                    <div className="text-black text-[16px] font-normal leading-normal">Left Wing</div>
                                    <div className="text-black text-[16px] font-bold leading-normal">OHA 2022</div>
                                </div>
                                <div className="flex flex-col pt-6 p-4">
                                    <ul className="list-disc pl-5 list-outside space-y-2">
                                        <li className="text-[20px] text-black leading-normal font-normal">NHL - New York Rangers 2023 Draft Pick (Round 6, #183 overall)</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">NCAA - Western Michigan University</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">USHL - Muskegon Lumberjacks</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">USHL - Fargo Force</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">USHL - Youngstown Phantoms 2021 Draft Pick (Round 7, #91 overall)</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">WHL - Brandon Wheat Kings 2020 US Prospect Draft Pick (Round 2, #28 overall)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex  justify-center gap-5">
                            <div className="flex ">
                                <img src={AluminImage1} alt="" className="w-[200px]" />
                            </div>
                            <div className="flex flex-row border border-[#737373] bg-[#E8E4E4] gap-6  w-3/4">
                                <div className="flex flex-col pt-9 p-4">
                                    <div className="text-[32px] text-red-text font-bold leading-normal">Tyler McGowan</div>
                                    <div className="text-black text-[16px] font-normal leading-normal">Defense</div>
                                    <div className="text-black text-[16px] font-bold leading-normal">OHA 2023</div>
                                </div>
                                <div className="flex flex-col pt-6 p-4">
                                    <ul className="list-disc pl-5 list-outside space-y-2">
                                        <li className="text-[20px] text-black leading-normal font-normal">NAHL - Fairbanks Ice Dogs</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">NAHL - Janesville Jets</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">NCDC - Utah Outliers 2023 Entry Draft Pick (Round 9, #163 overall)</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">USHL - Muskegon Lumberjacks 2022 Draft Pick (Round 5, #70 overall)</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">WHL - Victoria Royals 2021 US Prospect Draft Pick (Round 2, #36 overall) </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex  justify-center gap-5 pb-5">
                            <div className="flex ">
                                <img src={AluminImage1} alt="" className="w-[200px]" />
                            </div>
                            <div className="flex flex-row border border-[#737373] bg-[#E8E4E4] gap-6  w-3/4">
                                <div className="flex flex-col pt-9 p-4">
                                    <div className="text-[32px] text-red-text font-bold leading-normal">Christian Kim</div>
                                    <div className="text-black text-[16px] font-normal leading-normal">Forward</div>
                                    <div className="text-black text-[16px] font-bold leading-normal">OHA 2022</div>
                                </div>
                                <div className="flex flex-col pt-6 p-4">
                                    <ul className="list-disc pl-5 list-outside space-y-2">
                                        <li className="text-[20px] text-black leading-normal font-normal">BCHL - Trail Smoke Eaters</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">BCHL - Wenatchee Wild</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">NCDC - New Jersey Rockets 2022 Entry Draft Pick (Round 17, #227 overall)</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">USHL - Tri City Storm 2021 USHL Futures Draft Pick (Round 4, #52 overall)</li>
                                        <li className="text-[20px] text-black leading-normal font-normal">WHL - Vancouver Giants 2020 Bantam Draft Pick (Round 7, #135 overall) </li>

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
