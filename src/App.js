import { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      colors: ["red", "black", "purple", "yellow", "green", "pink", "aqua", "blue", "gray", "lime", "maroon", "navy", "olive", "silver", "teal", "fuchsia", "antiquewhite", "blueviolet", "beige", "coral", "crimson"]
    }
  }
  changeColor = (i) => {
    const { colors } = this.state
    const newColors = [...colors]
    const randomIndex = Math.floor(Math.random() * colors.length)

    newColors[i] = colors[randomIndex]

    this.setState({ colors: newColors })
  }

  render() {
    const { colors } = this.state
    return (
      <>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "90%", margin: "0 auto" }}>
          {colors.map((color, i) => (
            <div
              key={i}
              style={{
                backgroundColor: color,
                width: "160px",
                height: "160px",
                marginRight: "10px",
                marginBottom: "15px",
                cursor: "pointer"
              }}
              onClick={() => this.changeColor(i)}
            >
              Click Me
            </div>
          ))}
        </div>


      </>
    );
  }


}

export default App;
