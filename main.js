feather.replace()

const logo_link = document.querySelector('.show_links')
const logo_links_btn = document.querySelector('#logo_links_btn') 
const chevron = document.querySelector('.wrap_aside ul li a .feather-chevron-up ')

const feather_file = document.querySelector('.feather-file-text')


const user_dropDown = document.querySelector('.user_dropdown')

const chevron_down = document.querySelector('.feather-chevron-down')

const main_page = document.querySelector('.main_wrapper')



logo_links_btn.addEventListener('click', ()=> {
    logo_link.classList.toggle('show')
    chevron.classList.toggle('active')
    feather_file.classList.toggle('strokeWidth')
})

chevron_down.addEventListener('click', ()=> {
    user_dropDown.classList.toggle('showUserDropdown')
    chevron_down.classList.toggle('rotateChevron')
})





let suggestions = [
    "John Doe &#x22C5 Cashier",
    "Invocie214.pdf &#x22C5 Reports",
    "Financial &#x22C5 statements",
];


const featherX = document.querySelector('#featherX')
console.log(featherX)
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("#main_search");
const suggBox = searchWrapper.querySelector(".autocom-box");

// console.log(searchWrapper)
inputBox.onkeyup = (e)=>{
    console.log(e)
    let userData = e.target.value; 
    let emptyArray = [];
    if(userData){
      
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
          
            return data =  `<li>${data}</li>`;
        });
        searchWrapper.classList.add("activeSearch"); 
        showSuggestions(emptyArray);
        main_page.addEventListener('click', () => {
            searchWrapper.classList.remove("activeSearch")
            inputBox.value = ""
          
        })

        featherX.addEventListener('click', ()=> {
            searchWrapper.classList.remove("activeSearch")
            inputBox.value = ""
        })
    }else{
        searchWrapper.classList.remove("activeSearch"); 
        main_page.addEventListener('click', () => {
            searchWrapper.classList.remove("activeSearch")
            inputBox.value = ""
        })
        featherX.addEventListener('click', ()=> {
            searchWrapper.classList.remove("activeSearch")
            inputBox.value = ""
        })
    inputBox.value = ""
       
    }
}


function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
     console.log('opened')
    }else{
      listData = list.join('');
      console.log("closed")
    }
    suggBox.innerHTML = listData;

}

main_page.addEventListener('click', () => {
    user_dropDown.classList.remove('showUserDropdown')
  
})




const sectionDropdown = document.querySelector('[data-editable="editable-section"]')
const chevronButtonDown = document.querySelector('#chevron_button_down_')
const chevronDownSvg = document.querySelector('[data-chevronColor]')


chevronButtonDown.addEventListener('click', ()=> {
    sectionDropdown.classList.toggle('showSection')
    chevronButtonDown.classList.toggle('chevronSwitch')
    chevronDownSvg.classList.toggle('activateChevron')
})


