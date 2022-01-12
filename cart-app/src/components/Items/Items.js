import React from 'react'
import Itemcard from "../ItemCard/Itemcard";
export default function Items(props) {
    return (
            <div className='col-8 bg-light'>
                <h1 className='text-center'>Items</h1>
                <div className='row'>
                    {
                        props.items.items.map((item)=>{
                            return <Itemcard key={item.id} item={item} onAdd={props.onAdd} />
                        })
                    }
                </div>
            </div>
    )
}
