export function CartWidget() {
  return (
    <button className="btn btn-outline-light position-relative">
      🛒
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
      </span>
    </button>
  )
}

export default CartWidget;
