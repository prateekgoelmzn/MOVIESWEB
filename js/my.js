var impid="";
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    impid=data.id;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var budget=myObj.budget;
        var title=myObj.original_title;
        var overview=myObj.overview;
        var popularity=myObj.popularity;
       var poster=myObj.backdrop_path;
       document.getElementById("pop").innerHTML=myObj.popularity;
       document.getElementById("mname").innerHTML=title;
       document.getElementById("summary").innerHTML=overview;
       document.getElementById("isrc").src="https://image.tmdb.org/t/p/w500"+poster;
       document.getElementById("hpage").innerHTML=myObj.homepage;
       document.getElementById("hpage").href=myObj.homepage; 
       document.getElementById("date").innerHTML=myObj.release_date;
       document.getElementById("bdgt").innerHTML=budget;
       document.getElementById("rev").innerHTML=myObj.revenue;
       document.getElementById("rt").innerHTML=myObj.runtime+" min";
       document.getElementById("tag").innerHTML=myObj.tagline;
       document.getElementById("vavg").innerHTML=myObj.vote_average;
       document.getElementById("vcount").innerHTML=myObj.vote_count;
       var gen="";
        for(var i=0;i<myObj.genres.length;i++)
        {
             gen=gen+"/"+myObj.genres[i].name;
        }
        document.getElementById("gens").innerHTML=gen;
        var company="";
        for(var i=0;i<myObj.production_companies.length;i++)
        {
             company=company+","+myObj.production_companies[i].name;
        }
        document.getElementById("com").innerHTML=company;
        var country="";
        for(var i=0;i<myObj.production_countries.length;i++)
        {
             country=country+","+myObj.production_countries[i].name;
        }
        document.getElementById("contry").innerHTML=country;

        document.getElementById("star").style.color="red";
    }
};

url1="https://api.themoviedb.org/3/movie/"+impid+"?api_key=5c8c2f862eecc57cc9a208ccde813b0b";
 xmlhttp.open("GET", url1, true);
xmlhttp.send();