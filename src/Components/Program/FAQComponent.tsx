import { useRef, useState } from "react";
import FaqIcon from '../../assets/images/faqIcon.png';
import FaqMinus from '../../assets/images/FaqMinus.png';
import sheduleImage from "../../assets/images/sampleshedule.png";

interface FAQItem {
  question: string;
  links: { 
    name: string; 
    subLinks?: string[]; 
    subContent?: string[]; 
    time?: string; 
  }[];
  time?: string[]; // Optional, for FAQ that need time
}

const FAQComponent: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setSelected(selected !== index ? index : null);
  };

  const getHeight = (index: number) => {
    const ref = faqRefs.current[index];
    return selected === index && ref ? `${ref.scrollHeight}px` : "0px";
  };

  const faqData: FAQItem[] = [
    {
      question: "Developmental Mission",
      links: [
        { name: "Dedicated Ice (Specific skills coaches)" },
        { name: "Divided by similar age and skill groups" },
        { name: "Small group sessions" },
        { name: "Strength & Conditioning" },
        { name: "Combine Style Testing" },
        { name: "Procode (Gym) Access" },
        { name: "Agility Training" },
        { name: "Yoga and Stretching" },
      ],
    },
    {
      question: "Educational Mission",
      links: [
        { name: "Partner with Epic Charter Schools", subLinks: ["Learning Fund"] },
        { name: "Curriculum", subLinks: ["Gifted & Talented", "Honors Classes", "Advanced Placement"] },
        { name: "Epic Collegiate Academy", subLinks: ["Honors Program"] },
        { name: "Small Teacher Student Ratio" },
        { name: "Dedicated Study Hall Times" },
        { name: "Dedicated Tutoring" },
      ],
    },
    {
      question: "High Performance Training Program (HPTP)",
      links: [
        { name: "After School Options (After 4pm start)" },
        { name: "Flexible Schedules", subLinks: ["Multiple Blocks through the year", "Choose from multiple days throughout the week"] },
        { name: "Divided by age / skill groups", subLinks: ["Small group activities", "Dedicated ice (Not shared with other programs)"] },
      ],
    },
    {
      question: "Sample Schedule",
      links: [
        { name: "Drop off", time: "8:45 am" },
        { name: "Academic Classroom", time: "9:00 am - 10:30 am", subContent: ["Subjects rotate by grade", "day and led by onsite","accredited teachers."] },
        { name: "Strength & Conditioning*", time: "10:45am - 11:45am "},
        { name: "Lunch", time: "12:00pm - 12:40pm"},
        { name: "On-Ice Skill Development ", time: "1:00pm - 2:15pm" },
        { name: "Academic Classroom", time: " 2:30pm - 4:00pm", subContent: ["Subjects rotate by grade", "day and led by onsite","accredited teachers."] },
        { name: "Pick-Up ", time: "4:10pm" },
      ],
    },
  ];

  return (
    <div className="flex xl:min-w-[895px]">
      <div className="w-full">
        <ul className="shadow-box">
          {faqData.map((faq, index) => (
            <li key={index} className="relative border border-[#727272] bg-[#E8E4E4] mb-[26px]">
              <button
                type="button"
                className="w-full py-6 text-left flex items-center justify-between"
                onClick={() => toggle(index)}
              >
                <span className="text-[24px] leading-[1.2] text-black font-normal pl-5">
                  {faq.question}
                </span>
                <img
                  src={selected === index ? FaqMinus : FaqIcon}
                  alt="Faq Icon"
                  className="lg:w-8 lg:h-8 xs:w-6 xs:h-6 mr-[18px]"
                />
              </button>
              <div
                className="relative overflow-hidden transition-all duration-700"
                style={{ maxHeight: getHeight(index) }}
                ref={(el) => (faqRefs.current[index] = el)}
              >
                <div className="xl:px-28 md:px-0 pb-6">
                  {/* Custom layout for Sample Schedule */}
                  {faq.question === "Sample Schedule" ? (
                    <div>
                      {/* Subheading with black background */}
                      <div className="bg-[#545454] text-white py-4 text-center">
                        <div className="text-[24px] font-normal leading-[1.2] uppercase">Sample School Schedule</div>
                      </div>

                      {/* Background image and content */}
                      <div
                        className="bg-cover bg-center p-[40px]"
                        style={{
                          background: `url(${sheduleImage}) lightgray -426.018px 0px / 160.131% 100% no-repeat`,
                        }}
                      >
                        <div className="font-normal text-[24px] text-black lleading-[1.2]">
                          {/* Add Event and Time headers */}
                          <div className="flex justify-between mb-4">
                            <div className="font-bold text-[24px]">Event</div>
                            <div className="font-bold text-[24px]">Time</div>
                          </div>
                          {/* Map through links to show event and time */}
                          {faq.links.map((linkItem, linkIndex) => (
                            <div key={linkIndex} className="flex justify-between items-center mb-4">
                              <div>
                                <div className="text-[24px] leading-[1.2] font-normal">{linkItem.name}</div>
                                {/* If subContent exists, display it */}
                                {linkItem.subContent && (
                                  <div className="text-[24px] leading-[1.2] font-normal text-black mt-2 pl-8">
                                    {linkItem.subContent.map((content, contentIndex) => (
                                      <p key={contentIndex}>{content}</p>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <div>
                                {linkItem.time && (
                                  <div className="text-[18px] leading-normal font-normal">{linkItem.time}</div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ul className=" list-disc pl-8">
                      {faq.links.map((linkItem, linkIndex) => (
                        <li key={linkIndex} className="text-[24px] leading-[1.2] font-normal text-black">
                          {linkItem.name}
                          {linkItem.subLinks && (
                            <ul className="ml-6 list-disc pl-6">
                              {linkItem.subLinks.map((subLink, subLinkIndex) => (
                                <li key={subLinkIndex} className="text-[24px] leading-[1.2] font-normal text-black">
                                  {subLink}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQComponent;
