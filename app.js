let letsBtn = document.querySelector(".lets_talk-button");
let formBox = document.querySelector(".form");
let backFon = document.querySelector(".overlay");
let stopBody = document.querySelector("body");
let inputName = document.getElementById('inputNameId');
let inputEmail = document.getElementById('inputEmailId');
let inputTextArea = document.getElementById('inputTextareaId');
let modalSucsess = document.querySelector('.modalBox');
let modalButton = document.querySelector('.modalButton');

letsBtn.addEventListener("click", e => {
  formBox.style.display = "flex";
  backFon.style.display = "block";
  stopBody.style.overflow = "hidden";
});


async function sendMsg(msg) {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(msg),
    });
    // костыль чтобы закрывалась
    response = true
    if (response) {
      // тут закрываю модалку
       formBox.style.display = "none";
        backFon.style.display = "none";
        stopBody.style.overflow = "visible";
        // открывает модалку"успешно передано" и закрывает
        modalSucsess.style.display ="flex";
        modalButton.addEventListener('click', e =>{
          modalSucsess.style.display ="none";
        });
      }
  } catch (err) {
    console.log(err);
  }
}

formBox.addEventListener('submit', e => {
  e.preventDefault();


  let validate = false;
  if (inputName.value) {
    validate = true;
  } else {
    // console.log("имя",inputName.value);
    //найти ближайший лейбл и повесить эрор класс
    let getClass = document.querySelector('.labelName');
    getClass.classList.add('labelError');
  }
 
  if (inputEmail.value) {
    validate = true;
  } else {
    
    let getEmailClass = document.querySelector(".emailName");
    getEmailClass.classList.add('labelError');
  }

  
  if (inputTextArea.value) {
    validate = true;
  } else {
    let getTextareaClass = document.querySelector(".inputTextarea");
    getTextareaClass.classList.add('labelError');
  }


  if (validate) {
    let msg = {
      inputName: inputName.value,
      inputEmail: inputEmail.value,
      inputTextArea: inputTextArea.value,
    }
    sendMsg(msg);
  }

});



