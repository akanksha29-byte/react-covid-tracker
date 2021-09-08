import "./styles.css";
import React, { Component } from "react";
import { fetchData } from "./api/index";
import { Card, Chart, CountryPicker } from "./components/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="main">
        <div>
          <Card data={data} />
        </div>
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
