import Container from "./Container"
import ItemList from "./ItemList"


let root = document.getElementById("root");
let container = new Container(root);
let index =0;
function bikinlist  (gambar,judul,sipnosis) {


  
    let item = new ItemList(index,gambar.value,judul.value,sipnosis.value,container);
    index++;
    container.add(item);
    container.render();
    

    
    

}


window.bikinlist = bikinlist;