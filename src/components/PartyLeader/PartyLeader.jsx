function PartyLeader({guestList}){
    return(
        <div>
            <h2>Party Leader</h2>
            {guestList[0] && <h3>{guestList[0].name}</h3>}
        </div>
    );
};
export default PartyLeader;