import PropTypes from 'prop-types'
import Header from './Header'



const Button = ({color,text,onClick}) => {
  return (
  <button
   onClick={onClick}
   style={{backgroundColor: color}} 
   className='btn'>
      {text}
  </button>
  )   
}


Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
