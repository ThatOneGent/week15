import React from "react";
import { NewRoomForm } from './NewRoomForm'

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x.id !== roomId)
        };
        console.log('deleteroom');
        console.log(updatedHouse);
        updateHouse(updatedHouse);
    };

    const addNewRoom = (room) => {
        let newID = Math.floor(1000 + Math.random() * 9000);
        room = {...room, id: newID};
        return updateHouse({ ...house, rooms: [...house.rooms, room] })
    };

    const rooms = () => (

        
        <ul>
            {house.rooms.map((room, index) => (
                    <li key={index}>
                        <label>{`${room.name} Area: ${room.area}`}</label>
                        <button onClick={(e) => deleteRoom(room.id)}>Delete</button>
                        {console.log('li hit')}
                        {console.log(room.name)}
                    </li>

                ))}

        </ul>

    );

    return (
        <div>
            <h1>{house.name}</h1>
            {
                rooms({ rooms, houseId: house.id, deleteRoom })
            }

            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};