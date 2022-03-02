
//counter
const counter = document.querySelector("#counter");
let num = parseInt(counter.innerText,10);
let paused = false;
const commentText = document.querySelector("#comment-input");
const form = document.querySelector("form");
const submitBttn = document.querySelector("#submit");
const commentList = document.querySelector("#list");
const likesBttn = document.querySelector("#heart");
const likesList = document.querySelector(".likes");

function count(num){
    num++;
    counter.innerText = num;
};

if(num > 10) {
    !paused;
}
    while(!paused) {
        setTimeout(count(num),1000);
    }


//pause button
//disables everything else 
// 

const pauseBttn = document.querySelector("#pause");

pauseBttn.addEventListener("click",(e) => {
    console.log("pause clicked");
    if(pauseBttn.innerText === "pause"){
    paused = true;
    likesBttn.disabled = true;
    plusBttn.disabled = true;
    minusBttn.disabled = true;
    submitBttn.disabled = true;
    pauseBttn.innerText = "resume";
    } else {
        paused = false;
        likesBttn.disabled = false;
        plusBttn.disabled = false;
        minusBttn.disabled = false;
        submitBttn.disabled = false;
        pauseBttn.innerText = "pause";
    }
})

//plus & minus buttons that incrememt or decrement counter
//click event
const plusBttn = document.querySelector("#plus");
const minusBttn = document.querySelector("#minus");

plusBttn.addEventListener("click",(e) => {
    console.log("plus clicked");
    ++num
    counter.innerText=num;
})

minusBttn.addEventListener("click",(e) => {
    console.log("minus clicked");
    --num
    counter.innerText=num;
})

//like button that adds a like
//logs number liked to ul


likesBttn.addEventListener("click",e => addLikes(e)); 

function addLikes(e){
    let numLikes = 0
    console.log("likes clicked")
    numLikes++;
    const likeLog = document.createElement("li"); 
    likeLog.innerText = `${num} has been liked ${numLikes} times`;
    likesList.appendChild(likeLog);
    return numLikes; 
}


//a comment box that adds comments when submitted 


form.addEventListener("submit", (e) => addComment(e)); 

function addComment(event){0
    event.preventDefault();
    const commentLog = document.createElement("p"); 
    commentLog.innerText = commentText.value;
    commentList.appendChild(commentLog);
    commentText.innerText =" ";
}




