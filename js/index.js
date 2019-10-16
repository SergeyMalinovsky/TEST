
const template = (_id, _state, _text) => {
    let tmp_text;
    let checkbox_checked = '';
/*
    if(_state)
    {
            tmp_text = '<s>'+_text+'</s>'
            checkbox_checked = "checked='checked'";
       }else{*/
            tmp_text = _text;
    /*}  
*/ 
    //return "<li itemid='"+_id+"'><div class='item'><input type='checkbox' "+checkbox_checked+" class='ch-box-complete-task"+_id+"' onclick='changeStateTask("+_id+")'> "+tmp_text+"<a href='#'><img src='img/delete_icon.jpg' alt='Delete' onclick='DeleteTask("+_id+")'></a></div></li>";
//}

    return `<li itemid='${_id}'>
                <div class='item'>
                    <input type='checkbox' ${checkbox_checked} class='ch-box-complete-task${_id}' id='${_id}' onclick='changeStateTask(${_id})'> 
                        <label for="${_id}" class='completeTask${_id}' >${tmp_text}</label>
<style>
.completeTask${_id} {
    text-decoration: none;
}
</style>
                    <a href='#'><img src='img/delete_icon.jpg' alt='Delete' onclick='DeleteTask(${_id})'></a>
                    </div>
            </li>`;
}

// ========================================================================================

let items = [
    {id: 0, text: "FirstItem",  state: false},
    {id: 1, text: "SecondItem", state: false},
    {id: 2, text: "ThirdItem",  state: false},
    
]

let item_li = document.createElement('li');
let template_li = document.createElement('ul');
let state_checkbox;

function addTask(){
    let _text = document.getElementsByClassName('InputField');
    if(_text[0].value){
        console.log(_text[0].value);
        items.push({id: items.length, text: _text[0].value, state: false})
        //viewItems(items);
        //addViewTask(items, items.length);
        template_li.innerHTML += template(items.length, false, _text[0].value);
    }else{
        alert("Поле не может быть пустым!");
    }
}

function addViewTask(_items=items, v=items.length){
    template_li.innerHTML += template(_items[v].id, items[v].state, items[v].text);
    article.append(template_li);

/*
    let _text = document.getElementsByClassName('InputField');
    if(_text[0].value){
        console.log(_text[0].value);
        items.push({id: items.length, text: _text[0].value, state: false})
        viewItems(items);
    }else{
        alert("Поле не может быть пустым!");
    }
    
    //items.append{id: lastId, name: _name, checked: false};

 */   
}

//function addTask(){
    
//}
/*
function addTask(){
    let _text = document.getElementsByClassName('InputField');
    if(_text[0].value){
        //console.log(_text[0].value);
        items.push({id: items.length, text: _text[0].value, state: false})
        //viewItems(items);
    }else{
        alert("Поле не может быть пустым!");
    }
    template_li.innerHTML += template(_items[v].id, items[v].state, items[v].text);
    template_li.setAttribute("itemId", _items[v].id);
    article.append(template_li);
}*/



function DeleteTask(_id){
    console.log(_id);
    let item = document.querySelector('li[itemid="'+_id+'"]');
    console.log(item);
    //if(items.lengh == 1)
    item.remove();
    //viewItems(items);
}

function changeStateTask(_id){

    state_checkbox = document.getElementsByClassName('ch-box-complete-task'+_id)[0].checked;
    let elem = document.getElementsByClassName(`completeTask${_id}`)[0];
    console.log(_id+" "+state_checkbox+" "+elem);

    //let rmText = document.
    if(state_checkbox){
        elem.style.setProperty("text-decoration", "line-through");
    }else{
        elem.style.setProperty("text-decoration", "none");
    }
}
    /*
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
    }
    */


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

    //console.log(_items);
    item_li.innerHTML = '';

    if(_items.length == 0){
        item_li.innerHTML = "<div class='item'><h3 align='center'>Empty...</h3></div>"
    }else{
        for(let i=0; i<_items.length; i++){

            addViewTask(items, i);
            /*
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
            //lastId = i;*/
            
        }    
    }

    
    //ul.append(item_li);
}

viewItems(items);
