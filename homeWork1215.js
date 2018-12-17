// иммитация класса
var timer		 = 30;
	ingredients  = 0;
	power      	 = 0;
	flag         = false;

function Cooker(power, volume, internalLayer, shellMaterial){
	var p       	= this;
	//свойства
	p.power 		= power;
	p.volume 		= volume;
	p.internalLayer = internalLayer;
	p.shellMaterial = shellMaterial;

	p.heating = function(){
		if(ingredients && power >= 200 && power <= 250){
			console.log("Heating is started");
			flag = true;
		}
		else if(power >= 200 && power <= 250){
			console.log("Can't start the program with empty bowl")
		}
		else{
			console.log("Check power voltage")
		};
		/*if(flag == true){
			$(".btn").click(p.heating);
			console.log("Heating is stopped");
			flag = false;
		}*///повторное нажатие на кнопку Start - остановка программы????

	}
	$(".btn").click(p.heating);
	

	p.timer = function(){
		console.log("The program will start in " + timer + " minutes");
	}
	$(".btn1").click(p.timer);

	/*p.multipleCommand(){
		$(".btn1").click(p.timer) && $(".btn").click(p.heating) ? "Heating will start in " + timer + " minutes" : $(".btn1").click(p.timer);
	}*/
	// если кнопка таймер нажата, нажатие кнопки старт выдаст сообщение: разогрев начнется через N минут 

 	p.stewing = function(){
 		var temperature = 60;
 		console.log("Stewing is started");	
 	}
 	$(".btn2").click(p.stewing);
}


console.log($(".btn"));

var Radmond = new Cooker(1000, 3, "ceramic", "plastic");
console.log(Radmond);

var Samsung = new Cooker(2000, 6, "teflon", "metal");
console.log(Samsung);

//как мне привязать методы к конкретному объекту, который я создала на базе класса???
//привязать метод timer к другому методу, например, чтоб разогрев начинался через 30 мин
//дистанционный запуск программы с телефона
