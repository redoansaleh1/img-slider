var images=["i1.jpg","i2.jpg","i3.jpg","i4.jpg","i5.jpg","i6.jpg","i7.jpg"];
var count=0;
var image=document.querySelector('#image');
var nextLimit=images.length-1;

function next()
{
  if(count!=nextLimit)
  {
  count++;
  image.src=images[count];
  }
  else
  {
  count=0;
  image.src = images[count];
  }
}
function prev()
{
  if(count!=0)
  {
  count--;
  image.src=images[count];
  }
  else
  {
    count=nextLimit;
    image.src=images[count];
  }
}