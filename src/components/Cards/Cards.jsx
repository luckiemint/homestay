import "./cards.css";

const Cards = () => {
  const cardData = [
    { url: "/src/assets/images/lodging.jpg", heading: "Lodging", info: "" },
    { url: "/src/assets/images/fooding.jpg", heading: "Fooding", info: "" },
    {
      url: "/src/assets/images/cab-services.jpg",
      heading: "Cab Services",
      info: "",
    },
  ];
  //   console.log('item.url', item.url)
  return (
    <>
      {cardData.map((item, index) => (
        <div
          className="rect-card"
          key={index}
          style={{ backgroundImage: `url(${item.url})` }}
        >
          <div className="img123"></div>
          <div className="card-heading">
            <h2>{item.heading}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
