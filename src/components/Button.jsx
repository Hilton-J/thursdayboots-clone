import PropTypes from 'prop-types'

const Button = ({ text, style }) => {
  return (
    <button className={style}>{text}</button>
  )
};

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
};

export default Button