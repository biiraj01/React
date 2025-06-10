import profilePic from './assets/profile.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-img"src={profilePic} alt="Profile Picture"></img>
            <h2 className = "card-title">Biraj</h2>
            <p className="card-text">I am a student studying BIT in Kist College of Information Technology</p>
        </div>
    );
}

export default Card