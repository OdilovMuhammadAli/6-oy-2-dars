import olma from "./hero.module.css";

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
        <img
          src="./images/illustration-working.svg"
          alt="Working illustration"
        />
      </div>
    </section>
  );
}
