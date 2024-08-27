import PropTypes from 'prop-types'

const Button = ({ text }) => {
  return (
    <button className='bg-white text-black min-w-36 py-[14px] px-3 text-sm '>{text}</button>
  )
};

Button.propTypes = {
  text: PropTypes.string
};

export default Button