
import Instagram from "../../assets/images/Insta.png";
import YouTube from "../../assets/images/YouTube.png";
import FaceBook from "../../assets/images/FaceBook.png";
import HomeBannerTest from "../../assets/images/HomeBanner.png";
import MobileHomeBanner1 from "../../assets/images/MobileHomeBanner1.png";
import useWindowSize from "../../hooks/useWindowSize";

function ContactBanner() {
    const { width } = useWindowSize();
    const bannerImage = width < 1024 ? MobileHomeBanner1 : HomeBannerTest;
    return (
        <div
            className="relative min-h-[518px]  md:pt-7 xs:pt-[90px]"  // Set min-height to full screen
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
                    <div className="flex justify-center md:pt-6 xs:pt-[50px] px-[19px]">
                        <div className="flex flex-col  text-white w-full md:w-3/4 lg:w-2/3">
                            
                            </div>
                            <form className="absolute w-[326px] mx-[30px]">
                                <div className="">
                                    <label htmlFor="firstname" className="block text-[14px] font-bold leading-[1.2] text-red-text">First Name</label>
                                    <input type="text" id="fname" className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded  block w-full p-2.5 h-[22px]" placeholder="" required />
                                </div>
                                <div className="">
                                    <label htmlFor="lastname" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4">Last Name</label>
                                    <input type="text" id="lname" className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded  block w-full p-2.5 h-[22px]" required />
                                </div>
                                <div className="">
                                    <label htmlFor="email" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4">Email</label>
                                    <input type="email" id="email" className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded  block w-full p-2.5 h-[22px]"  required />
                                </div>
                                <div className="">
                                    <label htmlFor="phnumber" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4">Phone Number</label>
                                    <input type="number" id="phonenumber" className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded  block w-full p-2.5 h-[22px]"  required />
                                </div>
                                <label htmlFor="topics" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4"> Topic</label>
                                <select id="topics" className="shadow-sm bg-white border border-black text-black text-[12px] leading-[1.2] rounded  block w-full p-2.5 min-h-[22px]">

                                    <option className="text-black ">Apply to Optimum</option>
                                    <option>Apply for HPTP (High Performance Training Program)</option>
                                    <option>Shadow a Player</option>
                                    <option>Question on Academics</option>
                                    <option>Question on Hockey Development</option>
                                    <option>Other</option>
                                </select>
                                <label htmlFor="message" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4">How can we help?</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full h-[105px] text-sm text-black border border-black bg-gray-50 rounded" placeholder="Leave a comment..."></textarea>
                                <div className="flex justify-center pt-7">
                                <button type="submit" className=" bg-red-text font-medium text-[20px] px-5 py-2.5 text-center">Submit</button>
                                </div>
                            </form>
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

                    <div className="flex justify-end  xl:ml-[10%] ">
                        <div className="flex flex-col text-[24px] font-bold leading-[1.2] text-white w-full md:w-3/4 lg:w-2/3">
                            <div> OPTIMUM HOCKEY ACADEMY</div>
                            <div className="text-[64px] text-red-text font-bold leading-[1.2]" >
                                Contact
                            </div>
                        <div className="flex ">

                            <form className="absolute w-[326px] top-[30%]">
                                <div className="">
                                    <label htmlFor="firstname" className="block text-[14px] font-bold leading-[1.2] text-red-text">First Name</label>
                                    <input type="text" id="fname" className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded  block w-full p-2.5 h-[22px]" placeholder="" required />
                                </div>
                                <div className="">
                                    <label htmlFor="lastname" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4">Last Name</label>
                                    <input type="text" id="lname" className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded  block w-full p-2.5 h-[22px]" required />
                                </div>
                                <div className="">
                                    <label htmlFor="email" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4">Email</label>
                                    <input type="email" id="email" className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded  block w-full p-2.5 h-[22px]"  required />
                                </div>
                                <div className="">
                                    <label htmlFor="phnumber" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4">Phone Number</label>
                                    <input type="number" id="phonenumber" className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded  block w-full p-2.5 h-[22px]"  required />
                                </div>
                                <label htmlFor="topics" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4"> Topic</label>
                                <select id="topics" className="shadow-sm bg-white border border-black text-black text-[12px] leading-[1.2] rounded  block w-full p-2.5 min-h-[22px]">

                                    <option className="text-black ">Apply to Optimum</option>
                                    <option>Apply for HPTP (High Performance Training Program)</option>
                                    <option>Shadow a Player</option>
                                    <option>Question on Academics</option>
                                    <option>Question on Hockey Development</option>
                                    <option>Other</option>
                                </select>
                                <label htmlFor="message" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4">How can we help?</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full h-[105px] text-sm text-black border border-black bg-gray-50 rounded" placeholder="Leave a comment..."></textarea>
                                <div className="flex justify-center pt-7">
                                <button type="submit" className=" bg-red-text font-medium text-[20px] px-5 py-2.5 text-center">Submit</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ContactBanner;
