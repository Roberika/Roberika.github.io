import { useEffect, useState } from 'react';
import Card from './Card.jsx'

export default function Grid({ items, columns }){

    return <div className={"grid gap-4 grid-cols-3 " + columns}>
        {items?.map((item, index) => (
            <Card item={item}/>
        ))}
    </div>
}