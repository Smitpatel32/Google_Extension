
const saves = document.getElementById("save")
let myLead = [];
const tabtn = document.getElementById('save-tab');
const inputEl = document.getElementById("input-el")
const ulel = document.getElementById("ul-el");
const delet = document.getElementById("delete");
saves.addEventListener('click',save);
tabtn.addEventListener('click',function(){
    chrome.tabs.query({active:true,currentWindow: true},function(x){
        myLead.push(x[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLead));
        render(myLead);
    })
});

//creating an newAr object from JSON obj;
let newAr = JSON.parse(localStorage.getItem("myLeads"));

// function for delete button;
delet.addEventListener("dblclick",()=>{
    localStorage.clear();
    myLead = [];
    render(myLead);
})

if(newAr){
    myLead = newAr;
    render(myLead);
}

// function for save button ;
function save(){
    myLead.push(inputEl.value);
    localStorage.setItem("myLeads",JSON.stringify(myLead));
    render(myLead);
    inputEl.value = "";
}

//function for rendering ther items of list ;
function render(leads){
       let listItem  = ""
       for ( let i = 0; i<leads.length; i++)
       {
           if(leads[i]!=="")
           {

               listItem += `
               <li>
                  <a target ="_blank" href="${leads[i]}">
               ${leads[i]}
                 </a>
               </li>`
            }
    }
    ulel.innerHTML = listItem
 }
    
