import React, { Component } from "react";

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.currentTarget.value });
  }

  matches() {
    let filtered = this.props.names.filter(
      name =>
        name.toLowerCase().slice(0, this.state.query.length) ===
        this.state.query.toLowerCase()
    );

    let results = filtered.map((name, idx) => <li key={idx}>{name}</li>);
    return results;
  }

  render() {
    const { names } = this.props;
    return (
      <div className="auto">
        <ul>{this.matches()}</ul>

        <input
          style={{ backgroundColor: "white", color: "black" }}
          value={this.state.query}
          placeholder="Search..."
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default AutoComplete;
