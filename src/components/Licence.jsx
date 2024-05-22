import React from "react";
import Header from "./Header";
//import Inputbar from "./inputbar";
//import { Link } from "react-router-dom";

const Licence = () => {
  const handleScrollOnTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="containerh">
        <Header />
        <div className="lic-search"></div>
      </div>
      <div className="licence-main">
        <div>
          <button className="buttonmain">About US</button>
          <button className="buttonmain1">Licence</button>
          <button className="buttonmain">FAQ</button>
        </div>
        <div>
          <h1 className="licencehead">Legal Simplicity</h1>
          <p className="licencesubhead">
            All photos and videos on Pexels can be <br /> downloaded and used
            for free.
          </p>
        </div>
        <div className="lic-cards">
          <h1 className="lic-allowed">What is allowed? 👌</h1>
          <p className="lic-card">
            ✔ All photos and videos on Pexels are free to use. Enjoy the
            content.
          </p>

          <p className="lic-card">
            ✔ Attribution is not required. Giving credit to the photographer or
            Pexels is not necessary but always appreciated.
          </p>
          <p className="lic-card">
            ✔ You can modify the photos and videos from Pexels. Be creative and
            edit them as you like.
          </p>
        </div>
        <div className="lic-cards licna-cards">
          <h1 className="lic-allowed">What is not allowed? 👎</h1>
          <p className="lic-card">
            ✘ Identifiable people may not appear in a bad light or in a way that
            is offensive.
          </p>
          <p className="lic-card">
            ✘ Don't sell unaltered copies of a photo or video, e.g. as a poster,
            print or on a physical product without modifying it first.
          </p>
          <p className="lic-card">
            ✘ Don't imply endorsement of your product by people or brands on the
            imagery.
          </p>
          <p className="lic-card">
            ✘ Don't redistribute or sell the photos and videos on other stock
            photo or wallpaper platforms.
          </p>
        </div>
        <div className="lic-story">
          <h1 className="lic-Shead">Tell your story with imagery</h1>
          <p className="lic-Sintro">
            Some of the use cases for which you can use <br /> photos and videos
            from Pexels.
          </p>
          <div className="lic-imgsection">
            <div className="lic-imgsec1">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/635/311/686/house-modern-luxury-architecture-mansions-hd-wallpaper-preview.jpg"
                alt="image_"
              />
              <div className="lic-imgdetails">
                <h1>On your website, blog or app</h1>
                <p>
                  Use the photos and videos online – whether it’s <br /> a
                  website, e-commerce shop, newsletter, e-book, <br />{" "}
                  presentation, blog or a template you sell.
                </p>
              </div>
            </div>
            <div className="lic-imgsec2">
              <div className="lic-imgdetail2">
                <h1>Promote your product</h1>
                <p>
                  Use the photos and videos online – whether it’s <br /> a
                  website, e-commerce shop, newsletter, e-book, <br />{" "}
                  presentation, blog or a template you sell.
                </p>
              </div>
              <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                alt="image_"
              />
            </div>
            <div className="lic-imgsec1">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/635/311/686/house-modern-luxury-architecture-mansions-hd-wallpaper-preview.jpg"
                alt="image_"
              />
              <div className="lic-imgdetails">
                <h1>On your website, blog or app</h1>
                <p>
                  Use the photos and videos online – whether it’s <br /> a
                  website, e-commerce shop, newsletter, e-book, <br />{" "}
                  presentation, blog or a template you sell.
                </p>
              </div>
            </div>
            <div className="lic-imgsec2">
              <div className="lic-imgdetail2">
                <h1>Promote your product</h1>
                <p>
                  Use the photos and videos online – whether it’s <br /> a
                  website, e-commerce shop, newsletter, e-book, <br />{" "}
                  presentation, blog or a template you sell.
                </p>
              </div>
              <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                alt="image_"
              />
            </div>
          </div>
          <div className="lic-buttons">
            <button className="lic-button1">Upload Your Own Photos</button>
            <button className="button2">Frequently Asked Questions</button>
          </div>
          <div className="onTop-btn">
            <button className="lic-button1" onClick={handleScrollOnTop}>
              ▲
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerdetail">
          <div className="footerpexel">
            <p>© 2023 Pexels</p>
          </div>
          <div className="footerdetail2">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Licence</p>
            <p>Cookies Policy</p>
          </div>
          <div>
            <button className="lic-button1">Contact Us</button>
          </div>
        </div>
        <div>
          <p>
            Made with ❤️ by <span className="footerhero">Umar Ashraf</span>
          </p>
          {/*<p>
            <a href="https://www.linkedin.com/in/meumarashraf/">
              Linkedin - Umar Ashraf
            </a>
  </p>*/}
        </div>
      </div>
    </>
  );
};

export default Licence;
