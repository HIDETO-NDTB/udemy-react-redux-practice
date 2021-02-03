import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="var">var</label>
//         <input type="text" onChange={() => console.log('I am clicked!')} />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}
const Cat = () => {
  return <div>ニャー！</div>
};

export default App;
