import React, { useState } from "react";

interface CardDetail {
  id: number;
  img: string;
  heading: string;
  para: string;
}

const Card: React.FC<CardDetail> = ({ img, heading, para }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "300px",
        height: "400px",
        perspective: "1000px",
        marginBottom: "20px",
      }}
    >
      <div
        className="card-inner"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          transform: isHovered ? "rotateY(180deg)" : "rotateY(0)",
        }}
      >
        <div
          className="card-front"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <img
            src={img}
            alt={heading}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px 15px 0 0",
            }}
          />
          <div style={{ padding: "20px" }}>
            <h2 style={{ margin: "0", fontSize: "20px" }}>{heading}</h2>
          </div>
        </div>
        <div
          className="card-back"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            backgroundColor: "#0d0b4e",
            color: "white",
            transform: "rotateY(180deg)",
            borderRadius: "15px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{ margin: "0", fontSize: "17px" }}>{para}</p>
        </div>
      </div>
    </div>
  );
};

const MyCard: React.FC = () => {
  const CardDetails: CardDetail[] = [
    {
      id: 1,
      img: "https://i.pinimg.com/enabled_hi/564x/9b/74/f9/9b74f92c9c4af73d79f34962ad4efbb6.jpg",
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
      para: "Simply export and publish your meticulously crafted posts, tailored to meet each social media's standards and format.",
    },
  ];

  return (
    <div className="flex mt-4 flex-wrap justify-center gap-[20px] padding-[20px]">
      {CardDetails.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default MyCard;
