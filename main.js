
var lastx, lasty;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
var width=screen.width;

var new_width=screen.width-70;
var new_height=screen.height-300;

if (width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e)
    {

        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        lastx=e.touches[0].clientX-offsetLeft;
        lasty=e.touches[0].clientY-offsetTop;
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         currentx = e.touches[0].clientX - canvas.offsetLeft;
         currenty = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastx + "y = " + lasty);
        ctx.moveTo(lastx, lasty);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + currentx + "y = " + currenty);
        ctx.lineTo(currentx, currenty);
        ctx.stroke();
        

        lastx = currentx; 
        lasty = currenty;
    }

function clearing(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}

