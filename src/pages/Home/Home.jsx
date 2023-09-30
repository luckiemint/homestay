// import React from "react";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* wallpaper */}
      <div className="wallpaper">
        <Header />
        <div className="home-words">
          <h1>Book Perfect Stay For Your Vecation</h1>
        </div>
      </div>
      {/* body */}
      <div className="home-information ">
        <div className="services ">
          <div className="our-services">
            <h1>Our Services</h1>
          </div>
          <div className="grid-c-3">
            <Cards />
          </div>
        </div>
        <div className="about-dorem">
          <h1>Dorem Homestay</h1>
          <div className="grid-c-1a">
            <div className="para">
              {" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
                nullam non nisi est sit. Mollis nunc sed id semper risus in
                hendrerit gravida rutrum. Sit amet luctus venenatis lectus.
                Viverra aliquet eget sit amet. Sed viverra tellus in hac
                habitasse platea dictumst vestibulum rhoncus. Diam donec
                adipiscing tristique risus. Penatibus et magnis dis parturient
                montes nascetur ridiculus mus mauris. Feugiat sed lectus
                vestibulum mattis ullamcorper velit sed ullamcorper. Bibendum
                est ultricies integer quis auctor. Dictum fusce ut placerat
                orci. Facilisis magna etiam tempor orci eu. Eu volutpat odio
                facilisis mauris sit amet. Amet consectetur adipiscing elit duis
                tristique sollicitudin nibh sit amet. Mi eget mauris pharetra
                etultrices neque ornare. Sed sed risus pretium quam vulputate
                dignissim suspendisse. Vestibulum sed arcu non odio euismod
                lacinia at. Tristique senectus et netus et malesuada fames ac
                turpis egestas. Posuere urna nec tincidunt praesent semper
                feugiat nibh sed. Consectetur adipiscing elit ut aliquam purus.
              </p>
              <p>
                Nam at lectus urna duis convallis convallis. Lobortis feugiat
                vivamus at augue. Consectetur lorem donec massa sapien faucibus.
                Maecenas accumsan lacus vel facilisis volutpat est velit.
                Tristique magna sit amet purus. Aliquet enim tortor at auctor
                urna nunc id. Purus ut faucibus pulvinar elementum integer enim
                neque. Dictum fusce ut placerat orci nulla pellentesque
                dignissim enim sit. Nam at lectus urna duis convallis convallis
                tellus.
              </p>
            </div>
            <div className="imgage">
              <img src="/src/assets/images/luke-stackpoole.jpg" />
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
