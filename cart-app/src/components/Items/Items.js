import React from 'react'
import Item from "../Item/Item";
export default function Items(props) {
    return (
            <div className='col-8 bg-light'>
                <h1 className='text-center'>Items</h1>
                <div className='row'>
                    {
                        props.items.map((item)=>{
                            return <Item key={item.id} item={item} />
                        })
                    }
                </div>
            </div>
    )
}
