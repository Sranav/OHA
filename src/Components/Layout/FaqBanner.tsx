import HomeCircle from "../../assets/images/HomeCircle.png";
import Instagram from "../../assets/images/Insta.png";
import YouTube from "../../assets/images/YouTube.png";
import FaceBook from "../../assets/images/FaceBook.png";
import HomeBannerTest from "../../assets/images/HomeBanner.png";
import MobileHomeBanner from "../../assets/images/MobileHomeBanner.png";
import useWindowSize from "../../hooks/useWindowSize";

function FaqBanner() {
    const { width } = useWindowSize();
    const bannerImage = width < 1024 ? MobileHomeBanner : HomeBannerTest;
    return (
        <div
            className="relative min-h-screen  md:pt-7 xs:pt-[90px]"  // Set min-height to full screen
            style={{

                backgroundImage: `url(${bannerImage})`,
                backgroundSize: "cover", // Ensures the image covers the entire div
                backgroundPosition: "center", // Centers the background image
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
            }}
        >
            {width && width < 1024 ? (
                // Mobile version

                <>

                    {/* <div className="absolute left-0 top-[50%] flex flex-col py-2 gap-4 z-10 bg-red-text items-start">
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-text">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-text">
                            <img src={YouTube} alt="YouTube" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-text">
                            <img src={FaceBook} alt="FaceBook" />
                        </a>
                    </div> */}
                    <div className="flex justify-end md:pt-6 xs:pt-[50px] px-[19px]">
                        <div className="flex flex-col  text-white w-full md:w-3/4 lg:w-2/3">
                            <div className="text-[24px] font-bold leading-normal"> OPTIMUM HOCKEY ACADEMY</div>
                            <div className=" text-[36px] text-red-text font-bold">
                                FAQ
                            </div>
                            <div className="mr-10">
                                <div className="text-[15px] text-black font-bold leading-normal pt-9">What is Optimum Hockey Academy?</div>
                                <div className="text-[15px] text-black font-normal leading-normal">
                                    Optimum Hockey Academy offers a comprehensive program that integrates academic education with daily on-ice skill development and strength and conditioning training. Located at the state-of-the-art Great Park Ice Facility, our academy provides athletes with the resources and support needed to excel both academically and athletically, fostering their overall development in a high-performance environment.
                                </div>
                                <div className="text-[15px] text-black font-bold leading-normal pt-5">Is Optimum Hockey Academy Co-Ed?</div>
                                <div className="text-[15px] text-black font-normal leading-normal">
                                    Optimum Hockey Academy proudly welcomes both male and female athletes who are committed to elevating their hockey skills. Our academy provides a dynamic environment led by experienced coaches, offering high-performance training programs designed to foster both athletic and academic development. We are dedicated to supporting each athlete's growth, ensuring a comprehensive approach to their success on and off the ice.
                                </div>
                                <div className="text-[15px] text-black font-bold leading-normal pt-5">When does the Academy start and end?</div>
                                <div className="text-[15px] text-black font-normal leading-normal">
                                    The Academy will start in early September and end in early June. Holidays and breaks will be consistent with a typical public or private school. The program is designed to offer flexibility to families and their schedule’s, students will be at the academy Monday through Thursday for the school year.
                                </div>
                                <div className="text-[15px] text-black font-bold leading-normal pt-5">What does a typical day look like for a student?</div>
                                <div className="text-[15px] text-black font-normal leading-normal"> Daily Schedule (subject to change) </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 8:45 am Drop Off </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 9:00 am – 10:30 am Class Room </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 10:45 am – 11:45 am *Strength & Conditioning </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 12:00 pm – 12:40 pm Lunch </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 1:00 pm – 2:15 pm On Ice Skill Development </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 2:30 pm – 4:00 pm Class Room </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 4:10 pm Pick Up </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> *Strength & Conditioning will be 2 -3 times per week, on the off days students will participate in seminars and field activities at the Great Park. </div>
                                <div className="text-[15px] text-black font-bold leading-normal pt-5">What are the requirements to attend Optimum Hockey Academy?</div>
                                <div className="text-[15px] text-black font-normal leading-normal">
                                    The Academy is open to players from ALL clubs, students must be in Grade 4 - 12.
                                </div>
                                <div className="text-[15px] text-black font-bold leading-normal pt-5">Are there teams at the Academy?</div>
                                <div className="text-[15px] text-black font-normal leading-normal">
                                    No, the Academy is designed to enhance individual skills and the on-ice curriculum will be skill based.
                                </div>
                            </div>
                        </div>
                    </div></>

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
                        <div className="flex flex-col text-[24px] font-bold leading-normal text-white w-full md:w-3/4 lg:w-2/3">
                            <div> OPTIMUM HOCKEY ACADEMY</div>
                            <div className="text-[64px] text-red-text font-bold leading-normal" >
                                FAQ
                            </div>
                            <div className="mr-10">
                                <div className="text-[15px] text-black font-bold leading-normal pt-9">What is Optimum Hockey Academy?</div>
                                <div className="text-[15px] text-black font-normal leading-normal">
                                    Optimum Hockey Academy offers a comprehensive program that integrates academic education with daily on-ice skill development and strength and conditioning training. Located at the state-of-the-art Great Park Ice Facility, our academy provides athletes with the resources and support needed to excel both academically and athletically, fostering their overall development in a high-performance environment.
                                </div>
                                <div className="text-[15px] text-black font-bold leading-normal pt-5">Is Optimum Hockey Academy Co-Ed?</div>
                                <div className="text-[15px] text-black font-normal leading-normal">
                                    Optimum Hockey Academy proudly welcomes both male and female athletes who are committed to elevating their hockey skills. Our academy provides a dynamic environment led by experienced coaches, offering high-performance training programs designed to foster both athletic and academic development. We are dedicated to supporting each athlete's growth, ensuring a comprehensive approach to their success on and off the ice.
                                </div>
                                <div className="text-[15px] text-black font-bold leading-normal pt-5">When does the Academy start and end?</div>
                                <div className="text-[15px] text-black font-normal leading-normal">
                                    The Academy will start in early September and end in early June. Holidays and breaks will be consistent with a typical public or private school. The program is designed to offer flexibility to families and their schedule’s, students will be at the academy Monday through Thursday for the school year.
                                </div>
                                <div className="text-[15px] text-black font-bold leading-normal pt-5">What does a typical day look like for a student?</div>
                                <div className="text-[15px] text-black font-normal leading-normal"> Daily Schedule (subject to change) </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 8:45 am Drop Off </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 9:00 am – 10:30 am Class Room </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 10:45 am – 11:45 am *Strength & Conditioning </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 12:00 pm – 12:40 pm Lunch </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 1:00 pm – 2:15 pm On Ice Skill Development </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 2:30 pm – 4:00 pm Class Room </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> 4:10 pm Pick Up </div>
                                <div className="text-[15px] text-black font-normal leading-normal"> *Strength & Conditioning will be 2 -3 times per week, on the off days students will participate in seminars and field activities at the Great Park. </div>
                                <div className="text-[15px] text-black font-bold leading-normal pt-5">What are the requirements to attend Optimum Hockey Academy?</div>
                                <div className="text-[15px] text-black font-normal leading-normal">
                                    The Academy is open to players from ALL clubs, students must be in Grade 4 - 12.
                                </div>
                                <div className="text-[15px] text-black font-bold leading-normal pt-5">Are there teams at the Academy?</div>
                                <div className="text-[15px] text-black font-normal leading-normal">
                                    No, the Academy is designed to enhance individual skills and the on-ice curriculum will be skill based.
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default FaqBanner;
