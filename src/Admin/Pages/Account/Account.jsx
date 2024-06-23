import React, { useState, useEffect } from 'react';
import './Account.scss';
import SideBar from "../../Components/sidebar/SideBar.jsx";
import Navbar from '../../Components/Navbar/Navbar.jsx';
import AccountTable from '../../Components/AccountTable/AccountTable.jsx';
import CreateAccountButton from '../../Components/AccountTable/CreateAccountButton.jsx';
import AddAccountPage from '../../Pages/AddAccount/AddAccountPage.jsx';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'; // Import the icon
import axios from 'axios';

function Account({ togglePage, pages, setActiveAccountCount }) {
  const [showAddAccount, setShowAddAccount] = useState(false);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios.get('https://test-backend-k9s7.vercel.app/users')
      .then(response => {
        setAccounts(response.data.all_user);
        // Calculate active accounts count
        const activeCount = response.data.all_user.filter(account => account.isActive).length;
        setActiveAccountCount(activeCount);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [setActiveAccountCount]);

  const handleAddAccount = () => {
    setShowAddAccount(true);
  };

  const handleBack = () => {
    setShowAddAccount(false);
  };

  const handleSaveAccount = (newAccount) => {
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
    setShowAddAccount(false);
    // Update active accounts count after saving new account
    const activeCount = accounts.filter(account => account.isActive).length + 1;
    setActiveAccountCount(activeCount);
  };

  const handlePendingAccount = () => {
    togglePage(0, 5); // Update this function as per your actual toggle logic
  };

  return (
    <div className="accountPage-admin">
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
              <h1 className="accountTitle-admin">Account</h1>
              <div className="accountHeaderButtons">
                <button className="pendingButton" onClick={handlePendingAccount}>
                  <PriorityHighIcon />
                </button>
                <CreateAccountButton onClick={handleAddAccount} />
              </div>
            </div>
            <div className="accountTableWrapper-admin">
              <AccountTable accounts={accounts} setAccounts={setAccounts} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
