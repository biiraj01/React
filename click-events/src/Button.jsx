function Button(){
   
    // const handleClick = (name) =>{
    //         if(count < 3){
    //             count++;
    //             console.log(`${name} .You clicked me  ${count} times`);
    //         }
    //         else {
    //             console.log(`${name}. Stop clicking me...`)
    //         }
            
    //     }


    const handleClick = (evt) =>{
        evt.target.textContent = "Clicked";
    }
    return (
        <button onDoubleClick = {(evt) => handleClick(evt)}> Click Me</button>
    );
}

export default Button