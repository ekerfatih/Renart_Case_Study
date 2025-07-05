import './App.css'
import HorizontalList from "./components/HorizontalList.jsx";

const App = () => {

    return (
        <div className='w-full h-screen flex flex-col px-10'>
            <h1 className="text-[45px] pb-20 pt-40 text-center font-avenir"> Product List</h1>
            <HorizontalList/>
        </div>

    )
}

export default App
