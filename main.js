//Criar uma referência para tela

canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d");


//Dê altura e largura específicas para a imagem do carro
greencar_width = 75;
greencar_height = 100;
greencar_X = 5;
greencar_Y = 225;
backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
	
function add() {
	//carregar carro e imagens de fundo na tela.
     background_imgTag = new Image();
	 background_imgTag.onload = uploadBackground;
	 background_imgTag.src = backgroundImage;

     greencar_imgTag = new Image();
	 greencar_imgTag.onload = uploadGreenCar;
	 greencar_imgTag.src = greencarImage;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);


}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
	ctx.drawImage(greencar_imgTag, greencar_X, greencar_Y, greencar_width, greencar_height);

	
}
function up()
{
	//Definir função para mover o carro para cima
	if(greencar_Y >=0){
		greencar_Y = greencar_Y - 10;
		console.log("Quando a ⬆ for pressionada, X =" + greencar_X + ", y =" +greencar_Y)
		uploadBackground()
		uploadGreenCar()
	}
}

function down()
{
	//Definir função para mover o carro para baixo
	if(greencar_Y <=300){
		greencar_Y = greencar_Y + 10;
		console.log("Quando a ⬇ for pressionada, X =" + greencar_X + ", y =" +greencar_Y)
		uploadBackground()
		uploadGreenCar()
	}
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(greencar_X >=0){
		greencar_X = greencar_X - 10;
		console.log("Quando a ⬅ for pressionada, X =" + greencar_X + ", y =" +greencar_Y)
		uploadBackground()
		uploadGreenCar()
	}
}

function right()
{
	//Definir função para mover o lado direito do carro
	if(greencar_X <=795){
		greencar_X = greencar_X + 10;
		console.log("Quando a ➡ for pressionada, X =" + greencar_X + ", y =" +greencar_Y)
		uploadBackground()
		uploadGreenCar()
	}
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	console.log(e)
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}
