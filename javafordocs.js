function booktitle() {
    const titleofbook = document.getElementById("titleofwriting")
    const titleforbook = document.getElementById("titleforboooook")
    const titleofstory = titleofbook.value
    const booktitlefrombook = document.getElementById("mytitleofsdtor")
    const mybooktitle = document.getElementById("titleforyourveryownbook")
    titleforbook.textContent = titleofstory;
    mybooktitle.textContent = titleofstory;
    localStorage.setItem("titleofstoryofbook", titleofstory)
};
window.addEventListener("load", (event) => {
    const titlefrombook = document.getElementById("titleofwriting")
    const titleforyourbook = localStorage.getItem("titleofstoryofbook")
    const booktitle = document.getElementById("titleforboooook")
    const myveryowntitle = document.getElementById("titleforyourveryownbook");
    titlefrombook.textContent = titleforyourbook;
    myveryowntitle.textContent = titleforyourbook;
    booktitle.textContent = titleforyourbook;
});

const textarea = document.getElementById("ThisText");
const button = document.getElementById("resetarea");

button.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset? Doing this will delete EVERYTHING!")) {
        textarea.value = "";
        valuesave()
        var savedropdown = document.getElementById("FileTools");
        savedropdown.classList.remove('show');
    } else {
        console.log('canceled')
    }
    
});
        
        
function valuesave() {
    const inputsave = document.getElementById("ThisText");
    const inputvalue = inputsave.value;
    var dropdownofsave = document.getElementById("FileTools");
    dropdownofsave.classList.remove('show');

    localStorage.setItem("savedinput", inputvalue)
    

};
document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 's') {
        event.preventDefault();
        valuesave()
        
}});


window.addEventListener("load", (event) => {
    const inputoft = localStorage.getItem("savedinput")
    document.getElementById('ThisText').textContent = inputoft;
});

        /* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function FileFunction() {
            document.getElementById("FileTools").classList.toggle("show");
        }
        window.addEventListener('keydown', e => {
            if (e.key == "Escape") {
                var myDropdown = document.getElementById("FileTools");
                if (myDropdown.classList.contains('show')) {
                    myDropdown.classList.remove('show');
            }}});
        

const pause = document.getElementById("pause");
const stopwatchstart = document.getElementById("Watchstarter")
const stopwatch = document.getElementById("timer")
let timewatch = null;
stopwatchstart.addEventListener("click", () => {
    
    const interval = setInterval(() => {
        timewatch++
        stopwatch.innerHTML = timewatch
        
        
    }, 1000);
    
});
pause.addEventListener("click", () => {
    
});

