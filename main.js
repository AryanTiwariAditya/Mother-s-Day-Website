var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('VID-20220508-WA0010.mp4', function(Img) {
    block_image_object = Img;
    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(610);
    block_image_object.set({
    top:0,
    left:0
    });
    canvas.add(block_image_object);
    });

}

function playSound(){  
    x.play();
}
