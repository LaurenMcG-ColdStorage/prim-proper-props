import axios from 'axios';


function GuestForm({newGuestName, newGuestMeal, setNewGuestNameCallback, setNewGuestMealCallback, getGuestsCallback}){
    const addGuest = () => {
        axios.post('/api/guests', { name: newGuestName, kidsMeal: newGuestMeal })
          .then(response => {
            // clear inputs
            setNewGuestNameCallback('');
            setNewGuestMealCallback(false);
    
            getGuestsCallback();
          })
          .catch(err => {
            alert('Error Adding Guest');
            console.log(err);
          })
      };
    
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (newGuestName) {
          addGuest();
        }
        else {
          alert('The new guest needs a name!');
        }
      };
    
    return(
        <div>
            <h2>Add a new guest</h2>
            <form onSubmit={handleSubmit}>
            <label>
                Name
            </label>
            <input
                type="text"
                placeholder="Name"
                value={newGuestName}
                onChange={(evt) => setNewGuestNameCallback(evt.target.value)}
            />
            <div>
                Would this guest like a kid's meal?
                <div >
                <div>
                    <label>
                    <input
                        type="radio"
                        value={true}
                        checked={newGuestMeal === 'true'}
                        name="kidsMeal"
                        onChange={(evt) => setNewGuestMealCallback(evt.target.value)}
                    />
                    Yes, this guest would like a Kid's Meal
                    </label>
                </div>
                <div>
                    <label>
                    <input
                        type="radio"
                        value={false}
                        checked={newGuestMeal === 'false'}
                        name="kidsMeal"
                        onChange={(evt) => setNewGuestMealCallback(evt.target.value)}
                    />
                    No, this guest would not like a Kid's Meal
                    </label>
                </div>
                </div>
            </div>
            <button type="submit">Add Guest</button>
            </form>
        </div>
    );
};

export default GuestForm;