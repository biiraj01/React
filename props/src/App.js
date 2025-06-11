import Student  from "./Student";
function App() {
  return(
    <>
      <Student name="biraj" age={21} isStudent={true}/>
      <Student name="umika" age={19} isStudent={true}/>
      <Student name="ram" age={89} isStudent={false}/>
      <Student name="sajina" age="30" isStudent={false}/>
    </>
  );
}

export default App;
