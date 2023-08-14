import './Button.css'

function Button({ onClick, children, title, disabled = false }) {
  return (
    <button onClick={onClick} title={title} disabled={disabled}>
      {children}
    </button>
  )
}
export default Button
