import styles from "../styles/Home.module.scss";
import { useState } from "react";
import Button from "../component/Button";
import Layout from "../component/Layout";
import Image from "next/image";
import logo from "../public/gq-logo.png";
import world from "../public/world.png";

const BASE_URL = "http://localhost:3000";

export default function Home() {
  const [settings, setSettings] = useState({
    gameLength: 10,
    timerDuration: 10,
  });

  function handleChange(e: any) {
    setSettings({
      ...settings,
      [e.target.name]: +e.target.value,
    });
  }

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.bgContainer}>
          <Image
            src={world}
            className={styles.bg}
            layout="intrinsic"
            alt="world"
          />
        </div>
        <section className={styles.content}>
          <div className={styles.logoContainer}>
            <Image
              src={logo}
              alt="logo"
              className={styles.logo}
              layout="intrinsic"
            />
          </div>
          <h2 className={styles.title1}>WELCOME TO GEOQUIZ!</h2>
          <h3 className={styles.title2}>
            How well do you know the world you live in?
          </h3>
          <div className={styles.settings}>
            <div className={styles.field}>
              <label>How many questions?</label>

              <p>
                <input
                  type="range"
                  min={5}
                  max={15}
                  name="gameLength"
                  value={settings.gameLength}
                  onChange={handleChange}
                />
                {settings.gameLength}
              </p>
            </div>
            <div className={styles.field}>
              <label>Set timer</label>

              <p>
                <input
                  type="range"
                  min={5}
                  max={15}
                  name="timerDuration"
                  value={settings.timerDuration}
                  onChange={handleChange}
                />
                {settings.timerDuration}s
              </p>
            </div>
            <Button
              text="Start!"
              href={`${BASE_URL}/quiz/${settings.timerDuration}/${settings.gameLength}`}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
