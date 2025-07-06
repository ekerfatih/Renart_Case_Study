import './App.css'
import HorizontalList from "./components/HorizontalList.jsx";

const App = () => {

    return (
        <div className='w-full h-screen flex flex-col lg:px-10'>
            <h1 className="text-[45px] min-[300px]:pt-15 min-[300px]:pb-20 sm:pt-30 2xl:pt-40 text-center font-avenir"> Product
                List</h1>
            <div className={"flex flex-col justify-center items-center"}>
                <div className="max-w-[1920px] flex w-full">
                    <HorizontalList/>
                </div>
            </div>
        </div>

    )
}

export default App
