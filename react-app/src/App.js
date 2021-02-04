import React from 'react';

// クラスComponent　→　stateを持たせたい時、callback関数を使いたい時に使用
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

// ファンクショナルComponent　→　クラスComponentでなくて良い場合は優先的使用を検討
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
