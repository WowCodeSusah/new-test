import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './CreateAccountButton.scss';

const CreateAccountButton = ({ onClick }) => {
  return (
    <Button
      variant="outlined"
      className="createAccountButton-admin"
      onClick={onClick}
      startIcon={<AddOutlinedIcon />}
    >
      Add Account
    </Button>
  );
};

export default CreateAccountButton;
