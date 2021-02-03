import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 32 },
    { name: "Hanako", age: 27 },
    { name: "Azusa" }
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User key={index} name={profile.name} age={profile.age} />
      })}
    </div>
  );
}
const User = (props) => {
  return <div>Hi, I am {props.name} , {props.age} years old !</div>
};
User.defaultProps = {
  age: 20
};
export default App;