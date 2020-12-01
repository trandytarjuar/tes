class ItemList{

    constructor(index,gambar,title,description,container){
        this.index = index;
        this.gambar = gambar;
        this.title = title;
        this.description = description;
        this.container= container;

        this.paragraf = document.createElement("p");

    }


    createElement(){

     
        this.paragraf.innerHTML =`<table  style='height: 48px; width: 488px;border:1px solid black;'><tbody><tr><td style='width: 47px;' rowspan='2'><img src='${this.gambar}' alt='' width='54' height='50' /></td><td style='width: 265px;'>${this.title}</td><td style='width: 156px;'>&nbsp;</td></tr><tr><td style='width: 265px;'>${this.description}</td><td style='width: 156px;'>&nbsp;&nbsp;<img style='float: right;' src='https://cdn0.iconfinder.com/data/icons/thin-essentials/57/thin-059_recycle_bin_delete_garbage_full-512.png' alt='' width='33' height='26' /></td></tr></tbody></table>`;
        this.paragraf.addEventListener("click",this.onclick.bind(this));
        return this.paragraf;

    }

    onclick(){
        this.container.remove(this.paragraf,this.index);
    }

    
    
}

export default ItemList