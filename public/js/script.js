const canvas = document.getElementById('canvas');

const ctx = canvas.getContext("2d");
const reader = new FileReader();

const img = new Image();



const uploadImage = e => {
    //console.log(e)
    reader.onload = () => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0 /*,canvas.width/2, canvas. height/2*/);
        
        }
        img.src = reader.result;
        
    }
    reader.readAsDataURL(e.target.files[0]);
   
    // console.log(reader);
}
const imageData = ctx.getImageData(0,0, canvas.width, canvas.height);
console.log(imageData);

const imageLoader = document.getElementById('uploader');
imageLoader.addEventListener('change', uploadImage);

//greyscale effect
const greyscale = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width , canvas.height);
    const data = imageData.data;
  
    for (let i = 0; i<data.length; i += 4)
    {
        const grey = data[i] *0.21 + data[i+1]*0.21 + data[i+2]*0.71 + data[+3]*0.07;
        data[i] = grey;
        data[i+1] = grey;
        data[i+2] = grey;
      

    }
    ctx.putImageData(imageData, 0,0);
 //   console.log(imageData);
}
//Sepia effect
const sepia = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width , canvas.height);
    const data = imageData.data;
  
    for (let i = 0; i<data.length; i += 4)
    {
        const grey = data[i] *0.21 + data[i+1]*0.21 + data[i+2]*0.71 + data[+3]*0.07;
        data[i] = grey + 95;
        data[i+1] = grey +58;
        data[i+2] = grey;
      

    }
    ctx.putImageData(imageData, 0,0);
  //  console.log(imageData);
}


//Invert effect
const invert = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width , canvas.height);
    const data = imageData.data;
  
    for (let i = 0; i<data.length; i += 4)
    {
       
        data[i] = 255-data[i];
        data[i+1] = 255-data[i+1];
        data[i+2] = 255-data[i+2];      

    }
    ctx.putImageData(imageData, 0,0);
    //console.log(imageData);
}


//RBG effect
const rbg = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width , canvas.height);
    const data = imageData.data;
  
    for (let i = 0; i<data.length; i += 4)
    {
       const green = data[i+1];
        data[i] = data[i];
        data[i+1] = data[i+2];
        data[i+2] = data[green];      

    }
    ctx.putImageData(imageData, 0,0);
    //console.log(imageData);
}

//bgr effect
const bgr = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width , canvas.height);
    const data = imageData.data;
  
    for (let i = 0; i<data.length; i += 4)
    {
       const red = data[i];
        data[i] = data[i+2];
        data[i+1] = data[i+1];
        data[i+2] = data[red];      

    }
    ctx.putImageData(imageData, 0,0);
    //console.log(imageData);
}


//gbr effect
const gbr = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width , canvas.height);
    const data = imageData.data;
  
    for (let i = 0; i<data.length; i += 4)
    {
       const red = data[i];
        data[i] = data[i+1];
        data[i+1] = data[i+2];
        data[i+2] = data[red];      

    }
    ctx.putImageData(imageData, 0,0);
    //console.log(imageData);
}

//grb effect
const grb = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width , canvas.height);
    const data = imageData.data;
  
    for (let i = 0; i<data.length; i += 4)
    {
       const red = data[i];
        data[i] = data[i+1];
        data[i+1] = red;
        data[i+2] = data[i+2];      

    }
    ctx.putImageData(imageData, 0,0);
    //console.log(imageData);
}


  /**
     * Bright 
     */
    const makeBright= () =>{
        var modifiedImageData = this.imageData;
        for(var i=0; i < modifiedImageData.data.length; i = i + 4) {
            var pixel = [];
            var red = modifiedImageData.data[i];
            var green = modifiedImageData.data[i + 1];
            var blue = modifiedImageData.data[i + 2];
            var alpha = modifiedImageData.data[i + 3];

            modifiedImageData.data[i] = red + 10;
            modifiedImageData.data[i + 1] = green + 10;
            modifiedImageData.data[i + 2] = blue + 10;
            modifiedImageData.data[i + 3] = alpha;
        }
     ctx.putImageData(modifiedImageData, 0 ,0, 0, 0);
    }

const clearChanges = () => {
    img.src = reader.result;
}

//download function
function downloadJpg(){

    var image = canvas.toDataURL("image/jpg");  // here is the most important part because if you dont replace you will get a DOM 18 exception.

    console.log(image);
    window.location.href= image; // it will save locally
    var a = document.createElement('a');
    a.href = image;
    a.download = 'image.jpg'
    a.click();
}

function downloadPng(){

    var image = canvas.toDataURL("image/png");  // here is the most important part because if you dont replace you will get a DOM 18 exception.

    console.log(image);
    window.location.href= image; // it will save locally
    var a = document.createElement('a');
    a.href = image;
    a.download = 'image.png'
    a.click();
}

document.querySelectorAll('button')[0].addEventListener('click', greyscale);
document.querySelectorAll('button')[1].addEventListener('click', sepia);
document.querySelectorAll('button')[2].addEventListener('click', invert);
document.querySelectorAll('button')[3].addEventListener('click', rbg);
document.querySelectorAll('button')[4].addEventListener('click', bgr);
document.querySelectorAll('button')[5].addEventListener('click', gbr);
document.querySelectorAll('button')[6].addEventListener('click', grb);
document.querySelectorAll('button')[7].addEventListener('click', makeBright);
document.querySelectorAll('button')[8].addEventListener('click', clearChanges);
document.querySelectorAll('button')[9].addEventListener('click', downloadJpg);




/*
ctx.fillText("Canvas Text!", 100, 50)
//ctx.strokeRect(0,0, canvas.width, canvas.height, 100, 100)
ctx.fillStyle = '#eeeddd';
ctx.fillRect(0, 0, 50, 50)

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(canvas.width/2, canvas. height/2);
ctx.lineTo(250, 50);
ctx.lineTo(250, 100);
ctx.closePath();
ctx.stroke();
*/