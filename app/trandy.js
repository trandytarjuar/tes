import ItemList from "./ItemList"
class trandy extends ItemList{
    createElement(){
        this.paragraf.innerHTML =`<table style="height: 119px; width: 495px; border:1px solid black;">
        <tbody>
        <tr style="height: 109px;">
        <td style="width: 157px; height: 109px;">&nbsp;</td>
        <td style="width: 142px; height: 109px;"><img src="${this.gambar}" alt="" width="139" height="129" /></td>
        <td style="width: 174px; height: 109px;">&nbsp;</td>
        </tr>
        <tr style="height: 28px;">
        <td style="width: 157px; height: 28px; text-align: center;" colspan="3">&nbsp;${this.title}&nbsp;</td>
        </tr>
        <tr style="height: 28px;">
        <td style="width: 157px; height: 28px;" colspan="3">&nbsp;${this.description}</td>
        </tr>
        <tr style="height: 28px;">
        <td style="width: 157px; height: 28px;">&nbsp;</td>
        <td style="width: 142px; height: 28px;">&nbsp;</td>
        <td style="width: 174px; height: 28px;"><input style="float: right;" height="26" src="https://cdn0.iconfinder.com/data/icons/thin-essentials/57/thin-059_recycle_bin_delete_garbage_full-512.png" type="image" value="delete" width="33" /></td>
        </tr>
        </tbody>
        </table>`;
        this.paragraf.addEventListener("click",this.onclick.bind(this));
        return this.paragraf;

    }

    onclick(){
        this.container.remove(this.paragraf,this.index);
    }
    
}
export default trandy