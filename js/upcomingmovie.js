var a,b,c,d,e,f,g,h,i,j,k,l;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
         document.getElementById("demo").innerHTML = myObj.results[0].title;
         
         document.getElementById("demo1").innerHTML = myObj.results[1].title;
         document.getElementById("demo2").innerHTML = myObj.results[2].title;
         document.getElementById("demo3").innerHTML = myObj.results[3].title;
         document.getElementById("demo4").innerHTML = myObj.results[4].title;
         document.getElementById("demo5").innerHTML = myObj.results[5].title;
         document.getElementById("demo6").innerHTML = myObj.results[6].title;
         document.getElementById("demo7").innerHTML = myObj.results[7].title;
         document.getElementById("demo8").innerHTML = myObj.results[8].title;
         document.getElementById("demo9").innerHTML = myObj.results[9].title;
         document.getElementById("demo10").innerHTML = myObj.results[10].title;
         document.getElementById("demo11").innerHTML = myObj.results[11].title;
         var imgurl="https://image.tmdb.org/t/p/w500"+myObj.results[0].poster_path;
         var imgurl1="https://image.tmdb.org/t/p/w500"+myObj.results[1].poster_path;
         var imgurl2="https://image.tmdb.org/t/p/w500"+myObj.results[2].poster_path;
         var imgurl3="https://image.tmdb.org/t/p/w500"+myObj.results[3].poster_path;
         var imgurl4="https://image.tmdb.org/t/p/w500"+myObj.results[4].poster_path;
         var imgurl5="https://image.tmdb.org/t/p/w500"+myObj.results[5].poster_path;
         var imgurl6="https://image.tmdb.org/t/p/w500"+myObj.results[6].poster_path;
         var imgurl7="https://image.tmdb.org/t/p/w500"+myObj.results[7].poster_path;
         var imgurl8="https://image.tmdb.org/t/p/w500"+myObj.results[8].poster_path;
         var imgurl9="https://image.tmdb.org/t/p/w500"+myObj.results[9].poster_path;
         var imgurl10="https://image.tmdb.org/t/p/w500"+myObj.results[10].poster_path;
         var imgurl11="https://image.tmdb.org/t/p/w500"+myObj.results[11].poster_path;
         document.getElementById("poster").src=imgurl;
         document.getElementById("poster1").src=imgurl1;
         document.getElementById("poster2").src=imgurl2;
         document.getElementById("poster3").src=imgurl3;
         document.getElementById("poster4").src=imgurl4;
         document.getElementById("poster5").src=imgurl5; 
         document.getElementById("poster6").src=imgurl6;
         document.getElementById("poster7").src=imgurl7;
         document.getElementById("poster8").src=imgurl8;
         document.getElementById("poster9").src=imgurl9;
         document.getElementById("poster10").src=imgurl10;
         document.getElementById("poster11").src=imgurl11;
         a=myObj.results[0].id;
         b=myObj.results[1].id;
         c=myObj.results[2].id;
         d=myObj.results[3].id;
         e=myObj.results[4].id;
         f=myObj.results[5].id;
         g=myObj.results[6].id;
         h=myObj.results[7].id;
         i=myObj.results[8].id;
         j=myObj.results[9].id;
         k=myObj.results[10].id;
         l=myObj.results[11].id;

		}
};
url="https://api.themoviedb.org/3/movie/upcoming?api_key=5c8c2f862eecc57cc9a208ccde813b0b&language=en-US&page=1";
 xmlhttp.open("GET", url, true);
xmlhttp.send();
window.onload =function () {
     url1 = './movieInfo.html?id=' + encodeURIComponent(a);
     document.getElementById("demo").href = url1;
     url2 = './movieInfo.html?id=' + encodeURIComponent(b);
     document.getElementById("demo1").href = url2;
     url3 = './movieInfo.html?id=' + encodeURIComponent(c);
     document.getElementById("demo2").href = url3;
     url4 = './movieInfo.html?id=' + encodeURIComponent(d);
     document.getElementById("demo3").href = url4;
     url5 = './movieInfo.html?id=' + encodeURIComponent(e);
     document.getElementById("demo4").href = url5;
     url6 = './movieInfo.html?id=' + encodeURIComponent(f);
     document.getElementById("demo5").href = url6;
     url7 = './movieInfo.html?id=' + encodeURIComponent(g);
     document.getElementById("demo6").href = url7;
     url8 = './movieInfo.html?id=' + encodeURIComponent(h);
     document.getElementById("demo7").href = url8;

     url9 = './movieInfo.html?id=' + encodeURIComponent(i);
     document.getElementById("demo8").href = url9;
     url10 = './movieInfo.html?id=' + encodeURIComponent(j);
     document.getElementById("demo9").href = url10;
     url11 = './movieInfo.html?id=' + encodeURIComponent(k);
     document.getElementById("demo10").href = url11;
     url12 = './movieInfo.html?id=' + encodeURIComponent(l);
     document.getElementById("demo11").href = url12;
    }