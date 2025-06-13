import PropTypes from 'prop-types';

function List(props){
        //foods.sort((a,b)=>a.name.localeCompare(b.name));
        //foods.sort((a,b)=>b.name.localeCompare(a.name));
        //foods.sort((a,b)=>a.calories.-b.calories);
        //foods.sort((a,b)=>b.calories-a.calories);
    

    //const lowCalorieFoods = foods.filter(food => food.calories < 350);
    //const highCalorieFoods = foods.filter(food => food.calories > 350);
    const category = props.category;
    const itemList = props.items;
    const listedItems = itemList.map(item => 
        <li key={item.id}>{item.name}:&nbsp;
                        <b>{item.calories}</b></li>
);
    
    return(
          <>
            <h2 className="list-category">{category}</h2>
            <ul className="list-items">{listedItems}</ul>
          </>
    );
}   

List.defaultProps = {
    category: "Category",
    items : [],
}

List.PropTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number},
                                            {name:PropTypes.string},
                                            {calories:PropTypes.number}
    )),
}

export default List