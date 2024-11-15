import { useEffect, useState } from "react";
import AboutBannerImage from "../../assets/images/HomeBanner.png"; // Importing the banner image
import dateLeft from "../../assets/images/dateLeft.png";
import dateRight from "../../assets/images/dateRight.png";
import Instagram from "../../assets/images/Instgram.png";
import YouTube from "../../assets/images/Youtube.png";
import FaceBook from "../../assets/images/FaceBook.png";

function CalendarBanner() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);
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
    ]); // Sample events array with date, title, and time

    // Listen to window resize events and adjust the screen size state
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1024);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Filter events by current month and year
    const filterEventsByMonth = (month, year) => {
        return events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.getMonth() === month && eventDate.getFullYear() === year;
        });
    };

    // Filtered events for the selected month
    const currentMonthEvents = filterEventsByMonth(currentDate.getMonth(), currentDate.getFullYear());

    // Function to check if today matches any event date
    const isTodayEvent = (date) => {
        const today = new Date();
        const eventDate = new Date(date);
        return today.toDateString() === eventDate.toDateString();
    };

    // Get abbreviated month (e.g., "Sep" for September)
    const monthAbbreviation = currentDate.toLocaleString('default', { month: 'short' });

    return (
        <div
            className="pb-[221px]"
            style={{
                backgroundImage: isLargeScreen ? `url(${AboutBannerImage})` : "none", // Display banner image for large screens
                backgroundSize: "cover", // Ensures the image covers the entire div
                backgroundPosition: "center", // Centers the background image
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
            }}
        >
            <div className="absolute left-0 top-[50%] mt-20 flex flex-col py-2 gap-4 z-10 bg-red-text items-start">
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white  hover:text-red-text pl-2 hover:scale-110 transition-transform duration-300">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-text  hover:scale-110 transition-transform duration-300">
              <img src={YouTube} alt="YouTube" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-white  hover:text-red-text pl-2.5 hover:scale-110 transition-transform duration-300">
              <img src={FaceBook} alt="FaceBook" />
            </a>
          </div>
            <div className="flex flex-col gap-10 md:pt-[50px] xs:pt-[34px] md:mt-0 xs:mt-32">
                <div className="flex justify-center pt-6">
                    <div className="flex flex-col text-[24px] bg-red-text font-bold leading-[1.2] text-white w-full md:w-3/4 lg:w-2/4">
                        <div className="text-white text-[24px] text-center font-bold leading-[1.2] p-2">
                            CALENDAR OF EVENTS
                        </div>
                    </div>
                </div>

                {/* Calendar Header Outside the Calendar Container */}
                <div className="flex justify-center items-center mb-6 px-6">
                    {/* Show "Today" if there's an event for today */}
                    <button
                        className={`text-[13px] font-semibold bg-white rounded-full px-5 py-2 text-black hover:text-red-text transition duration-300 ${isTodayEvent(currentDate) ? "text-black" : ""}`}
                        onClick={() => setCurrentDate(new Date())}
                    >
                        Today
                    </button>
                    <button
                        className="text-xl font-semibold text-blue-500 hover:text-blue-700 transition duration-300"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                    >
                        <img src={dateLeft} alt="" />
                    </button>
                    <button
                        className="text-xl font-semibold text-blue-500 hover:text-blue-700 transition duration-300"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                    >
                        <img src={dateRight} alt="" />
                    </button>
                    <span className="text-2xl font-bold text-gray-800">
                        {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                    </span>
                </div>

                {/* Calendar Container */}
                <div className="flex lg:justify-center xs:justify-start w-full">
                    <div className="calendar-container p-6 mx-4 md:mx-12 mt-8 min-h-[300px]">
                        {/* Display the abbreviated month name */}

                        <div className="mt-4 space-y-6">
                            {currentMonthEvents.length > 0 ? (
                                currentMonthEvents.map((event, index) => (
                                    <div key={index} className="pb-4 flex justify-between items-center">
                                        {/* Left box: Month Abbreviation and Date */}
                                        <div className="flex flex-col items-center p-2 bg-black">
                                            <div className="text-xl font-semibold text-white">
                                                {monthAbbreviation}
                                            </div>
                                            <div className="text-white">{new Date(event.date).getDate()}</div> {/* Display only the day */}
                                        </div>

                                        {/* Right box: Event Name and Time */}
                                        <div className="flex flex-col items-start pl-4  bg-[#D9D9D9] lg:min-w-[493px] min-h-[70px]">
                                            <div className="text-red-text">Optimum Hockey Academy</div>
                                            <div className="text-lg font-semibold text-gray-700">{event.title}</div>
                                            <div className="text-gray-400">{event.time}</div>
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
