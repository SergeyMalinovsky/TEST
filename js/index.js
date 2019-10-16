
const template = (_id, _state, _text) => {
    let tmp_text = _text;
    let checkbox_checked = '';
/*
    let elem = document.getElementsByClassName(`completeTask${_id}`)[0];
    console.log(_state);
    if(elem != undefined){
        if(_state == true){
            console.log("Checked working!");

            elem.style.setProperty("text-decoration", "line-through");
        }else{
            
            elem.style.setProperty("text-decoration", "none");
        }
    }
  */ 
    let check = _state ? 'checked' : '';
    
    return `<li itemid='${_id}'>
                <div class='item'>
                    <input type='checkbox' ${check} ${checkbox_checked} class='ch-box-complete-task${_id}' id='${_id}' onclick='changeStateTask(${_id})'> 
                        <label for="${_id}" class='completeTask${_id} completeTask'>${_text}</label>

                    <a href='#'><img src='img/delete_icon.jpg' alt='Delete' onclick='DeleteTask(${_id})'></a>
                    </div>
            </li>`;
}

function changeStateLabel(_id, _state){
    let elem = document.getElementsByClassName(`completeTask${_id}`)[0];
    console.log(_id);
    console.log(elem);
    if(elem){
        if(_state == true){
            console.log("Checked working!");
            elem.classList.add('cross');
        }else{
            elem.classList.remove('cross');
        }   
    }
    
}
/*
<!-- <style>
.completeTask${_id} {
    text-decoration: none;
}
</style> -->
*/
// ========================================================================================

let items = [
    
];

let item_li = document.createElement('li');
let template_li = document.createElement('ul');
let state_checkbox;

function addTask(){
    let _text = document.getElementsByClassName('InputField');
    if(_text[0].value){
        console.log(_text[0].value);

        let itemId;
        if (items.length > 0) {
            itemId = items[items.length - 1].id+1;
        } else {
            itemId = 1;
        }

        
        //if(items == null){
            //items = [{id: 0, text: _text[0].value, state: false}]
        //}else{
            items.push({id: itemId, text: _text[0].value, state: false});
        //}
        console.log(items);
        addLocalStorage();

        template_li.innerHTML += template(itemId, false, _text[0].value);

        _text[0].value = '';

        let emptyElem = document.getElementById('empty');

        if(emptyElem){
            emptyElem.remove();
        }
        
    }else{
        alert("Поле не может быть пустым!");
    }
    
}

function sasasaddViewTask(_items, v){
    template_li.innerHTML += template(_items[v].id, items[v].state, items[v].text);
    article.append(template_li);
    changeStateLabel(_items[v].id, items[v].state);
}

function DeleteTask(_id){
    console.log(_id);

    let item = document.querySelector('li[itemid="'+_id+'"]');
    item.remove();

    console.log(item);

    items = items.filter(i => i.id != _id);
    //for(i in items){
        //if(items[i].id == _id){



            //if(items.length == 1){
                //for(i in items) items.splice(i, 1);
            //}
            //items.splice(i, 1);
            //console.log(items.length);
            //break;
        //}
        
    //}
    if(items.length == 0){
        template_li.innerHTML = "<div class='item' id='empty'><h3 align='center'>Empty...</h3></div>";
    }

    addLocalStorage();
   
}

function changeStateTask(_id){

    state_checkbox = document.getElementsByClassName('ch-box-complete-task'+_id)[0].checked;
    let elem = document.getElementsByClassName(`completeTask${_id}`)[0];
    console.log(_id+" "+state_checkbox+" "+elem);

    for(let i=0; i<items.length; i++){
        if(items[i].id == _id){
            items[i].state = state_checkbox;
            //console.log("Found!");
            console.log(items);
            break;
        }
    }

    console.log(items);
    addLocalStorage();

    //let rmText = document.
    if(state_checkbox){
        elem.classList.add('cross');
    }else{
        elem.classList.remove('cross');
    }
}

// ============================== Local Storage Functions =================================

function addLocalStorage(){
    if(items != null){
        let jsonItems = JSON.stringify(items);
        localStorage.setItem("local_data", jsonItems);
    }else{
        console.log(items+' is NULL!');
    }
    
}

function loadLocalStorage(){
    let _loadItems = JSON.parse(localStorage.getItem("local_data"));
    //console.log(_loadItems);
    return _loadItems;
}

// ========================================================================================
function viewItems(){
    items = loadLocalStorage();
    //console.log(_items);
    template_li.innerHTML = '';

    console.log(items);

    if(items.length == 0){
        console.log("Empty list of tasks!");
        template_li.innerHTML = "<div class='item' id='empty'><h3 align='center'>Empty...</h3></div>";
    }else{
        for(let i=0; i<items.length; i++){
            //console.log(items.length);
            //console.log(items[i].id);
            //addViewTask(items, items[i].id);

            template_li.innerHTML += template(items[i].id, items[i].state ,items[i].text);
            article.append(template_li);
            changeStateLabel(items[i].id, items[i].state);
        }  
        addLocalStorage();  
    }

    
    
    
}



viewItems();
