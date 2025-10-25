import olma from "./hero.module.css";
import worker from "../assets/worker.svg";
export default function Hero() {
  return (
    <section className={`${olma.hero} ${olma.container}`}>
      <div className={olma.heroText}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <a href="#" className={olma.btnCta}>
          Get Started
        </a>
      </div>

      <div className={olma.heroImage}>
        <img src={worker} alt="Working illustration" />
      </div>
    </section>
  );
}
