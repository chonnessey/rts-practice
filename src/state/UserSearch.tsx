import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 34 },
  { name: 'Ab', age: 34 },
  { name: 'Brother', age: 34 },
  { name: 'Moo', age: 34 }
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number} | undefined>()

  const handleClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    })

    setUser(foundUser)
  };

  return (
    <div>
      <input 
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br/>
      <br/>
      <button onClick={handleClick}>Find user</button>
      <br/>
      <br/>
      <div>
        name: {user && user.name}
        <br/>
        <br/>
        age: {user && user.age}
      </div>
    </div>
  )
};

export default UserSearch;
