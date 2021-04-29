
var velocity = 300;
var positionX = 0;
var positionY = 0;
var reverseX = false;
var reverseY = false;
var Xmin = 0;
var Xmax = 500;
var Ymin = 0;
var Ymax = 500;
var ball = document.getElementById('ball');

function moveBall()
{ 
if (positionX >= Xmax) 
    {   reverseX = true; }
if(positionX <= Xmin)
    {   reverseX = false; }
if (positionY >= Ymax)
   {   reverseY = true; }
if(positionY <= Ymin)
  {   reverseY = false; }
if (reverseX == false && reverseY == false)
{
  positionX = positionX + velocity;
  positionY = positionY ;
  ball.style.width = 50 + 'px';
  ball.style.height = 50 + 'px';
  ball.style.background = "red";
}
if (reverseX == true && reverseY == false)
{
  positionX = positionX - velocity;
  positionY = positionY  ;
  ball.style.width = 100 + 'px';
  ball.style.height = 100 + 'px';
}
if (reverseX == false && reverseY == true )
{
  positionY = positionY + velocity;
  positionX = positionX;
  ball.style.width = 50 + 'px';
  ball.style.height = 50 + 'px';
}
if (reverseX == true && reverseY == true)
{
  positionY = positionY - velocity;
  positionX = positionX;
  ball.style.width = 100 + 'px';
  ball.style.height = 100 + 'px';
}

ball.style.left = positionX + 'px';
ball.style.top = positionY + 'px'
}

setInterval(moveBall, 500);
