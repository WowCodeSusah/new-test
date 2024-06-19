import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './CreateAccountButton.scss';

const CreateCentraButton = ({ onClick }) => {
  return (
    <Button
      variant="outlined"
      className="createCentraButton-admin"
      onClick={onClick}
      startIcon={<AddOutlinedIcon />}
    >
      Add Centra
    </Button>
  );
};

export default CreateCentraButton;
