import pp from "./assets/puskar.jpg"

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={pp} alt="profile picture" />
            <h2 className="card-title">Puskar Thapa</h2>
            <p className="card-des">I am a full stack developer and love riding bike.</p>
        </div>
    )
}

export default Card