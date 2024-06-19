import '../css/LoginPage.css'

// eslint-disable-next-line react/prop-types
function TextInput({placeHolder, imgSRC, type}) {
  if (type == "Input") {
    return (
      <div className='TextInputGroup'>
          <img src={imgSRC} alt='Image' className='TextInputImage'></img>
          <input type='text' className='TextInput' required></input>
          <label className='TextInput-Placeholder'>{placeHolder}</label>
      </div>
    )
  } else if (type == "Password") {
    return (
      <div className='TextInputGroup'>
          <img src={imgSRC} alt='Image' className='TextInputImage'></img>
          <input type='password' className='TextInput' required></input>
          <label className='TextInput-Placeholder'>{placeHolder}</label>
      </div>
    )
  } else {
    return (
      <div className='TextInputGroup'>
          <img src={imgSRC} alt='Image' className='TextInputImage'></img>
          <input type='text' className='TextInput' required></input>
          <label className='TextInput-Placeholder'>{placeHolder}</label>
      </div>
    )
  }
}

export default TextInput