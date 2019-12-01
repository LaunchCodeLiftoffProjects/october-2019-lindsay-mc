import React from "react";
import axios from "axios";

class Editlocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:8080/employer/post", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  /*handleSubmit(data) {
    return fetch("http://localhost:8080/employer/" + this.state.employer.id, {
      method: "PUT",
      mode: "CORS",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res;
      })
      .catch(err => err);
  }*/

  render() {
    const { name, address, city, state, zip, phone } = this.state;
    return (
      <div className="container">
        <h2>Edit Store Location</h2>
        <div>
          <form onSubmit={this.submitHandler}>
            <div class="form-group">
              <label for="name">Store Name: </label>
              <input
                type="text"
                className="form-control"
                value={name}
                name="name"
                placeholder="Store Name"
                onChange={this.changeHandler}
                required
              />
            </div>

            <div class="form-group">
              <label for="address">Address: </label>
              <input
                type="text"
                class="form-control"
                value={address}
                name="address"
                placeholder="Store Address"
                onChange={this.changeHandler}
                required
              />
            </div>

            <div class="form-group">
              <label for="city">City: </label>
              <input
                type="text"
                class="form-control"
                value={city}
                name="city"
                placeholder="City"
                onChange={this.changeHandler}
                required
              />
            </div>

            <div class="form-group">
              <label for="states">State: </label>
              <select
                class="form-control"
                value={state}
                onChange={this.changeHandler}
                name="state"
              >
                <option value="MO">MO-Missouri</option>
                <option value="IL">IL-Illinois</option>
                <option value="NY">NY-New York</option>
              </select>
            </div>

            <div class="form-group">
              <label for="zips">Zip Code: </label>
              <input
                type="text"
                class="form-control"
                value={zip}
                name="zip"
                placeholder="Zip Code"
                onChange={this.changeHandler}
                required
              />
            </div>

            <div class="form-group">
              <label for="phone">Phone: </label>
              <input
                type="text"
                class="form-control"
                value={phone}
                name="phone"
                placeholder="Phone"
                onChange={this.changeHandler}
                required
              />
            </div>
            <button type="submit">Send Data</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Editlocations;
