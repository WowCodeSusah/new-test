/* eslint-disable react/prop-types */
import "../css/NotificationCentraManager.css";
import CentraManagerNotificationBlock from "./CentraEmployeeNotificationBlock";
import { useSpring, animated } from "@react-spring/web";

// eslint-disable-next-line react/prop-types
function NotificationCentraManagerPage({ today, yesterday, last7days, later }) {
    var animationNumber = 100;
    const springToday = useSpring({
        config: {
            tension: 190,
            friction: 60,
        },
        from: { y: animationNumber },
        to: { y: 0 },
    });
    const springYesterday = useSpring({
        config: {
            tension: 190,
            friction: 60,
        },
        from: { y: animationNumber + (today.length * 200 + 100) },
        to: { y: 0 },
    });
    const springSeven = useSpring({
        config: {
            tension: 190,
            friction: 60,
        },
        from: {
            y:
                animationNumber +
                (today.length * 200 + 100) +
                (yesterday.length * 200 + 100),
        },
        to: { y: 0 },
    });
    const springLater = useSpring({
        config: {
            tension: 190,
            friction: 60,
        },
        from: {
            y:
                animationNumber +
                (today.length * 200 + 100) +
                (yesterday.length * 200 + 100) +
                (last7days.length * 200 + 100),
        },
        to: { y: 0 },
    });
    return (
        <div className="NotificationPageCentraManagerMainContainer">
            <animated.div style={{ ...springToday }}>Today</animated.div>
            {today.map((date, index) => (
                <div key={index}>
                    <CentraManagerNotificationBlock
                        data={date}
                        animationStart={(animationNumber += index * 200 + 100)}
                    />
                </div>
            ))}
            <animated.div style={{ ...springYesterday, marginTop: "10px" }}>
                Yesterday
            </animated.div>
            {yesterday.map((date, index) => (
                <div key={index}>
                    <CentraManagerNotificationBlock
                        data={date}
                        animationStart={(animationNumber += index * 200 + 100)}
                    />
                </div>
            ))}
            <animated.div style={{ ...springSeven, marginTop: "10px" }}>
                Last 7 Days
            </animated.div>
            {last7days.map((date, index) => (
                <div key={index}>
                    <CentraManagerNotificationBlock
                        data={date}
                        animationStart={(animationNumber += index * 200 + 100)}
                    />
                </div>
            ))}
            <animated.div style={{ ...springLater, marginTop: "10px" }}>
                Later
            </animated.div>
            {later.map((date, index) => (
                <div key={index}>
                    <CentraManagerNotificationBlock
                        data={date}
                        animationStart={(animationNumber += index * 200 + 100)}
                    />
                </div>
            ))}
        </div>
    );
}

export default NotificationCentraManagerPage;
