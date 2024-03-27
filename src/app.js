import './App.css;';
import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from 

function App() {
    return (
        <div className="app">
            <NavBar />
            <ItemListContainer greeting={'bienvenidos'} />
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
        </div>
    );
}
export default App;