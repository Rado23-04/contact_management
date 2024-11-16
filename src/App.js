import { useState } from 'react';
import './App.css';

function App() {
  const [increment , setIncrement] = useState (0);
  const [fruits, setFruits] = useState([
    {id:1, name:"banane"},
    {id:2, name:"orange"},
    {id:3, name:"avocat"}
  ]);

  const [newFruit, setNewFruit] = useState("");

  const handleClick = () =>{
    setIncrement(increment+1)
  }

  const handleDelete = (id)=>{
    const copyFruits = [...fruits];

    const updatedFruits = copyFruits.filter(fruit => fruit.id !==id);

    setFruits(updatedFruits);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();

    const copyNewFruit = [...fruits];
    const id = new Date().getTime();
    const name = newFruit;

    copyNewFruit.push({id,name})

    setFruits(copyNewFruit);
    setNewFruit("");

  }

  const handleChange = (event) =>{
    setNewFruit(event.target.value);
  }

  return <>
    <div>
        <div>{increment}</div>
          <button onClick={handleClick}>
            incrementation
          </button>
    </div>

    <div>
        <p>Listes fruits</p>
        <ul>{fruits.map((fruit)=>(
          <li key={fruit.id}>{fruit.name} <button onClick={()=> handleDelete(fruit.id)}>X</button></li> 
        ))}</ul>
    </div>

    <div>
    <p>Ajout de fruit</p>
        <form action='submit' onSubmit={handleSubmit}>
            <input type='text'
            value={newFruit}
            onChange={handleChange}
            ></input>
            <button >+</button>
        </form>
    </div>
      
  
  </>
}

export default App;




















/**
 * 
{fruits.map((fruit)=>{
  return <li>{fruit.name} <button onClick = (()=> handelDelete(fruit.id))>X</button></li>
  })}

  
  
  )


const handleDelete = (id) ={
pour delete il copier, manipuler et setter 
  const copy = fruits.slice()
  const updateCopy = copy.filter(fruit => fruit.id !== id
  setFruits(updateCopy)
}

-créer forme avec action submit et fonction handleSubmit
-la fonction handleSubmint a pour paramètre event et ce event fait un event.target.value 
pour ne pas charger la page quand on click dessus 
-input il y value = le state qu'on vient de créer et la fonction handleChange
-la fonction handleChange comporte le setter qu'on vient de créer set....(event.target.value)
=> pour afficher ce qu'on écrit dans l'input
-La fonction handleSubmit prend une copie du tableau fruit 
-le manipule: trouve un nouveau id(new Date().getTime()) et un nouveau (celle du noueau state)
-le push (id et nom) dans le tableau copié 
-on utilise le setter pour l'ajouter dans la liste
créer un state vide 














 */



















