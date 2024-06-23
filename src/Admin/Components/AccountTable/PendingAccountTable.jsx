import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import axios from 'axios';
import PendingAccountPopup from '../PopupEditAssest/PendingAccountPopup';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170, align: 'center' },
  { id: 'role', label: 'Role', minWidth: 170, align: 'center' },
  { id: 'email', label: 'Email', minWidth: 170, align: 'center' },
  { id: 'password', label: 'Password', minWidth: 170, align: 'center' },
  { id: 'dateOfBirth', label: 'Birth Date', minWidth: 170, align: 'center' },
  { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

const PendingAccountTable = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 8;
  const [pendingOpen, setPendingOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [pendingAccounts, setPendingAccounts] = useState([]);

  useEffect(() => {
    // Fetch data using Axios
    axios.get('https://test-backend-k9s7.vercel.app/users')
      .then(response => {
        const allUsers = response.data.all_user;
        // Filter pending accounts where pending is true
        const filteredAccounts = allUsers.filter(account => account.pending);
        setPendingAccounts(filteredAccounts);
      })
      .catch(error => {
        console.error('Error fetching accounts:', error);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handlePendingOpen = (account) => {
    setSelectedAccount(account);
    setPendingOpen(true);
  };

  const handlePendingClose = () => {
    setPendingOpen(false);
    setSelectedAccount(null);
  };

  const confirmAccount = (accountDetails) => {
    const url = `http://localhost:8000/users/pending/${accountDetails.idUser}`;

    const data = {
      pending: false  // Set pending to false for acceptance
    };

    axios.put(url, data)
      .then(response => {
        console.log('Account confirmed:', response.data);
        // Refresh pending accounts list
        setPendingAccounts(pendingAccounts.filter(account => account.id !== accountDetails.id));
        handlePendingClose();
      })
      .catch(error => {
        console.error('Error confirming account:', error);
      });
  };

  const rejectAccount = (accountDetails) => {
    const url = `http://localhost:8000/users/pending/${accountDetails.idUser}`;

    const data = {
      pending: false  // You might want to set some other state for rejection
    };

    axios.put(url, data)
      .then(response => {
        console.log('Account rejected:', response.data);
        // Refresh pending accounts list
        setPendingAccounts(pendingAccounts.filter(account => account.id !== accountDetails.id));
        handlePendingClose();
      })
      .catch(error => {
        console.error('Error rejecting account:', error);
      });
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, pendingAccounts.length - page * rowsPerPage);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '16px', maxWidth: '100%' }}>
      <TableContainer sx={{ maxHeight: 'calc(100vh - 150px)', overflowX: 'auto' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ minWidth: column.minWidth, backgroundColor: '#002855', color: 'white', textAlign: 'center' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: '#ebebeb' }}>
            {pendingAccounts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{
                        color: '#002855',
                        fontWeight: 500,
                        fontFamily: 'var(--font-inter)',
                        borderBottom: '1px solid #04315b',
                        textAlign: column.align,
                      }}
                    >
                      {column.id === 'action' ? (
                        <IconButton
                          aria-label="confirm"
                          sx={{
                            color: '#ffffff',
                            backgroundColor: '#ff7c52',
                            borderRadius: '8px',
                            marginRight: '5px',
                            '&:hover': {
                              backgroundColor: '#ff6a3e',
                            },
                          }}
                          onClick={() => handlePendingOpen(row)}
                        >
                          <PriorityHighIcon />
                        </IconButton>
                      ) : (
                        value
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={columns.length} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ backgroundColor: '#ebebeb' }}
        rowsPerPageOptions={[8]}
        component="div"
        count={pendingAccounts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
      <PendingAccountPopup
        open={pendingOpen}
        onClose={handlePendingClose}
        accountDetails={selectedAccount}
        onConfirm={confirmAccount}
        onReject={rejectAccount}
      />
    </Paper>
  );
};

export default PendingAccountTable;

