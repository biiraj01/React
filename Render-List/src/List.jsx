function List(){

    const foods = [
        {id:1,name:"pizza",calories:200},
        {id:2,name: "burger",calories:300},
        {id:3,name: "momo",calories:400},
        {id:4,name: "sandwitch",calories:500},
        {id:5,name: "nooddles",calories:600}];

        //foods.sort((a,b)=>a.name.localeCompare(b.name));
        //foods.sort((a,b)=>b.name.localeCompare(a.name));
        //foods.sort((a,b)=>a.calories.-b.calories);
        //foods.sort((a,b)=>b.calories-a.calories);
    

    //const lowCalorieFoods = foods.filter(food => food.calories < 350);
    //const highCalorieFoods = foods.filter(food => food.calories > 350);
    
    
    const listedItems = foods.map(foods => 
        <li key={foods.id}>{foods.name}:&nbsp;
                        <b>{foods.calories}</b></li>
    );

    return(
        <ul>{listedItems}</ul>
    );
}   


export default List