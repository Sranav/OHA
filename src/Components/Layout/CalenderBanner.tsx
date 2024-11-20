import { useEffect, useState } from "react";
import AboutBannerImage from "../../assets/images/HomeBanner.png"; // Importing the banner image
import dateLeft from "../../assets/images/dateLeft.png";
import dateRight from "../../assets/images/dateRight.png";
import Instagram from "../../assets/images/Instgram.png";
import YouTube from "../../assets/images/Youtube.png";
import FaceBook from "../../assets/images/FaceBook.png";
import CalenderTime from "../../assets/images/CalenderTime.png";

function CalendarBanner() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1023);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([
        { date: '2024-09-03', title: 'Meeting with Client', time: '10:00 AM' },
        { date: '2024-09-04', title: 'Team Workshop', time: '2:00 PM' },
        { date: '2024-09-06', title: 'Company Conference', time: '9:00 AM' },
        { date: '2024-10-10', title: 'Webinar on Marketing', time: '1:00 PM' },
        { date: '2024-10-13', title: 'Web on Marketing', time: '2:00 PM' },
        { date: '2024-10-15', title: 'Web hocky Marketing', time: '2:00 PM' },
        { date: '2024-10-12', title: 'Project Review', time: '3:00 PM' },
        { date: '2024-11-15', title: 'test event demo 1', time: '3:00 PM' },
        { date: '2024-11-15', title: 'test event demo 2', time: '4:00 PM' },
        { date: '2024-11-16', title: 'test event demo 3', time: '5:00 PM' },
        { date: '2024-11-18', title: 'test event demo 4', time: '6:00 PM' },
        { date: '2024-11-18', title: 'test event demo 5', time: '7:00 PM' },
    ]); // Sample events array with date, title, and time

    // Listen to window resize events and adjust the screen size state
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

    // Filter events by current month and year
    const filterEventsByMonth = (month: number, year: number) => {
        return events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.getMonth() === month && eventDate.getFullYear() === year;
        });
    };

    // Filtered events for the selected month
    const currentMonthEvents = filterEventsByMonth(currentDate.getMonth(), currentDate.getFullYear());

    // Function to check if today matches any event date
    const isTodayEvent = (date: string | number | Date) => {
        const today = new Date();
        const eventDate = new Date(date);
        return today.toDateString() === eventDate.toDateString();
    };

    // Get abbreviated month (e.g., "Sep" for September)
    const monthAbbreviation = currentDate.toLocaleString('default', { month: 'short' });

    

    return (
        <div
            className="md:pb-[57px] xs:pb-[21px]"
            style={{
                backgroundImage: isLargeScreen ? `url(${AboutBannerImage})` : "none", // Display banner image for large screens
                backgroundSize: isLargeScreen ? "cover" : "none", // Ensure proper image scaling only for large screens
                backgroundPosition: isLargeScreen ? "center" : "none", // Center image for large screens
                backgroundRepeat: "no-repeat", // Prevent the image from repeating
                backgroundColor: isLargeScreen ? "transparent" : "#ffffff", // White background for small screens
            }}
        >
            {isLargeScreen && (
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
            )}
            <div className="flex flex-col gap-[18px] md:pt-[0px] xs:pt-[34px] md:mt-0 xs:mt-20 ">
                <div className="flex justify-center pt-[29px]">
                    <div className="flex flex-col text-[24px] bg-red-text font-bold leading-[1.2] text-white w-full lg:max-w-[582px] xs:max-w-[362px] ">
                        <div className="text-white text-[24px] text-center font-normal leading-[1.2] p-2">
                            CALENDAR OF EVENTS
                        </div>
                    </div>
                </div>

                {/* Calendar Header Outside the Calendar Container */}
                <div className="flex justify-center items-center  lg:gap-7 lg:mr-44">
                    {/* Show "Today" if there's an event for today */}
                    <button
                        className={`text-[13px] font-normal lg:bg-white xs:bg-[#D9D9D9] rounded-full px-5 py-2 text-black hover:text-red-text transition duration-300 ${isTodayEvent(currentDate) ? "text-black" : ""}`}
                        onClick={() => setCurrentDate(new Date())}
                    >
                        Today
                    </button>
                    <button
                        className="text-xl font-semibold  transition duration-300"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                    >
                        <img src={dateLeft} alt="" />
                    </button>
                    <button
                        className="text-xl font-semibold transition duration-300"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                    >
                        <img src={dateRight} alt="" />
                    </button>
                    <span className="text-2xl font-bold text-gray-800">
                        {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                    </span>
                </div>

                {/* Calendar Container */}
                <div className="flex justify-center w-full">
                    <div className="calendar-container min-h-[300px]">
                        {/* Display the abbreviated month name */}

                        <div className="">
                            {currentMonthEvents.length > 0 ? (
                                currentMonthEvents.map((event, index) => (
                                    <div key={index} className="pb-6 flex justify-between items-center">
                                        {/* Left box: Month Abbreviation and Date */}
                                        <div className="flex flex-col items-center pt-4 bg-black min-w-[51px] min-h-[70px]">
                                            <div className="text-[11px] leading-[1.2] font-semibold text-white">
                                                {monthAbbreviation}
                                            </div>
                                            <div className="text-white text-[20px] leading-[1.2]">{new Date(event.date).getDate()}</div> {/* Display only the day */}
                                        </div>

                                        {/* Right box: Event Name and Time */}
                                        <div className="flex flex-col items-start pl-4  bg-[#D9D9D9] md:min-w-[493px] xs:min-w-[323px] lg:min-h-[70px] xs:min-h-[67px]">
                                            <div className="text-red-text text-[12px] leading-[1.2] pt-3">Optimum Hockey Academy</div>
                                            <div className="text-[16px]  font-bold text-black leading-[1.2]">{event.title}</div>
                                            <div className="text-black flex flex-row gap-1 items-center text-[10px] bg-[#B8B6B6] rounded-[9px] p-[3px] max-w-[65px] leading-[1.2]">
                                                <img src={CalenderTime} alt="" className="h-[10px] w-[10px]" />
                                                {event.time}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-500">No events scheduled for this month.</div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarBanner;
