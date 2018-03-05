var header1= document.querySelector("#hd1");
var header2= document.querySelector("#hd2");
var but1 = document.querySelector("#button1");
var but2 = document.querySelector("#button2");
var input = document.querySelector("input");
var input1 = document.querySelector("#inputnum");


var resetbut= document.querySelector("#resetbutton");
var head1=0;
var head2=0;
var winningscore= input.value;

var gameover= false;

but1.addEventListener("click",function(){	
	
	if(head1<winningscore && gameover==false){
		head1++;
		header1.textContent=head1;
	if(head1==winningscore){
		header1.classList.add("mystyle");
		gameover= true;
	}
}
	}
)

but2.addEventListener("click",function(){

	if(head2<winningscore && gameover==false){
		head2++;
		header2.textContent=head2;
	if(head2==winningscore){
		header2.classList.add("mystyle");
		gameover= true;
	}
	}
	

	}
)

input.addEventListener("change",function(){

	input1.textContent= input.value;
	reset()
})

function reset(){
winningscore=input.value;
	head1=0;
	head2=0;
	header1.textContent=0;
	header2.textContent=0;
	gameover = false;
	header1.classList.remove("mystyle");
	header2.classList.remove("mystyle");

	
}



resetbut.addEventListener("click", function(){
	winningscore=input.value;
	head1=0;
	head2=0;
	header1.textContent=0;
	header2.textContent=0;
	gameover = false;
	header1.classList.remove("mystyle");
	header2.classList.remove("mystyle");

})