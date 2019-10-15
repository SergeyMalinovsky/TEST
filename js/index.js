
const template = (_id, _state, _text) => {
    return "<div class='item'><input type='checkbox' onclick='ChangeStateTask(${_id})'> ${_text}<a href='#'><img src='img/delete_icon.jpg' alt='Delete' onclick='DeleteTask(${_id})'></a></div>";
}


let items = [
    {id: 0, text: "FirstItem",  state: false},
    {id: 1, text: "SecondItem", state: false},
    {id: 2, text: "ThirdItem",  state: false},
    
]

let item_li = document.createElement('li');
let state_checkbox;

function AddTask(){
    let _text = document.getElementsByClassName('InputField');
    if(_text[0].value){
        console.log(_text[0].value);
        items.push({id: items.length, text: _text[0].value, state: false})
        viewItems(items);
    }else{
        alert("Поле не может быть пустым!");
    }
    
    //items.append{id: lastId, name: _name, checked: false};

    
}



function DeleteTask(_id){
    //items.splice(_id, 1);
    delete items[_id];
    viewItems();
}

function ChangeStateTask(_id){

    state_checkbox = document.getElementsByClassName('ch-box-complete-task'+_id)[0].checked;
    console.log(_id+" "+state_checkbox);
    for(let i=0; i< items.length; i++)
    {
        if(items[i].id == _id){

            //console.log('Found!');
            if(items[i].state != state_checkbox){
                items[i].state = state_checkbox;
                break;
            }
        }
    }

    viewItems(items );
/*
    for(let i in items){
        if(items[i].id == _id)
        {
            if(items[i].state != state_checkbox)
            {
                items[i].state = state_checkbox;
                break;
            }else{
                break;
            }
        }

    viewItems();
    }*/
}

/*
function renderItems(){
    for(let i=0; i<items.length; i++){
            console.log(items[i].id+' '+items[i].name+' '+items[i].checked);
        }
}*/
// ========================================================================================
function viewItems(_items){

    let tmp_item_name = '';
    let checkbox_checked = ''

    item_li.innerHTML = '';

    for(let i=0; i<_items.length; i++){

        checkbox_checked = '';
        if(_items[i].state)
        {
            tmp_item_name = '<s>'+_items[i].text+'</s>'
            checkbox_checked = "checked='checked'";
        }else{
            tmp_item_name = _items[i].text;
        } 

        //console.log(_items[i].id+' '+tmp_item_name+' '+_items[i].state);
        item_li.innerHTML += "<div class='item'><input type='checkbox' "+checkbox_checked+" class='ch-box-complete-task"+items[i].id+"' onclick='ChangeStateTask("+_items[i].id+")'> "+tmp_item_name+"<a href='#'><img src='img/delete_icon.jpg' alt='Delete' onclick='DeleteTask("+_items[i].id+")'></a></div>";
        lastId = i;
    }
    ul.append(item_li);
}

viewItems(items);
