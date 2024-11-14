import { useState, useEffect } from "react";

// Define the MediaItem interface
interface MediaItem {
  id: string;
  media_type: "IMAGE" | "VIDEO" ; // Include other types as needed
  media_url: string;
}

function InstaLivePhoto() {
  const [media, setMedia] = useState<MediaItem[]>([]); // Use the MediaItem type

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch("https://insta-app1-latest.onrender.com/api/media");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Log the fetched data
        
        // Set media to the data fetched
        setMedia(data);
      } catch (error) {
        console.error("Error fetching media:", error);
      }
    };

    fetchMedia();
  }, []);

  return (
    <div className="p-6 lg:mx-[80px] md:mx-[30px] mx-auto h-auto">
      <div className="flex justify-center items-center h-full flex-wrap gap-[22px]">
        {media.length > 0 ? (
          media.map((item, index) => (
            <div key={index} className="flex items-center flex-col">
              {item.media_type === "IMAGE" ? (
                <img
                  src={item.media_url} // Use media_url here for images
                  alt={`Image ${index + 1}`}
                  className="w-[200px] h-[200px] object-cover"
                />
              ) : item.media_type === "VIDEO" ? (
                <video
                  controls
                  className="w-[200px] h-[200px] object-cover"
                >
                  <source src={item.media_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <p>Unsupported media type</p>
              )}
              
            </div>
          ))
        ) : (
          <p>No media available</p>
        )}
      </div>
    </div>
  );
}

export default InstaLivePhoto;
