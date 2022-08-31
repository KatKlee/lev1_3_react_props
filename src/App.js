import './App.css';
import List from './components/List';


/* To-Do-List Array */
let toDoList = [
  {
    icon: './img/check.png',
    task: 'Hit the gym',
    image: './img/gym.png',
  },
  {
    icon: './img/check.png',
    task: 'Pay bills',
    image: './img/bill.png',
  },
  {
    icon: './img/doing.png',
    task: 'Meet George',
    image: './img/dance.png',
  },
  {
    icon: './img/doing.png',
    task: 'Buy eggs',
    image: './img/eat.png',
  },
  {
    icon: './img/no.png',
    task: 'Read a book',
    image: './img/book.png',
  },
  {
    icon: './img/no.png',
    task: 'Organize office',
    image: './img/organize.png',
  },
]

function App() {
  return (
    <div className="App">
      <List
        tasks={toDoList}
      />
    </div>
  );
}

export default App;
