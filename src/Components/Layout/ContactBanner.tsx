import React, { useState } from "react";
import Instagram from "../../assets/images/Instgram.png";
import YouTube from "../../assets/images/Youtube.png";
import FaceBook from "../../assets/images/FaceBook.png";
import HomeBannerTest from "../../assets/images/HomeBanner.png";
import MobileHomeBanner from "../../assets/images/MobileHomeBanner.png";
import useWindowSize from "../../hooks/useWindowSize";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import swal from "sweetalert";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    topic: string;
    message: string;
};

function ContactBanner() {
    const { width } = useWindowSize();
    const bannerImage = width < 1024 ? MobileHomeBanner : HomeBannerTest;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const onCaptchaChange = (token: string | null) => {
        setCaptchaToken(token);
    };

    const onSubmit = async (data: FormData) => {
        if (!captchaToken) {
            swal({
                title: "Captcha Required",
                text: "Please complete the reCAPTCHA verification.",
                icon: "warning",
                buttons: "OK",
            });
            return;
        }

        try {
            // Simulate API submission (Replace with actual API logic)
            console.log("Form Data Submitted: ", data, "Captcha Token: ", captchaToken);

            // Show success alert
            swal({
                title: "Success!",
                text: "Your message has been sent successfully.",
                icon: "success",
                buttons: "OK",
            });

            reset(); // Reset the form after submission
            setCaptchaToken(null); // Reset captcha token
        } catch (error) {
            console.error("Error submitting form: ", error);

            // Show error alert
            swal({
                title: "Error!",
                text: "Something went wrong. Please try again later.",
                icon: "error",
                buttons: "OK",
            });
        }
    };

    return (
        <div
            className="relative min-h-[518px] md:pt-2 xs:pt-[90px]"
            style={{
                backgroundImage: `url(${bannerImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {width && width < 1024 ? (
                // Mobile version
                <div className="flex justify-center md:pt-6 xs:pt-[70px] px-[19px]">
                    <form
                        className="w-[326px] mx-[30px]"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <label
                                htmlFor="firstname"
                                className="block text-[14px] font-bold leading-[1.2] text-red-text"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                {...register("firstName", {
                                    required: "First Name is required",
                                })}
                                className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded block w-full p-2.5 h-[22px]"
                            />
                            {errors.firstName && (
                                <span className="text-black text-[14px]">
                                    {errors.firstName.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="lastname"
                                className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                {...register("lastName", {
                                    required: "Last Name is required",
                                })}
                                className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded block w-full p-2.5 h-[22px]"
                            />
                            {errors.lastName && (
                                <span className="text-black text-[14px]">
                                    {errors.lastName.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value:
                                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Enter a valid email address",
                                    },
                                })}
                                className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded block w-full p-2.5 h-[22px]"
                            />
                            {errors.email && (
                                <span className="text-black text-[14px]">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="phnumber"
                                className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4"
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phnumber"
                                {...register("phone", {
                                    required: "Phone Number is required",
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message:
                                            "Phone Number must be exactly 10 digits",
                                    },
                                })}
                                className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded block w-full p-2.5 h-[22px]"
                            />
                            {errors.phone && (
                                <span className="text-black text-[14px]">
                                    {errors.phone.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="topics"
                                className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4"
                            >
                                Topic
                            </label>
                            <select
                                id="topics"
                                {...register("topic", {
                                    required: "Please select a topic",
                                })}
                                className="shadow-sm bg-white border border-black text-black text-[12px] leading-[1.2] rounded block w-full p-2.5 min-h-[22px]"
                            >
                                <option value="">-- Select a Topic --</option>
                                <option value="Apply to Optimum">
                                    Apply to Optimum
                                </option>
                                <option value="Apply for HPTP">
                                    Apply for HPTP (High Performance Training
                                    Program)
                                </option>
                                <option value="Shadow a Player">
                                    Shadow a Player
                                </option>
                                <option value="Academics">
                                    Question on Academics
                                </option>
                                <option value="Hockey Development">
                                    Question on Hockey Development
                                </option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.topic && (
                                <span className="text-black text-[14px]">
                                    {errors.topic.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4"
                            >
                                How can we help?
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                {...register("message", {
                                    required: "Message is required",
                                })}
                                className="block p-2.5 w-full h-[105px] text-sm text-black border border-black bg-gray-50 rounded"
                                placeholder="Leave a comment..."
                            ></textarea>
                            {errors.message && (
                                <span className="text-black text-[14px]">
                                    {errors.message.message}
                                </span>
                            )}
                        </div>
                        <div className="flex justify-center pt-[23px]">
                            <ReCAPTCHA
                                sitekey="6LcM3K0UAAAAAMw5ekc4GhxGkZZ2MRluimFcO-HJ" // Replace with your Google reCAPTCHA site key
                                onChange={onCaptchaChange}
                            />
                        </div>
                        <div className="flex justify-center pt-7 pb-10">
                            <button
                                type="submit"
                                className="bg-[#A62413] font-medium text-[20px] px-8 py-[5px] text-center"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                // Desktop version
                <>
                    <div className="absolute left-0 top-[50%] flex flex-col py-2 gap-4 z-10 bg-red-text items-start">
                        <a href=" https://www.instagram.com/optimumhockeyacademy/" target="_blank" rel="noopener noreferrer" className="text-white  hover:text-red-text pl-2 hover:scale-110 transition-transform duration-300">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href="https://www.youtube.com/@optimumhockeyacademy3211" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-text  hover:scale-110 transition-transform duration-300">
                            <img src={YouTube} alt="YouTube" />
                        </a>
                        <a href="https://www.facebook.com/optimumhockeyacademy" target="_blank" rel="noopener noreferrer" className="text-white  hover:text-red-text pl-2.5 hover:scale-110 transition-transform duration-300">
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

                                <form className="absolute w-[326px] top-[30%] " onSubmit={handleSubmit(onSubmit)}>
                                    <div className="">
                                        <label htmlFor="firstname" className="block text-[14px] font-bold leading-[1.2] text-red-text">First Name</label>
                                        <input type="text" id="fname"
                                            {...register("firstName", { required: "First Name is required" })}
                                            className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded  block w-full p-2.5 h-[22px]" placeholder="" />
                                        {errors.firstName && <span className="text-black  text-[14px]">{errors.firstName.message}</span>}
                                    </div>
                                    <div className="">
                                        <label htmlFor="lastname" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4">Last Name</label>
                                        <input type="text" id="lname"
                                            {...register("lastName", { required: "Last Name is required" })}
                                            className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded  block w-full p-2.5 h-[22px]" />
                                        {errors.lastName && <span className="text-black  text-[14px]">{errors.lastName.message}</span>}
                                    </div>
                                    <div className="">
                                        <label htmlFor="email" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4">Email</label>
                                        <input type="email" id="email"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: "Enter a valid email address"
                                                }
                                            })}
                                            className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded  block w-full p-2.5 h-[22px]" />
                                        {errors.email && <span className="text-black  text-[14px]">{errors.email.message}</span>}
                                    </div>
                                    <div className="">
                                        <label htmlFor="phnumber" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4">Phone Number</label>
                                        <input type="number" id="phonenumber"
                                            {...register("phone", {
                                                required: "Phone Number is required",
                                                pattern: {
                                                    value: /^\d{10}$/, // Only allow exactly 10 digits
                                                    message: "Phone Number must be exactly 10 digits"
                                                }
                                            })}
                                            className="shadow-sm bg-white border border-black text-black text-[16px] leading-[1.2] rounded  block w-full p-2.5 h-[22px]" />
                                        {errors.phone && <span className="text-black  text-[14px]">{errors.phone.message}</span>}
                                    </div>
                                    <label htmlFor="topics" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4">Topic</label>
                                    <select
                                        id="topics"
                                        {...register("topic", { required: "Please select a topic" })}
                                        className="shadow-sm bg-white border border-black text-black text-[12px] leading-[1.2] rounded block w-full p-2.5 min-h-[22px]"
                                    >
                                        <option value="">-- Select a Topic --</option> {/* Placeholder with an empty value */}
                                        <option value="Apply to Optimum">Apply to Optimum</option>
                                        <option value="Apply for HPTP">Apply for HPTP (High Performance Training Program)</option>
                                        <option value="Shadow a Player">Shadow a Player</option>
                                        <option value="Academics">Question on Academics</option>
                                        <option value="Hockey Development">Question on Hockey Development</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.topic && <span className="text-black text-[14px]">{errors.topic.message}</span>}

                                    <label htmlFor="message" className="block text-[14px] font-bold leading-[1.2] text-red-text pt-4">How can we help?</label>
                                    <textarea id="message" rows={4}
                                        {...register("message", { required: "Message is required" })}
                                        className="block p-2.5 w-full h-[105px] text-sm text-black border border-black bg-gray-50 rounded" placeholder="Leave a comment..."></textarea>
                                    {errors.message && <span className="text-black  text-[14px]">{errors.message.message}</span>}
                                    <div className="flex justify-center pt-[23px]">
                                        <ReCAPTCHA
                                            sitekey="6LcM3K0UAAAAAMw5ekc4GhxGkZZ2MRluimFcO-HJ" // Replace with your Google reCAPTCHA site key
                                            onChange={onCaptchaChange}
                                        />
                                    </div>
                                    <div className="flex justify-center pt-[39px] pb-7">
                                        <button type="submit" className=" bg-[#A62413] font-medium text-[20px] px-8 py-[5px] text-center">Submit</button>
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
