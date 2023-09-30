import "./servicecard.css";

const ServiceCard = () => {
  return (
    <div className="service-card">
      <div className="room-image">
        <img src="/src/assets/images/christopher-jol.jpg" />
      </div>
      <div className="room-details">
        <h3>Single Room</h3>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </p>
      </div>
      <div className="room-price">
        <h3>Rs. 500/day</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
