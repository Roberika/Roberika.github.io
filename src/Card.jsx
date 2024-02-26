export default function Card({ item }){
    return <div>
        <a className="card" href={item.url}>
            <div className="card-caption">{item.caption}</div>
            <div className="card-image">
                <img src={item.image}></img>
            </div>
        </a>
    </div>
}