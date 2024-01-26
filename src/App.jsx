import React, { useEffect, useState } from 'react'
import Pokee from './Pokee.jsx'
import pokeball from './assets/pokeball.png'
import "./App.css"
export default function App() {
    const [data,setData] = useState([]);
    const fetchData = async()=>{
        const response =await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30`);
        const Data = await response.json();
        console.log(Data);
    function createPoke(result) {
        result.map(async(poke)=>{
            const res =await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`);
            const Data = await res.json();
            console.log(Data);
            setData(prev =>[...prev,Data])
        })
    }
    createPoke(Data.results)

       } 
       useEffect(()=>{
        fetchData()

       },[])
       
  return (
    <>
    <div className='heading-container'>
    <img className='logo' src={pokeball} alt="" />

    <h1 className='heading'>POKECHU</h1>
    </div>
    
        <div className='poke-container'>
    {
        data.map((item,index)=>{
            return(
                <Pokee  key={index} Name={item.name} img={item.sprites.front_default} height={item.height} weight={item.weight} url={item.url}
                abilities={item.abilities[0].ability.name} moves={item.moves[0].move.name}  
                
                />
            )
        })
    }
        </div>
    </>
    
  )
}