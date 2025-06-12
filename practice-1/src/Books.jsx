function Books(props){
    return(
        <div className="Book1">
            <img src={props.coverImage}/>
            <h1>{props.title}</h1>
            <p> By {props.author}</p>
        </div>
    );
}

export default Books