import List from "./List"


function App() {
  const foods = [
        {id:1,name:"pizza",calories:"200"},
        {id:2,name: "burger",calories:300},
        {id:3,name: "momo",calories:400},
        {id:4,name: "sandwitch",calories:500},
        {id:5,name: "nooddles",calories:600}
      ];

  const fruits = [
        {id:7,name:"apple",calories:200},
        {id:8,name: "mango",calories:300},
        {id:9,name: "litchi",calories:400},
        {id:10,name: "strawberry",calories:500},
        {id:11,name: "banana",calories:600}];   
  return(
    <>
      {foods.length > 0 && <List items = {foods} category = "Junk Foods"/> }
      {foods.length > 0 && <List items = {fruits} category = "Fruits"/>  }
    </>
  );
}

export default App
