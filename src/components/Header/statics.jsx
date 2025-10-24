import style from "./statistics.module.css";

export default function Statistics() {
  return (
    <section className={`${style.statistics} container`}>
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
            <img src="./images/trading.svg" alt="Trading" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className={style.card}>
          <div className={style.icon}>
            <img src="./images/skorost-tomchi.svg" alt="Speed" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className={style.card}>
          <div className={style.icon}>
            <img src="./images/ruchka-pencil.svg" alt="Customizable" />
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
