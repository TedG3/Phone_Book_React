import React from "react";

class AddPhone extends React.Component {
  state = {
    name: "",
    phone: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.phone === "") {
      alert("Fill all fields");
      return;
    }
    this.props.addPhoneHandler(this.state);
    this.setState({name: "", phone: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Phone Numbers</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          <button className="ui button green">Add Phone Number</button>
        </form>
      </div>
    );
  }
}

export default AddPhone;
