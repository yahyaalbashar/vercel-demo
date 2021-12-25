import React from 'react';
import { useEffect, useState } from 'react';
import Item from './Item';
import axios from 'axios';


const  Main =(props)=> {
    const getDataUrl=`${process.env.NEXT_PUBLIC_API}api/v1/things`;
    const [thingsList, setThingsList] =useState([]);
    useEffect(()=>{
        const config={
            headers:{
                "Authorization": `Bearer ${props.token}`
            }
        }
        axios.get(getDataUrl,config).then(data=>{
            setThingsList(data.data);
            console.log(thingsList);
        })
    },[getDataUrl,thingsList,props.token]);
    
    

    return (
        <div>
            <h1>Things list Demo</h1>
            {thingsList.map(item=>{
                return <Item key={item.id} name={item.name} owner={item.owner}/>
            })}
        </div>
    )
}

export default Main
