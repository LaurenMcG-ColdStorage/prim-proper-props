import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GuestList from '../GuestList/GuestList'
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';
import GuestForm from '../GuestForm/GuestForm';
import PartyLeader from '../PartyLeader/PartyLeader';

function App() {
  let [guestList, setGuestList] = useState([]);
  let [newGuestName, setNewGuestName] = useState('');
  let [newGuestMeal, setNewGuestMeal] = useState('false');

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/api/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }

  console.log(newGuestMeal)
  return (
    <div className="App">
      <Header />
      <PartyLeader guestList={guestList} />
      <GuestForm newGuestName={newGuestName} 
                 setNewGuestNameCallback={setNewGuestName}
                 newGuestMeal={newGuestMeal}
                 setNewGuestMealCallback={setNewGuestMeal}
                 getGuestsCallback={getGuests}/>
      <GuestList guestList={guestList}/>
      <DinnerSupplies guestList={guestList}/>
      <Footer />
    </div>
  );
}

export default App;
