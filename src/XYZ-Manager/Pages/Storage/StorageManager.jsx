import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditAccountManager from '../../Components/PopUpManager/EditAccountManager';
import DeleteAccountManager from '../../Components/PopUpManager/DeleteAccountManager';

const columns = [
  { id: 'idShipment', label: 'Shipping ID', minWidth: 170, align: 'center' },
  { id: 'provider', label: 'Provider', minWidth: 170, align: 'center' },
  { id: 'weight', label: 'Weight', minWidth: 170, align: 'center' },
  { id: 'arrival', label: 'Date Received', minWidth: 170, align: 'center' },
  { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

export default function StorageManager({ togglePage, pages }) {
  const [page, setPage] = useState(0);
  const rowsPerPage = 8;
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('https://test-backend-k9s7.vercel.app/storages') // Replace with your API endpoint
      .then(response => {
        if (Array.isArray(response.data.all_storage)) {
          setRows(response.data.all_storage);
        } else {
          console.error('API response is not an array:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleEditOpen = (account) => {
    setSelectedAccount(account);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleDeleteOpen = (account) => {
    setSelectedAccount(account);
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleSaveAccount = (updatedAccount) => {
    console.log('Saving:', updatedAccount);
    axios.put(`http://localhost:8000/storages/put/${updatedAccount.idShipment}`, { weight: updatedAccount.weight })
      .then(response => {
        const updatedRows = rows.map((row) =>
          row.idShipment === updatedAccount.idShipment ? updatedAccount : row
        );
        setRows(updatedRows);
        handleEditClose();
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  const handleDeleteAccount = () => {
    axios.delete(`http://localhost:8000/storages/${selectedAccount.idShipment}`)
      .then(response => {
        const updatedRows = rows.filter((row) => row.idShipment !== selectedAccount.idShipment);
        setRows(updatedRows);
        handleDeleteClose();
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
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
                            aria-label="edit"
                            sx={{
                              color: '#ffffff',
                              backgroundColor: '#ff7c52',
                              borderRadius: '8px',
                              marginRight: '5px',
                              '&:hover': {
                                backgroundColor: '#ff6a3e',
                              },
                            }}
                            onClick={() => handleEditOpen(row)}
                          >
                            <EditOutlinedIcon />
                          </IconButton>
                          <IconButton
                            aria-label="delete"
                            sx={{
                              color: '#ffffff',
                              backgroundColor: '#ff7c52',
                              borderRadius: '8px',
                              '&:hover': {
                                backgroundColor: '#ff6a3e',
                              },
                            }}
                            onClick={() => handleDeleteOpen(row)}
                          >
                            <DeleteOutlineIcon />
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
        rowsPerPageOptions={[8]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
      <EditAccountManager
        open={editOpen}
        onClose={handleEditClose}
        accountDetails={selectedAccount}
        onSave={handleSaveAccount}
      />
      <DeleteAccountManager
        open={deleteOpen}
        onClose={handleDeleteClose}
        onDelete={handleDeleteAccount}
      />
    </Paper>
  );
}
