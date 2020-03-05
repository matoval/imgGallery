let imageList = [];

function listenForClick() {
  let images = document.querySelectorAll('.image');
  for (let i = 0; i < 6; i++) {
    imageList = [...imageList, images[i].id];
    console.log(imageList);
  }
  for (img in imageList) {
    document.getElementById(imageList[img]).addEventListener('click',function() {
      clicked(this);
    })   
      
  }
  
}




function clicked(id) {
  console.log(id.id);
  const overlay = document.getElementById('overlay');
  overlay.innerHTML = `<img src="./img/${id.id}.jpg" alt=""><button id="close">X</button>`;
  overlay.style.display = 'flex';

  document.getElementById('close').addEventListener('click', close);
  function close() {
    document.getElementById('overlay').style.display = "none";
  }
}



listenForClick();