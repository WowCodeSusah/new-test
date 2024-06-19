import { Button} from "@mui/material"

// eslint-disable-next-line react/prop-types
function ButtonInputMobile({label, submit}) {
    
    const style = {
        color: '#04315B',
        textTransform: 'none',
        backgroundColor: '#BDD8B0',
        borderRadius: '27px',
        '&:hover': {
            backgroundColor: '#BDD8B0',
        },
    }
    return (
        <Button variant="contained" sx={style} onClick={() => submit()}>{label}</Button>
    )
}
export default ButtonInputMobile