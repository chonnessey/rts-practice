import ReactDom from 'react-dom';
// import GuestList from './state/GuestList'
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      <UserSearch />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));