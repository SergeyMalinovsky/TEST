
const template = (_id, _state, _text) => {
    let tmp_text;
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
}

function addViewTask(_items=items, v=items.length){
    template_li.innerHTML += template(_items[v].id, items[v].state, items[v].text);
    article.append(template_li);
}

function DeleteTask(_id){
    console.log(_id);
    let item = document.querySelector('li[itemid="'+_id+'"]');
    console.log(item);
    item.remove();
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
            
        }    
    }
}

viewItems(items);
