import React, { Component } from 'react';
import classes from './Profile.module.css';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.user.name,
      age: this.props.user.age,
      pet: this.props.user.pet
    }
  }

  onFormChange = (event) => {
    switch (event.target.name) {
      case 'user-name':
        this.setState({ name: event.target.value });
        break;
      case 'user-age':
        this.setState({ age: event.target.value });
        break;
      case 'user-pet':
        this.setState({ pet: event.target.value });
        break;
      default:
        return;
    }
  }

  onProfileUpdate = (data) => {
    fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
      method: 'post',
      headers: {
        "content-type": 'application/json',
        'Authorization': sessionStorage.getItem('token')
      },
      body: JSON.stringify({ formInput: data })
    })
      .then(res => {
        if (res.status === '200' || res.status === '304') {
          this.props.toggleModal();
          this.props.loadUser({ ...this.props.user, ...data });
        }
      })
      .catch(err => { console.log(err) })
  }

  render() {
    // = ({ isProfileOpen, toggleModal, user }) => {
    const { user } = this.props;
    const { name, age, pet } = this.state;
    const updatedState = {
      name: name,
      age: age,
      pet: pet
    }

    return (
      <div className={classes.profileModal}>
        <article className="br3  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
          <main className="pa4">
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="h3 w3 dib" alt="avatar" />
            <h1>{this.state.name}</h1>
            <h4> {`Images submitted: ${user.entries}`}</h4>
            <p> {`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
            <hr />
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input
                // className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="user-name"
                id="name"
                placeholder={user.name}
                onChange={this.onFormChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="age">Age</label>
              <input
                // className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="number"
                name="user-age"
                id="age"
                placeholder={user.age}
                onChange={this.onFormChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="pet">Pet</label>
              <input
                // className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="user-pet"
                id="pet"
                placeholder={user.pet}
                onChange={this.onFormChange}
              />
              <div className="mt4" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <button className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'
                  onClick={this.props.toggleModal}>
                  Cancel
                </button>
                <button
                  onClick={() => this.onProfileUpdate(updatedState)}
                  className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'>
                  Save
                </button>
              </div>
            </div>
          </main>
          <div className={classes.modalClose} onClick={this.props.toggleModal}>&times;</div>
        </article>

      </div>
    );

  }
}

export default Profile;

