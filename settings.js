document.getElementById('exit').onclick = () =>{
document.getElementById('settings').style.display="none";
};

document.getElementById('settingIcon').onclick = () =>{
    document.getElementById('settings').style.display="flex";
};

let radioButtons2 = document.getElementsByClassName("type");//to chose the search mode
let selectedSearch2 = "sorted";
    radioButtons.forEach(button => {
        button.addEventListener('change', () => {
            selectedSearch2 = button.value;
        });
    });

document.getElementById('applySettings').onclick = () =>{
    document.getElementById('settings').style.display="none";
    if(selectedSearch == "binary"){
        selectedSearch = "binary";
    }
    else{
        selectedSearch = "linear";
    }
    let size = document.getElementById('arraySize').value - divs.length;
    let table = document.getElementById('table');
    for(let i = 0;i<size;i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("divs");
        table.appendChild(newDiv);
    }
    divs = Array.from(document.getElementsByClassName('divs'));
    numsArray = [];
    if(selectedSearch2=="sorted"){
        let sortedCount = 1;
       divs.forEach((div) =>{
        numsArray.push(sortedCount);
         div.innerHTML= sortedCount++;
       });
    }
    else if(selectedSearch2 == "random"){
        listGenerator(divs,divs.length + 20);
    }
};
    
