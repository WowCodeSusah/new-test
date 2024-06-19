import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingAccountPopup from '../PopupEditAssest/PendingAccountPopup';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170, align: 'center' },
  { id: 'role', label: 'Role', minWidth: 170, align: 'center' },
  { id: 'email', label: 'Email', minWidth: 170, align: 'center' },
  { id: 'password', label: 'Password', minWidth: 170, align: 'center' },
  { id: 'birthDate', label: 'Birth Date', minWidth: 170, align: 'center' },
  { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

const PendingAccountTable = ({ pendingAccounts }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 8;
  const [pendingOpen, setPendingOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handlePendingOpen = (account) => {
    setSelectedAccount(account);
    setPendingOpen(true);
  };

  const handlePendingClose = () => {
    setPendingOpen(false);
  };

  const confirmAccount = (account) => {
    // Implement your confirm logic here, for example:
    console.log(`Confirming account: ${account.name}`);
    // Handle further actions such as removing from pending list
    handlePendingClose();
  };

  const rejectAccount = (account) => {
    // Implement your reject logic here, for example:
    console.log(`Rejecting account: ${account.name}`);
    // Handle further actions such as removing from pending list
    handlePendingClose();
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
                        <>
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
                        </>
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
        rowsPerPageOptions={[10]}
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
        onConfirm={(account) => {
          confirmAccount(account);
        }}
        onReject={(account) => {
          rejectAccount(account);
        }}
      />
    </Paper>
  );
};

export default PendingAccountTable; 
