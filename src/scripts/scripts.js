const criminalRecords = document.querySelector('.criminal-record-list');
const makeVisibleContent = (element) =>{  
  element.style.display = 'flex';
  element.style.maxHeight = element.scrollHeight + "px";
}
const hideContent = (element) =>{  
  setTimeout(()=>{
    element.style.display =  'none';
  },300);  
  element.style.maxHeight = null;
}

criminalRecords.addEventListener('click', (e)=>{
  if(e.target.tagName === 'LI'){
    const content = e.target.lastElementChild;

    e.target.classList.toggle("active");   
            
    if (content.style.display === 'flex'){
      hideContent(content);
    } else {
      makeVisibleContent(content);
    } 
  }else{ 
    const content = e.target;

    e.target.parentNode.classList.toggle("active");

    if (content.style.display === 'flex'){
        hideContent(content);
    } else {
        makeVisibleContent(content);        
    } 
  }
  
})