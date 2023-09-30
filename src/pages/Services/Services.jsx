import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./service.css";

const Services = () => {
  return (
    <div className="services">
      <div className="service-banner">
        <Header />
        <div className="service-words">
          <h1>Our Services</h1>
        </div>
      </div>
      <div className="service-body">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
