function Button(){

    const handleClick = () =>{
            console.log("Hello")
        }
    return (
        <button onClick={handleClick}> Click Me</button>
    );
}

export default Button