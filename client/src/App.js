import './App.css';

function App() {
  let name = "Anh Le";
  const date = new Date();
  let time = date.getHours() % 12;
  let timeOfDay = "";
  if(time < 12){
    timeOfDay = "morning";
  }
  else if(time >= 12 && time < 18){
    timeOfDay = "afternoon";
  }
  else{
    timeOfDay = "night";
  }
  return (
    <div className="App">
      <header>
        <h1>Good {timeOfDay}, {name}!</h1>
      </header>
    </div>
  );
}

export default App;
