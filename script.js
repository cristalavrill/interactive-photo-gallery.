function upDate(previewPic){

    console.log("Evento activado");
    console.log(previewPic.alt);
    console.log(previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

}

function undo(){

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML = "Pase el ratón por encima de una imagen para mostrarla aquí";

}
