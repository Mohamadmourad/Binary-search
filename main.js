let divs = Array.from(document.getElementsByClassName('divs'));

window.onload = () => {
    listGenerator(divs,30);
};

let numsArray = [];
function generateSortedArray(length, min, max) {
    let randomArray = [];
    while (randomArray.length < length) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (randomArray.indexOf(randomNumber) === -1) {
            randomArray.push(randomNumber);
            numsArray.push(randomNumber);
        }
    }
    randomArray.sort((a, b) => a - b);
    numsArray.sort((a, b) => a - b);

    return randomArray;
}

function listGenerator(divs,max){
    let size = 0,counter = 0;
    divs.forEach((div) => {
        size++;
    });
    let array = generateSortedArray(size, 1, max);

    divs.forEach((div) => {
        div.innerHTML = array[counter++];
    });
}

let radioButtons = document.querySelectorAll('input[type="radio"]');//to chose the search mode
let selectedSearch = "linear";
    radioButtons.forEach(button => {
        button.addEventListener('change', () => {
            selectedSearch = button.value;
        });
    });

let target = "";
document.getElementById('start').onclick = () => {
 target = document.getElementById('target').value;
if(selectedSearch == "linear"){
    linearSearch();
}
else if(selectedSearch == "binary"){
    binarySearch();
}
};

function linearSearch(){
    let operation = 0;
    let counter = 0;
   let move = setInterval(() => {
        operation++;

        if(numsArray[counter] == target){
           divs[counter].style.backgroundColor = "green";
           if(operation > 1){
            let previous = counter -1;
            divs[previous].style.backgroundColor = "#F5F7F8";
        }
        document.getElementById('operation').innerHTML ="You made this much operations: " + operation;
           clearInterval(move);
        }
        else{
            divs[counter].style.backgroundColor = "red";
            if(operation > 1){
                let previous = counter -1;
                divs[previous].style.backgroundColor = "#F5F7F8";
            }
        }

         counter++;
        if(counter >= divs.length){
            document.getElementById('operation').innerHTML ="You made this much operations: " + operation;
            clearInterval(move);
        }
    },800);
}

function binarySearch(){
    let operation = 0;
    let counter = 0;
    let low = 0;high = divs.length;
   let move = setInterval(() => {
        operation++;
        if(low>=high){
            document.getElementById('operation').innerHTML ="You made this much operations: " + operation;
            clearInterval(move);
        }

        let mid = Math.floor((high+low)/2);
        divs[mid].style.backgroundColor = "blue";
        if(target == numsArray[mid]){
            divs[mid].style.backgroundColor = "green";
            document.getElementById('operation').innerHTML ="You made this much operations: " + operation;
            clearInterval(move);
        }

        else if(target > numsArray[mid]){
            for(let i = low;i<=mid;i++){
                divs[i].style.backgroundColor = "red";
            }
         low = mid +1;
         for(let i = low;i<=high;i++){
            divs[i].style.backgroundColor = "yellow";
        }
        }

        else if(target < numsArray[mid]){
            for(let i = mid;i<high;i++){
                divs[i].style.backgroundColor = "red";
            }

            high = mid-1;

            for(let i = low;i<=high;i++){
                divs[i].style.backgroundColor = "yellow";
            }
        }

        
    },1500);
}

function reset(){
    divs.forEach((div) =>{
     div.style.backgroundColor = "#F5F7F8";
    });
}


