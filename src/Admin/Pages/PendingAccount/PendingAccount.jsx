import React, { useState } from 'react';
import './PendingAccount.scss';
import SideBar from "../../Components/sidebar/SideBar.jsx";
import Navbar from '../../Components/Navbar/Navbar.jsx';
import PendingAccountTable from '../../Components/AccountTable/PendingAccountTable.jsx';
import AddAccountPage from '../../Pages/AddAccount/AddAccountPage.jsx';
import { useSpring, animated } from '@react-spring/web';

function PendingAccount({ togglePage, pages, mainAccounts, setMainAccounts }) {
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [pendingAccounts, setPendingAccounts] = useState([
    { id: 'P201', name: 'Alice Brown', email: 'alicebrown@centra.com', password: 'xxxxxxxxx', birthDate: '02/10/1985', role: 'Pending' },
    { id: 'P202', name: 'Bob Johnson', email: 'bobjohnson@centra.com', password: 'xxxxxxxxx', birthDate: '08/25/1992', role: 'Pending' },
    // ... (other initial rows)
  ]);

  const handleAddAccount = () => {
    setShowAddAccount(true);
  };

  const handleBack = () => {
    setShowAddAccount(false);
  };

  const handleSaveAccount = (newAccount) => {
    setPendingAccounts((prevAccounts) => [...prevAccounts, newAccount]);
    setShowAddAccount(false);
  };

  const confirmAccount = (account) => {
    setPendingAccounts((prevPending) => prevPending.filter((acc) => acc.id !== account.id));
    setMainAccounts((prevMain) => [...prevMain, { ...account, role: 'User' }]);
  };

  const widgetSpring = useSpring({ config: { tension: 170, friction: 30 }, from: { x: 500, opacity: 0 }, to: { x: 0, opacity: 1 } });
  const TitletSpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 200 });

  return (
    <div className="accountPage-admin">
      <SideBar togglePage={togglePage}/>
      <SideBar togglePage={togglePage} />
      <div className="fixdash"></div>
      <div className="accountContent-admin">
        <Navbar togglePage={togglePage} />
        {showAddAccount ? (
          <div className="editAccountContainer-admin">
            <AddAccountPage onBack={handleBack} onSaveAccount={handleSaveAccount} />
          </div>
        ) : (
          <div className="accountTableContainer-admin">
            <div className="accountHeader-admin">
              <animated.div style={TitletSpring}>
                <h1 className="accountTitle-admin">Pending Accounts</h1>
              </animated.div>
            </div>
            <animated.div style={widgetSpring} className="accountTableWrapper-admin">
              <PendingAccountTable pendingAccounts={pendingAccounts} setPendingAccounts={setPendingAccounts} confirmAccount={confirmAccount} />
            </animated.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PendingAccount;
