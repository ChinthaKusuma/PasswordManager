import {Component} from 'react'
import {v4} from 'uuid'
import AddItem from '../AddItem'

import './index.css'

class PasswordForm extends Component {
  state = {
    list1: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    islabel: true,
    count: 0,
  }

  //   addUser=()=>{

  //   }

  onWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  addItem = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const addUser = {
      id: v4(),
      website,
      username,
      password,
    }
    if (password !== '' && password !== ' ') {
      this.setState(prevState => ({
        list1: [...prevState.list1, addUser],
        username: '',
        password: '',
        website: '',
        count: prevState.count + 1,
      }))
    }
  }

  onDelete1 = id => {
    this.setState(prevState => ({
      list1: prevState.list1.filter(each => each.id !== id),
      count: prevState.count - 1,
    }))
  }

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  label = () => {
    this.setState(prevState => ({
      islabel: !prevState.islabel,
    }))
  }

  password1 = () => {
    const {list1, searchInput, islabel} = this.state
    const list2 = list1.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (list2.length === 0) {
      return (
        <div className="no">
          {/* <form className="one111">
            <input type="checkbox" id="one" onChange={this.label} />
            <label htmlFor="one">Show passwords</label>
          </form> */}
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            className="img1234"
            alt="no passwords"
          />
          <p className="Three">No Passwords</p>
        </div>
      )
    }

    return (
      <div>
        {/* <form className="one111">
          <input type="checkbox" id="one" onChange={this.label} />
          <label htmlFor="one">Show passwords</label>
        </form> */}
        <ul>
          {list2.map(each => (
            <AddItem
              item={each}
              key={each.id}
              onDelete1={this.onDelete1}
              islabel={islabel}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {searchInput, username, website, password, count} = this.state
    return (
      <div className="bgContainer">
        <div className="Container1">
          <div className="one">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
              className="img1"
              alt="app logo"
            />
          </div>
          <div className="form_container">
            <div className="c1">
              <form className="oneTwo" onSubmit={this.addItem} id="one">
                <h1 className="heading">Add New Password</h1>

                <div className="c11">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    className="img2"
                    alt="website"
                  />
                  <input
                    type="text"
                    placeholder="Enter website"
                    className="input1"
                    onChange={this.onWebsite}
                    value={website}
                  />
                </div>
                <div className="c11">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    className="img2"
                    alt="username"
                  />
                  <input
                    type="text"
                    placeholder="Enter username"
                    className="input1"
                    onChange={this.onUsername}
                    value={username}
                  />
                </div>
                <div className="c11">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    className="img2"
                    alt="password"
                  />
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="input1"
                    onChange={this.onPassword}
                    value={password}
                  />
                </div>
                <button className="btn15" type="submit">
                  Add
                </button>
              </form>
              <div className="oneOne">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                  alt="password manager"
                  className="img3"
                />
              </div>
            </div>
          </div>
          <div className="password-container">
            <div className="one12">
              <div className="one13">
                <h1 className="heading11">Your Passwords</h1>
                <button className="btn11" type="button">
                  <p>{count}</p>
                </button>
              </div>
              <div>
                <div className="search_container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    className="img111"
                    alt="search"
                  />
                  <input
                    type="search"
                    placeholder="search"
                    className="input1"
                    value={searchInput}
                    onChange={this.onChangeSearch}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="one111">
              <input type="checkbox" id="checkbox" onChange={this.label} />
              <label htmlFor="checkbox">Show passwords</label>
            </div>
            {this.password1()}
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordForm
