import { useEffect, useState } from "react"
import "./Timer.css"

export const Timer = ({onTimeUp, reset}) => {

  // Timer!!
  const [time, setTime] = useState(60)
  useEffect(() => {
    setTime(60)
  }, [reset])

  useEffect(() => {
    if (time >= 0) {
      const timer = setTimeout(() => setTime(prevTime => prevTime - 1), 1000)
      return () => clearTimeout(timer);
    }else{
      onTimeUp();
    }
  }, [time])

  // Formateamos en 2 cifras
  const formattedTime = time.toString().padStart(2, '0');

  return (
    <>
      <div className="cronometro">
        <div className="content">
          <div className="info-timer">00:{formattedTime}</div>
          <div className="progressbar"
          style={{
            width: `${time * 100/60}%`,
            transition: "width 1s linear"
          }}
          ></div>
          <div className="info-timer"><img src="/icons/timer.svg" alt="timer" /></div>
        </div>
      </div>
    </>
  )
}
