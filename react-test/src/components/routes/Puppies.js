import React from 'react';
import './Puppies.css';
import API from '../../utils/API'
//const baseURL = 'http://localhost:8000/api/v1/'

const formInitialState = {
  name: '',
  age: '',
  breed: '',
  color: ''
}

class Puppies extends React.Component {
  constructor(props) {
    super(props)
    this.state = Object.assign(
      {puppies: []}, 
      formInitialState
    ) 
  }
  
  componentDidMount() {
    this.getPuppies()
  }

  async getPuppies() {
    try {
      await API.get('/puppies/')
      .then(res => this.setState({puppies: res.data}))
    } catch(e) {
      console.log(e)
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleReset = () => {
    this.setState(() => this.formInitialState)
  }

  handleSubmit = async event => {
    event.preventDefault()

    const puppy = {
      name: this.state.name,
      age: this.state.age,
      breed: this.state.breed,
      color: this.state.color
    }

    try {
      API.post('/puppies/', puppy)
        .then(res => {
          this.getPuppies()
      })
    } catch(e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <h1>Puppies</h1>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">All puppies</h4>
            <div className="list-group">
              {this.state.puppies.map(puppies => 
                <a href="/puppies" key={puppies.id} className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{puppies.name}</h5>
                    <small>{puppies.age} years old</small>
                  </div>
                  <p className="mb-1">{puppies.breed}</p>
                  <small>{puppies.color}</small>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Add new puppy</h4>
            <form ref="addPuppy" onSubmit={this.handleSubmit} onReset={this.handleReset}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text" name="name" onChange={this.handleChange} />
                <label htmlFor="age">Age</label>
                <input className="form-control" type="text" name="age" onChange={this.handleChange} />
                <label htmlFor="breed">Breed</label>
                <input className="form-control" type="text" name="breed" onChange={this.handleChange} />
                <label htmlFor="color">Color</label>
                <input className="form-control" type="text" name="color" onChange={this.handleChange} />
              </div>
              <button className="btn btn-primary" type="submit">Add!</button>
              <button className="btn btn-danger" type="reset">Reset!</button>
            </form>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Puppies;
