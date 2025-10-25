import style from "./footer.module.css";
import shortly from "../assets/shortly.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import pinterest from "../assets/penterest.svg";
import instagram from "../assets/instagram.svg";

export default function Footer() {
  return (
    <footer className={style.footerWrap}>
      <div className={`container ${style.footer}`}>
        <div className={style.footerLogo}>
          <img src={shortly} alt="Shortly" />
        </div>

        <div className={style.footerLinks}>
          <div>
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.footerSocials}>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#">
            <img src={pinterest} alt="Pinterest" />
          </a>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}
