import PropTypes from 'prop-types'

const Button = ({ text }) => {
  return (
    <button className={`bg-white hover:bg-[#d8d8d8] text-black w-56 md:w-36 py-[14px] px-3 text-sm   `}>{text}</button>
  )
};

Button.propTypes = {
  text: PropTypes.string
};

export default Button