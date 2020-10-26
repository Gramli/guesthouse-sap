import data from "./assets/rooms.json"

export function LoadJson(){
    let array = {};
    data.map((input) => {
      array[input.id] = input;
        });
        return array;
}