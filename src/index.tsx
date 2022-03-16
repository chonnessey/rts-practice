import ReactDom from 'react-dom';
import GuestList from './state/GuestList'

const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));