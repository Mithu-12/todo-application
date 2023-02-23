import PropTypes, { bool } from 'prop-types';

export default function Button({ onClick, disabled, text, customStyle }) {
  const disabledStyle = {
    background: 'gray',
    color: 'black',
    cursor: 'default',
  };
  const style = {
    background: '#ddd',
    color: '#212121',
    borderRadius: '0.05rem',
    border: 'none',
    ...customStyle,
    ...(disabled ? disabledStyle : {}),
  };
console.log(style)
  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: bool,
  text: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
};

Button.defaultProps = {
    customStyle: {},
    disable: false
}
