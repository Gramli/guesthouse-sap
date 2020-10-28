import pct1 from "./assets/pct1.png";
import pct2 from "./assets/pct2.png";
import pct3 from "./assets/pct3.png"; 

function GetImageMap(){
    let images = {
        "pct1.png": pct1,
        "pct2.png": pct2,
        "pct3.png": pct3
      }
      return images;
}

export function GetAccomondationImageMap(){
  return GetImageMap();
}

export function GetRestaurantImageMap(){
  return GetImageMap();
}