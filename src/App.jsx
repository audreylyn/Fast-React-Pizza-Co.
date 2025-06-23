import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  // const style = {color: "red", fontSize: "56px", textTransform: "lowercase"};
  return(
    <header className='header'>
     <h1>Fast React Pizza Co.</h1>
  </header>
  )
}

function Menu() {
  return(
      <>
        <main className='menu'>
          <h2>Our menu</h2>
          <p>Authentic italian cuisine. 6 creative dishes to  choose from. All from our stine oven, all organic, all delicious.</p>
          <ul className={"pizzas"}>
            {pizzaData.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>)}
          </ul>
          {/*<Pizza name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" img="../public/pizzas/spinaci.jpg" price={10}/>*/}
          {/*<Pizza name="Pizza Funghi" ingredients="Tomato, mozarella, cheese" img="../public/pizzas/funghi.jpg" price={12}/>*/}
        </main>
      </>
  )
}

function Pizza({ pizzaObj }) {
  // const { name, ingredients, price, photoName } = pizza-Obj;

  // if (pizzaObj.soldOut) return null;

  return(
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
    <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>

      {/*{*/}
      {/*  pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.price}</span>*/}
      {/*}*/}

      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    </div>
    </li>
  )
}


const dateToday = new Date().toLocaleTimeString();


function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open")
  // } else {
  //   alert("We're closed")
  // }

  return(
    <footer className='footer'>
      {
        isOpen && <Order closeHour={closeHour} />
      }
    </footer>
  )
}

function Order({closeHour}) {
  return(
      <div className="order">
        <p>We're open until {closeHour}:00. Come visit us or online.</p>
        <button className="btn">Order</button>
      </div>
  )
}



export default App
