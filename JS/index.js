/* for typewriter effect */
let i = 0;
let j = 0;
let text1 = 'Hi, my name is Divyansh Shukla, and I\'m a working professional in Consulting by day, and a Web Developer/Programmer by night.'
let speed = 40;
function typeWriter()
 {
	if(i<text1.length)
	{
		document.getElementById("typewritereffect1").innerHTML += text1.charAt(i);
		i++;
		setTimeout(typeWriter,speed);
	}
}

/* for making experience timeline responsive */

window.addEventListener('load',function(event)
{
	let line = document.getElementById("resp1");
	let circle1 = document.getElementById("resp2");
	let circle2 = document.getElementById("resp3");
	let circle3 = document.getElementById("resp5");
	let divtimeline = document.getElementById("resp4");
	let screenWidth1 = divtimeline.offsetWidth/2.54;
	line.setAttribute("x1",screenWidth1);
	line.setAttribute("x2",screenWidth1);
	circle1.setAttribute("cx",screenWidth1);
	circle1.setAttribute("r","8");
	circle2.setAttribute("cx",screenWidth1);
	circle2.setAttribute("r","8");
	circle3.setAttribute("cx",screenWidth1);
	circle3.setAttribute("r","8");

	/* to collapse timeline if screen width is less than 750, number defined in col-md class*/
	let checkelement = document.getElementById("screen");
	let checkwidth = checkelement.offsetWidth;
	if(checkwidth<=751)
	{
		divtimeline.style.visibility = 'hidden';
	}
	else
	{
		divtimeline.style.visibility = 'visible';
	}
});



window.addEventListener('resize',function(event)
{
	let line = document.getElementById("resp1");
	let circle1 = document.getElementById("resp2");
	let circle2 = document.getElementById("resp3");
	let circle3 = document.getElementById("resp5");	
	let divtimeline = document.getElementById("resp4");
	let screenWidth1 = divtimeline.offsetWidth/2.54;
	line.setAttribute("x1",screenWidth1);
	line.setAttribute("x2",screenWidth1);
	circle1.setAttribute("cx",screenWidth1);
	circle1.setAttribute("r","8");
	circle2.setAttribute("cx",screenWidth1);
	circle2.setAttribute("r","8");
	circle3.setAttribute("cx",screenWidth1);
	circle3.setAttribute("r","8");
	/* to collapse timeline if screen width is less than 750, number defined in col-md class*/
	let checkelement = document.getElementById("screen");
	let checkwidth = checkelement.offsetWidth;
	if(checkwidth<=751)
	{
		divtimeline.style.visibility = 'hidden';
	}
	else
	{
		divtimeline.style.visibility = 'visible';
	}
});


/*For Scroll Progress Bar Above */
window.onscroll = function(){progressFunction()};
function progressFunction()
{
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = (winScroll/height)*100;
	document.getElementById("myBar").style.width = scrolled + "%";
}

/*smooth scroll*/
$(document).ready(function()
{
	$('a').on('click',function(event){
		if(this.hash !== "")
		{
			event.preventDefault();
			let hash = this.hash;
			$('html','body').animate({
				scrollTop: $(hash).offset().top} , 800, function(){
					window.location.hash = hash;
			});
		}
	});
});
