import Bugs from "./components/Bugs/Bugs";
import Header from "./components/Header";
import Navigation from "./components/Navigation/Navigation";
import RedesignedTime from "./components/RedesignedTime/RedesignedTime";
import Redesign from "./components/RedesinedNot/Redesign";
import BasicTimeline from "./components/Timeline";
import Title from "./components/Title";

function App() {
  return (
    <div className="w-screen h-full bg-white font-openSans py-5 text-gris">
      <Header />
    <Title />
      <div className="flex xl:flex-row flex-col w-full justify-between">
        <div className="w-[70%] mt-5 flex flex-col items-start">
          <BasicTimeline />
        </div>
        <div className="xl:w-[20%]">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default App;
