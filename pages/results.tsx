import { useState } from "react";
import Button from "../component/Button";
import Loader from "../component/Loader";
import ProgressBar from "../component/ProgressBar";
import { useRouter } from "../node_modules/next/router";
import styles from "../styles/Results.module.scss";
import CountUp from "react-countup";
import Image from "next/image";
import world from "../public/world.png";
import Layout from "../component/Layout";

export default function Results() {
  const router = useRouter();
  const { length, score } = router.query;
  const percentage: number = (+score / +length) * 100;

  const renderComment = () => {
    if (percentage >= 90) return "You really know the planet you live in!";
    if (percentage >= 75) return "That's some above average knoledge there!";
    if (percentage >= 50)
      return "You know some things about the world! Keep learning!";
    if (percentage >= 25)
      return "You know, some GeographyNow videos and Lingualizer Reels would do you some good!";
    if (percentage >= 10)
      return "C'mon! Let's learn a little more about the world!";
    if (percentage < 10)
      return "At least you know the planet you live on... right? Earth?";
  };

  const [progressBar, setProgressBar] = useState(0);

  const countUp = () => {
    console.log("counterStart");
    setProgressBar(percentage);
  };

  return (
    <Layout>
      <div className={styles.bgContainer}>
        <Image
          src={world}
          className={styles.bg}
          layout="intrinsic"
          alt="world"
        />
      </div>
      <div className={styles.content}>
        <h1>Results</h1>
        {score ? (
          <div className={styles.results}>
            <div className={styles.scores}>
              <div>
                <h3>
                  Right answers: {score}/{length}
                </h3>
                <h3>
                  Final score:{" "}
                  <CountUp
                    end={percentage}
                    onStart={countUp}
                    delay={0.2}
                    duration={0.8}
                  />
                  %
                </h3>
              </div>
              <ProgressBar progress={progressBar} />
            </div>
            <div>
              <h4>{renderComment()}</h4>
            </div>
            <Button text="Try again?" href={"/"} />
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </Layout>
  );
}
