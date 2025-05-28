"use client";
import { useEffect, useState } from "react";
import { FaThumbsUp, FaUserFriends, FaRegSmile } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { BsCalendar3 } from "react-icons/bs";
import './StatsSections.css';

const stats = [
  { icon: <FaThumbsUp />, value: 99, suffix: "%", label: "Client Satisfaction" },
  { icon: <GiRibbonMedal />, value: 1200, label: "Claims Processed Monthly" },
  { icon: <FaUserFriends />, value: 40, label: "Expert Team Members" },
  { icon: <BsCalendar3 />, value: 12, label: "Years in Medical Billing" },
  { icon: <FaRegSmile />, value: 3200, label: "Providers Supported" },
];

function useCounterAnimation(endValue, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(endValue / (duration / 30));
    const interval = setInterval(() => {
      start += step;
      if (start >= endValue) {
        clearInterval(interval);
        setCount(endValue);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [endValue, duration]);

  return count;
}

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => {
          const animatedValue = useCounterAnimation(item.value);
          return (
            <div key={index} className="stat-item">
              <div className="icon">{item.icon}</div>
              <h3>
                {animatedValue}
                {item.suffix || ""}
              </h3>
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
