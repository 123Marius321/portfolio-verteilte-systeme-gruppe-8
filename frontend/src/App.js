import React from "react";
import { fetchAllFood } from "./RestClient";
class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      food: [],
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  
  async fetchDisplayData() {
    let data = await fetchAllFood();
    this.setState({ food: data });
  }


  render() {
    return (
      <div>
        <div id="title"> 🍳 Restaurant 🍳  </div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          Check out what's our menu
        </button>
        <div className="data">
          <div>
            course: number - name - price
          </div>
          {this.state.food.map((food, key) => (
            <div key={key}>
             {food.course}: {food.number} - {food.name} - {food.price} 
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
