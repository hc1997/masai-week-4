var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}








function getMovieDetails(displayFunction,title,year)
{
    var result = null;
    var xhr = new XMLHttpRequest();
    title = title.split(' ').join('+')
    var url = 'http://www.omdbapi.com/?apikey=21e282f2&t='+title+'+&y='+year;
    console.log(url)
    xhr.open('GET', url);
    xhr.send()
    xhr.onload = function ()
    {
    if(xhr.status == 200)
    {
    result = xhr.response;  
    displayFunction(result);
    }
    else
    {
        
       console.log("Error Code is:" + xhr.status);
    }
        var string ="";
        var imagee=JSON.parse(result);
        for(key in imagee)
        {
            string+=key + ":" + imagee[key]+ "\n";
            if(key=="Poster")
            {
                var pic= document.createElement('img');
                var parent1=document.querySelector(".row")
                pic.setAttribute('src',imagee[key]);
                pic.textContent="Poster:"
                parent1.appendChild(pic);

            }
        }
        console.log(string)
        print(string)

    } 
        
}
  
    function print(haren)
    {
        var child1=document.createElement('h5');
        var parent1=document.querySelector(".row")
        child1.setAttribute('class','classse')
        parent1.appendChild(child1);
        child1.textContent= haren;
        
    }
   var printMovieDetails  = function (input)
   {
   var row =  document.querySelector('.row');
   var display = document.createElement('p');
   if(input == null)
   {
       display.textContent = 'Error! No city data received or invalid request!';
   }
   row.append(display);
   }
   var displayBtn = document.querySelector('#search')
   displayBtn.addEventListener('click',function()
   {
var title = document.querySelector('#title').value 
var year = document .querySelector('#year').value

getMovieDetails(printMovieDetails,title,year);
});



function getIdDetails(displayFunction,idd)
{
    var result = null;
    var xhr = new XMLHttpRequest();
    //title = title.split(' ').join('+')
    var url = 'http://www.omdbapi.com/?apikey=21e282f2&i='+idd;
    console.log(url)
    xhr.open('GET', url);
    xhr.send()
    xhr.onload = function ()
    {
    if(xhr.status == 200)
    {
    result = xhr.response;  
    displayFunction(result);
    }
    else
    {
       console.log("Error Code is:" + xhr.status);
    }
    var string ="";
        var imagee=JSON.parse(result);
        for(key in imagee)
        {
            string+=key + ":" + imagee[key]+ "\n";
            if(key=="Poster")
            {
                var pic= document.createElement('img');
                var parent1=document.querySelector(".row")
                pic.setAttribute('src',imagee[key]);
                pic.textContent="Poster:"
                parent1.appendChild(pic);

            }
        }
        console.log(string)
        print(string)

    } 

}
function print(haren)
{
    var child1=document.createElement('h5');
    var parent1=document.querySelector(".row")
    child1.setAttribute('class','classse')
    parent1.appendChild(child1);
    child1.textContent= haren;
    
}
   var printIdDetails  = function (input)
   {
   var row2=  document.querySelector('.row2');
   var display = document.createElement('p');
   if(input == null)
   {
       display.textContent = 'Error! No city data received or invalid request!';
   }
   
   row2.append(display);
   }
   var displayBtn = document.querySelector('#searchh')
   displayBtn.addEventListener('click',function()
   {
   var idd = document.querySelector('#idd').value 

   getIdDetails(printIdDetails,idd);
});