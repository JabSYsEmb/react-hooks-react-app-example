import React from "react";

// no need to modify anything in here. The second test is looking for the returned JSX from this component
class ExampleComponent extends React.Component {
  render() {
    return (
      <div className="example">
        <img
          src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif"
          alt="a deeply impressed man, perhaps thinking 'whoa'"
        />
        {this.props.children}
        <p>Whoa!</p>
      </div>
    );
  }

  componentDidMount(){
    console.log("this component has mounted already")
  }
  
  componentWillUnmount(){
    console.log("good bay my friend!")
  }
}

export default ExampleComponent;
