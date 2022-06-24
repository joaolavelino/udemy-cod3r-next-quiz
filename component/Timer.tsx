import { CountdownCircleTimer } from "../node_modules/react-countdown-circle-timer/lib/index";
import styles from "../styles/Timer.module.scss";

interface TimerProps {
  duration: number;
  onTimeIsUp: (index: number) => void;
  timerKey: number;
}

export default function Timer(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        key={props.timerKey}
        duration={props.duration}
        size={60}
        strokeWidth={4}
        isPlaying
        onComplete={() => props.onTimeIsUp(-1)}
        colors={["#85b658", "#fbdf55", "#e05c5c"]}
        trailColor={"#6c54d8"}
        colorsTime={[props.duration, props.duration / 2, 0]}
        strokeLinecap={"butt"}
      >
        {({ remainingTime }) => {
          if (remainingTime > 0) return remainingTime;
          else
            return (
              <span className={styles.timeIsUp}>
                Time's
                <br />
                Up!
              </span>
            );
        }}
      </CountdownCircleTimer>
    </div>
  );
}
