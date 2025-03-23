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
                <img src="src/assets/instagram.png" alt="instagram" />
              </div>
              <div className="footer-img">
                <img src="src/assets/Group.png" alt="twitter" />
              </div>
            </div>
          </div>

          <div className="footer-comp">
            <h3>Download Our App</h3>
            <div className="ctn">
              <img src="src/assets/Rectangle 5.png" alt="apple" />
              <img src="src/assets/Rectangle 4 (1).png" alt="playstore" /> <br />
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
