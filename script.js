const inputUser=document.querySelector('.textUser')
const button=document.querySelector('.btn')
const ulUser=document.querySelector('.listUser')
button.addEventListener('click',()=>{
     const item=document.createElement('li')
     item.innerText=inputUser.value;
    if(inputUser.value === 0){
      return false;
    }
    ulUser.appendChild(item);
    item.classList.add('toDoadded');
    inputUser.value=' ';
    item.addEventListener('click',()=>{
        item.classList.add('toDotwoAdded');
    })
    item.addEventListener('dblclick',()=>{
       ulUser.removeChild(item);
    })
    })
    