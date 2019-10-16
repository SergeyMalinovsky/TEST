
const template = (_id, _state, _text) => {
    let tmp_text = _text;
    let checkbox_checked = '';
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

        items.push({id: items.length, text: _text[0].value, state: false});

        template_li.innerHTML += template(items.length, false, _text[0].value);
    }else{
        alert("Поле не может быть пустым!");
    }
    addLocalStorage();
}

function addViewTask(_items=items, v=items.length){
    template_li.innerHTML += template(_items[v].id, items[v].state, items[v].text);
    article.append(template_li);
}

function DeleteTask(_id){
    console.log(_id);
    let item = document.querySelector('li[itemid="'+_id+'"]');
    console.log(item);

    for(i in items){
        if(items[i].id == _id){
            if(items.length == 1) i=items.length;
            items.splice(i, 1);
            console.log("Found!");
            break;
        }
    }

    addLocalStorage();

    item.remove();
}

function changeStateTask(_id){

    state_checkbox = document.getElementsByClassName('ch-box-complete-task'+_id)[0].checked;
    let elem = document.getElementsByClassName(`completeTask${_id}`)[0];
    console.log(_id+" "+state_checkbox+" "+elem);

    for(i in items){
        if(items[i].id == _id){
            items[i].state == state_checkbox;
            console.log("Found!");
            break;
        }
    }

    //let rmText = document.
    if(state_checkbox){
        elem.style.setProperty("text-decoration", "line-through");
    }else{
        elem.style.setProperty("text-decoration", "none");
    }
}

// ============================== Local Storage Functions =================================

function addLocalStorage(){
    let jsonItems = JSON.stringify(items);
    localStorage.setItem("local_data", jsonItems);
}

function loadLocalStorage(){
    let _loadItems = JSON.parse(localStorage.getItem("local_data"));
    console.log(_loadItems);
    return _loadItems;
}

// ========================================================================================
function viewItems(){

    let tmp_item_name = '';
    let checkbox_checked = ''

    items = loadLocalStorage();
    //console.log(_items);
    item_li.innerHTML = '';

    if(items.length == 0){
        item_li.innerHTML = "<div class='item'><h3 align='center'>Empty...</h3></div>"
    }else{
        for(let i=0; i<items.length; i++){

            addViewTask(items, i);
            
        }    
    }

    addLocalStorage();
}

viewItems();
