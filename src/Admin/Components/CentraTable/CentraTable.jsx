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
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditCentraPopup from '../PopupEditAssest/EditCentraPopup';
import DeleteAccountPopup from '../PopupEditAssest/DeleteAccountPopup';

const columns = [
  { id: 'idCentra', label: 'ID', minWidth: 170, align: 'center' },
  { id: 'manager', label: 'Manager', minWidth: 170, align: 'center' },
  { id: 'phone', label: 'Phone', minWidth: 170, align: 'center' },
  { id: 'location', label: 'Location', minWidth: 170, align: 'center' },
  { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

export default function CentraTable({ centraData }) {
  const [page, setPage] = useState(0);
  const rowsPerPage = 8;
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedCentra, setSelectedCentra] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleEditOpen = (centra) => {
    setSelectedCentra(centra);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleDeleteOpen = (centra) => {
    setSelectedCentra(centra);
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleSaveCentra = (updatedCentra) => {
    console.log('Updated centra details:', updatedCentra);
    // Handle saving updatedCentra to backend if needed
    handleEditClose();
  };

  const handleDeleteCentra = () => {
    console.log('Deleting centra:', selectedCentra);
    // Handle deleting centra from backend if needed
    setDeleteOpen(false);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, centraData.length - page * rowsPerPage);

  return (
    <Paper sx={{ marginBottom: '1.5rem', width: '100%', overflow: 'hidden', borderRadius: '16px' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ height: '2rem', minWidth: column.minWidth, backgroundColor: '#002855', color: 'white', textAlign: 'center' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: '#ebebeb' }}>
            {centraData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((centra, rowIndex) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                {columns.map((column) => {
                  const value = centra[column.id];
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      padding='none'
                      sx={{
                        color: '#002855',
                        fontWeight: 500,
                        fontFamily: 'var(--font-inter)',
                        borderBottom: '1px solid #04315b',
                        textAlign: column.align,
                        height: '3rem',
                      }}
                    >
                      {column.id === 'action' ? (
                        <>
                          <IconButton
                            aria-label="edit"
                            sx={{
                              objectFit: 'contain',
                              width: '1.5rem',
                              height: '1.5rem',
                              color: '#ffffff',
                              backgroundColor: '#ff7c52',
                              borderRadius: '0.5rem',
                              marginRight: '5px',
                              '&:hover': {
                                backgroundColor: '#ff6a3e',
                              },
                            }}
                            onClick={() => handleEditOpen(centra)}
                          >
                            <EditOutlinedIcon />
                          </IconButton>
                          <IconButton
                            aria-label="delete"
                            sx={{
                              objectFit: 'contain',
                              width: '1.5rem',
                              height: '1.5rem',
                              color: '#ffffff',
                              backgroundColor: '#ff7c52',
                              borderRadius: '0.5rem',
                              '&:hover': {
                                backgroundColor: '#ff6a3e',
                              },
                            }}
                            onClick={() => handleDeleteOpen(centra)}
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
        count={centraData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
      {/* Edit popup */}
      <EditCentraPopup
        open={editOpen}
        onClose={handleEditClose}
        centraDetails={selectedCentra}
        onSave={handleSaveCentra}
      />
      {/* Delete popup */}
      <DeleteAccountPopup
        open={deleteOpen}
        onClose={handleDeleteClose}
        onDelete={handleDeleteCentra}
      />
    </Paper>
  );
}
