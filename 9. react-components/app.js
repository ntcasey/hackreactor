// TODO

// import React from "react";
// import ReactDOM from "react-dom";
//import GroceryList from "./GroceryList";


const GroceryList = (props) => (
  <ul>
    {props.foodList.map(food =>
      <GroceryListItem food={food} />)}
  </ul>
);

// class GroceryListItem extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {

//     return <li>{this.props.food}</li>
//   }

// }

// const GroceryListItem = (props) => (
//   <div>
//   <li>{props.food[0]}</li>
//   <li>{props.food[1]}</li>
//   </div>

// )

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  onHoverListItem(hoveringValue) {
    this.setState({
      hover: hoveringValue
    });
  }

  render() {

    var style = {
      fontWeight :this.state.hover ? 'bold': 'normal'
    };

    return (
      <li style={style}
          onMouseEnter={() => this.onHoverListItem(       true)}
          onMouseLeave={() => this.onHoverListItem(
            false)}>

            {this.props.food}
            </li>
    )
  }

}

const list = ['apple', 'strawberry'];

// const Apple = () => <li>apple</li>;
// const Strawberry = () => <li>strawberry</li>;

ReactDOM.render(<GroceryList foodList={list}/>
  , document.getElementById("app"));

