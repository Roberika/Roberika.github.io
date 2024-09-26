export default function Card({ item }){
    return <a className="card" href={item.url}>
            <img className="card-image" src={item.image}></img>
    </a>
}