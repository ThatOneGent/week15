import logo from './logo.svg';
import './App.css';

const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

export default class App extends Read.Component {

  constructor(props) {
    super(props);
    this.addNewRoom = this.addNewRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
  }

  render() {
    const houses = this.state
      ? this.state.houses.map((house, index =>
        <House
          key={index}
          data={house}
          addNewRoom={this.addNewRoom}
          deleteRoom={this.deleteRoom} />)) // added this )
      : null;
    return (
      <div>
        {houses}
      </div>
    );

  }

  componentDidMount() {
    fetch(HOUSES_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        this.setState({
          houses: data
        })
      })
  }




}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
