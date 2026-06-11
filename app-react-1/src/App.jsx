// import Card from "./Card"
// import Button from "./Button"
// import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";

function App() {
  {
    /* <Card/>  
      <br /> 
      <Button/>

      <Student name="Puskar" age={19} isStudent={true} />
      <Student name="Aadarsh" age={20} isStudent={false} />
      <Student name="Loley" age={22} isStudent={true} /> */
  }
  {
    /* <UserGreeting isLoggedIn={false} username="puskar" /> */
  }

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 50 },
    { id: 3, name: "banana", calories: 130 },
    { id: 4, name: "coconut", calories: 150 },
  ];

  const vegetables = [
    { id: 5, name: "potatoes", calories: 110 },
    { id: 6, name: "celery", calories: 30 },
    { id: 7, name: "carrots", calories: 90 },
    { id: 8, name: "corn", calories: 125 },
  ];

  return (
    <>
      <List items={fruits} category="fruits" />
      <List items={vegetables} category="vegetables" />
    </>
  );
}

export default App;
