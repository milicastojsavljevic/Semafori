function semafor(){
	var boje = document.getElementsByClassName('boje');
	boje[0].style.background='red';
	boje[1].style.background='gray';
	boje[2].style.background='gray';

	function changeToYellow(){
		boje[1].style.background='yellow';
	}
		function changeToGreen(){
			boje[0].style.background='gray';
			boje[1].style.background='gray';
			boje[2].style.background='green';
		
	}


		function changeToYellowStop(){
			
			boje[1].style.background='yellow';
			boje[2].style.background='grey';
		
	}
	function changeToRed(){
		boje[0].style.background='red';
		boje[1].style.background='gray';
	}
	
	var x=setTimeout(changeToYellow,5000);
	var y=setTimeout(changeToGreen,8000);
	var z=setTimeout(changeToYellowStop,13000);
	var d=setTimeout(changeToRed,21000);


	
	var start=setInterval(semafor,21000);
}
semafor();

/*uspela, jos samo da napravim za pesake*/
function semaforZaPesake(){
	var boje2 = document.getElementsByClassName('boje2');
	boje2[0].style.background='gray';
	boje2[1].style.background='green';
	
function changeToRedP(){
	boje2[0].style.background='red';
	boje2[1].style.background='gray';

}
var a = setTimeout(changeToRedP,6000);

var stop = setInterval(semaforZaPesake, 21000);
	}
	semaforZaPesake();
