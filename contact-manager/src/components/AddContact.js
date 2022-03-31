import React from "react";

class AddContact extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.fname === "" || this.state.lname ==="" || this.state.email ==="" ) {
      alert("Fill First Name");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ fname: "", lname:"", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={this.state.fname}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={this.state.lname}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
