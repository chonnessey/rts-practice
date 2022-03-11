import ReactDom from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Hi There!</h1>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));