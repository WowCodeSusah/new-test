import '../css/LoginPage.css'

// eslint-disable-next-line react/prop-types
function RegisterText({handleClick, status, showText}) {
    return (
        <label className='ClickableText' onClick={() => handleClick(status)}> {showText} </label>
    )
}

export default RegisterText