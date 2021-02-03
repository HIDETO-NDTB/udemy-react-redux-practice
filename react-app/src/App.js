import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 32 },
    { name: "Hanako", age: 27 },
    { name: "Azusa", age: 25 }
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
User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};
export default App;