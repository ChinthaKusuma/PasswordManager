import './index.css'

const AddItem = props => {
  const {item, onDelete1, islabel} = props
  const {id, username, website, password} = item
  const onDelete = () => {
    onDelete1(id)
  }
  const name1 = username === '' ? '' : `${username}`
  const pass1 = password === '' ? '' : `${password}`
  return (
    <div>
      {name1 !== '' && pass1 !== '' && (
        <li className="li1">
          <div className="one124">
            <div className="c111">
              <div>
                <p className="para123">{username[0]}</p>
              </div>
            </div>

            <div>
              <p>{website}</p>
              <p>{name1}</p>
              {pass1 !== '' && (
                <div>
                  {islabel === false ? (
                    <p>{pass1}</p>
                  ) : (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                      alt="stars"
                      className="img12345"
                    />
                  )}
                </div>
              )}
            </div>
          </div>

          <div>
            <button
              className="btn55"
              type="button"
              onClick={onDelete}
              data-testid="delete"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                className="img123"
                alt="delete"
              />
            </button>
          </div>
        </li>
      )}
    </div>
  )
}
export default AddItem
