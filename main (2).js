var canvas=new fabric.Canvas("myCanvas");
player_x=200;
player_y=200;
block_image_width=60;
block_image_height=60;
var player_object="";
var block_image_object="";
function player_update()
{
	fabric.Image.fromURL("skn.webp", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}
window.addEventListener("keydown",hola);
function hola(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=="40"){
console.log(
"down"
)
down()
}
if(keyPressed=="38"){
console.log("up");
holi();
}
if(keyPressed=="39"){console.log("right");
right();
}
if(keyPressed=="37"){console.log("left");
left();
}
}
function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function holi()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function right()
{
	if(player_x <=800)
	{
		player_x = player_x + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + player_x + " , Y = "+player_x);
		canvas.remove(player_object);
		player_update();
	}
}
function left()
{
	if(player_x >=0)
	{
		player_x = player_x - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + player_x + " , Y = "+player_x);
		canvas.remove(player_object);
		player_update();
	}
}