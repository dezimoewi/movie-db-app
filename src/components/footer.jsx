import instagramIcon from "../assets/instagram.png";
import groupIcon from "../assets/Group.png";
import appleStore from "../assets/rectangle-5.png";
import playStore from "../assets/rectangle-4.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-comp">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Careers</p>
          </div>
          <div className="footer-comp">
            <h3>Need Help</h3>
            <p>Visit Help Center?</p>
            <p>Share Feedback</p>
          </div>

          <div className="footer-comp">
            <h3>Veiw Website in</h3>
            <button className="button-one">√ English ⩒</button>
          </div>

          <div className="footer-comp">
            <h3>Social Media</h3>
            <div className="ctn-one">
              <div className="footer-img">
                <img src={instagramIcon} alt="instagram" />
              </div>
              <div className="footer-img">
                <img src={groupIcon} alt="twitter" />
              </div>
            </div>
          </div>

          <div className="footer-comp">
            <h3>Download Our App</h3>
            <div className="ctn">
              <img src={appleStore} alt="apple" />
              <img src={playStore} alt="playstore" /> <br />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©2023 STREAM X. All Rights Reserved.</p>
          <div className="footer-nav">
            <a href="">Terms Of Use</a>
            <a href="">Privacy Policy</a>
            <a href="">FAQ</a>
          </div>

          <div className="bone">
            <h1>
              STREAM<span>X</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
