function _load() {
    /*
    todo letrehozas
    10 sor checkbox ,input, btn_delete
    checkbox
    input
    delete button
    
    vegrehajtasi terv:
    0. get root id DIV
    1. create template checkbox
    2. inputNr.  elem szam a for cicklusnak ( ennzisyer fogjuk be insertelni a root div-be a templeta checkboc)
    3. add new task button after end id=btn_AddNewTask
    4. addbtnaddEventlitener clicjk
    5. gyujtsuk ki ay osszes btn_delete-et
    6. adjunk onclick esement az osszes btn_delete-re
    */


    //lekerjuk a root id-s div-et a rootE-be
    let rootE = document.getElementById('root');
    // templeta db szam
    let inputNr = 10;
 
    //input template
    let inputDIVtemplate = `
                                <div>
                                  <input type="checkbox" >
                                  <input type="text" value="" placeholder="enter your task name" >
                                  <button class="btn_delete" > Delete </button>
                                </div>
                                `;
    // add new task btn template
     let btn_addnewHTML = `<br><button id="btn_AddNewTask"> Add new task </button>`;


    let i=0;

    // adding inputNr times(10) inputDIVtemplate
    for (i = 0; i < inputNr; i++) {
        rootE.insertAdjacentHTML( 'beforeend', inputDIVtemplate );
    }

    // Add btn_new_task button-t
    rootE.insertAdjacentHTML("afterend", btn_addnewHTML);

    // function for delete task button click
    function delete_task(e) {
        console.log('delete task btn pressed...');
        e.target.parentElement.remove();

    }
    // ossze gyujtsuk az osszes delet btn-okat
    let delete_btns = document.querySelectorAll('.btn_delete');

    //add click event listener on all delete button
    for (i = 0; i < delete_btns.length; i++) {
        delete_btns[i].addEventListener('click', delete_task);
    }

    /* btn_AddNewTask function (which is added to btn_AddNewTask click */
    function btn_AddNewTask() {
        console.log('add new task btn pressed...');
        i = document.querySelectorAll('.btn_delete').length;
      //  i = delete_btns.length + 1;
        rootE.insertAdjacentHTML( 'beforeend', inputDIVtemplate );
        
        
        let delete_btns = document.querySelectorAll('.btn_delete');

    //add click event listener on all delete button
    for (i = 0; i < delete_btns.length; i++) {
        delete_btns[i].addEventListener('click', delete_task);
    }

    }
    // add new task function added to click btn_AddNewTask
    document.getElementById('btn_AddNewTask').addEventListener('click', btn_AddNewTask);

}
window.addEventListener(`load`, _load);