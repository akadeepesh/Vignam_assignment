import React from "react";
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";

const MyCard: React.FC = () => {
  const CardDetails = [
    {
      id: 1,
      img: "https://i.pinimg.com/564x/f8/59/13/f8591349a43faf57186a814f87f8d83a.jpg",
      heading: "Copy tweet's link",
      para: "On X/Twitter, click the share icon at the bottom-right of the tweet and select 'Copy Link.' Then, paste the link into the box above.",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/4d/3a/b5/4d3ab5f620c36be5cfd744558030bf8b.jpg",
      heading: "Customize Design",
      para: "Choose social media sizes, adjust the style, set the border radius, and customise the design to your liking and preferred branding—all with a single click.",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/17/bc/25/17bc2561895cdba2311cd15bab9c51a9.jpg",
      heading: "Export!",
      para: "Simply export and publish your meticulously crafted posts, tailored to meet each social media’s standards and format.",
    },
  ];

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "25px",
        padding: "20px",
        flexWrap: "wrap",
      }}
    >
      {CardDetails.map((card) => (
        <AnimatedCard
          key={card.id}
          cursorPointer={true}
          shineStrength={0.75}
          style={{
            width: "300px",
            height: "400px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Image Section */}
          <div
            className="h-[50%] relative overflow-hidden"
            style={{ borderRadius: "15px 15px 0 0" }}
          >
            <img
              className="w-full h-full object-cover"
              src={card.img}
              alt={card.heading}
              style={{ borderRadius: "15px 15px 0 0" }}
            />
          </div>

          {/* Content Section */}
          <div className="p-[20px] h-[50%] bg-[#0d0b4e] text-white flex flex-col justify-between">
            <div>
              <h2 style={{ margin: "0", fontSize: "20px" }}>{card.heading}</h2>
              <p style={{ margin: "10px 0", fontSize: "14px", opacity: 0.7 }}>
                {card.para}
              </p>
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  );
};

export default MyCard;
