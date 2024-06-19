import './welcomewidget.scss';

function WelcomeWidget() {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const weekday = currentDate.toLocaleDateString('en-GB', { weekday: 'long' });
  const formattedDate = `${weekday}, ${currentDate.toLocaleDateString('en-GB', options)}`;

  return (
    <div className="welcomeWidget-admin">
      <div className="date-admin">{formattedDate}</div>
      <h1>Welcome John Doe!</h1>
      <p>There are 3 pending Accounts that you must review. Please go to the Account Section so you may handle them.</p>
    </div>
  );
}

export default WelcomeWidget;
