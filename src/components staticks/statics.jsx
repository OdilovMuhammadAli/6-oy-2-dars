import style from "./statics.module.css";
import trading from "../assets/trading.svg";
import skorost from "../assets/skorost.svg";
import ruchka from "../assets/ruchka.svg";
export default function Statistics() {
  return (
    <section className={`container ${style.statistics}`}>
      <div className={style.statsIntro}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className={style.statsCards}>
        <div className={style.card}>
          <div className={style.icon}>
            <img src={trading} alt="Trading" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className={style.card}>
          <div className={style.icon}>
            <img src={skorost} alt="Speed" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className={style.card}>
          <div className={style.icon}>
            <img src={ruchka} alt="Customizable" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
