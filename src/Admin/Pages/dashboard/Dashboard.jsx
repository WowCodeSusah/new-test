import React from 'react';
import './Dashboard.scss';
import SideBar from '../../Components/sidebar/SideBar.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Widget from '../../Components/widget/Widget.jsx';
import WelcomeWidget from '../../Components/widget/Welcomewidget.jsx';
import Chart from '../../Components/charts/LineChart.jsx';
import NotificationWidget from '../../Components/widget/NotificationWidget.jsx';
import { useSpring, animated } from '@react-spring/web';

function Dashboard({ togglePage, pages }) {
  // Spring animation for the widgets
  const welcomeWidgetSpring = useSpring({ config: {tension: 170, friction: 35}, from: { x: -500, opacity: 0 }, to: { x: 0, opacity: 1 }});
  const widgetSpring = useSpring({ config: {tension: 170, friction: 35}, from: { x: 500, opacity: 0 }, to: { x: 0, opacity: 1 }});
  const chartSpring = useSpring({ config: {tension: 170, friction: 35}, from: { y: 500, opacity: 0 }, to: { y: 0, opacity: 1 }});

  return (
    <div className="dashboardPage-admin">
      <SideBar togglePage={togglePage} pages={pages} />
      <div className="fixdash"></div>
      <div className="dashboardContent-admin">
        <Navbar togglePage={togglePage} pages={pages} />
        <animated.div style={welcomeWidgetSpring} className="welcomeWidgetContainer-admin">
          <WelcomeWidget />
        </animated.div>
        <animated.div style={widgetSpring} className="widgetsContainer-admin">
          <div className='widgetOnClick' onClick={() => togglePage(0,5)}>
            <Widget type="PendAccount"/>
          </div>
          <div className='widgetOnClick' onClick={() => togglePage(0,2)}>
            <Widget type="ActiveAccount" />
          </div>
          <div className='widgetOnClick' onClick={() => togglePage(0,1)}>
            <Widget type="ActiveCentra" />
          </div>
        </animated.div>
        <div className="chartsAndNotificationContainer-admin">
          <div className="chartAndNotificationWrapper-admin">
            <animated.div style={chartSpring} className="chartWrapper-admin">
              <Chart />
            </animated.div>
            <animated.div style={chartSpring} className="notificationWrapper-admin">
              <NotificationWidget />
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
