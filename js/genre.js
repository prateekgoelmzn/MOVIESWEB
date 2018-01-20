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
       document.getElementById("gimg1").src="https://image.tmdb.org/t/p/w500"+myObj.results[0].poster_path;
        document.getElementById("gimg1a").innerHTML=myObj.results[0].original_title;
        document.getElementById("gimg1a").href='./movieInfo.html?id='+myObj.results[0].id;
        document.getElementById("gimg1b").innerHTML=myObj.results[0].release_date;
       document.getElementById("gimg1c").innerHTML=myObj.results[0].vote_average;
       document.getElementById("gimg1d").innerHTML=myObj.results[0].vote_count;

       document.getElementById("gimg2").src="https://image.tmdb.org/t/p/w500"+myObj.results[1].poster_path;
       document.getElementById("gimg2a").innerHTML=myObj.results[1].original_title;
       document.getElementById("gimg2a").href='./movieInfo.html?id='+myObj.results[1].id;
       document.getElementById("gimg2b").innerHTML=myObj.results[1].release_date;
      document.getElementById("gimg2c").innerHTML=myObj.results[1].vote_average;
      document.getElementById("gimg2d").innerHTML=myObj.results[1].vote_count;

      document.getElementById("gimg3").src="https://image.tmdb.org/t/p/w500"+myObj.results[2].poster_path;
      document.getElementById("gimg3a").innerHTML=myObj.results[2].original_title;
      document.getElementById("gimg3a").href='./movieInfo.html?id='+myObj.results[2].id;
      document.getElementById("gimg3b").innerHTML=myObj.results[2].release_date;
     document.getElementById("gimg3c").innerHTML=myObj.results[2].vote_average;
     document.getElementById("gimg3d").innerHTML=myObj.results[2].vote_count;
      
     document.getElementById("gimg4").src="https://image.tmdb.org/t/p/w500"+myObj.results[3].poster_path;
     document.getElementById("gimg4a").innerHTML=myObj.results[3].original_title;
     document.getElementById("gimg4a").href='./movieInfo.html?id='+myObj.results[3].id;
     document.getElementById("gimg4b").innerHTML=myObj.results[3].release_date;
    document.getElementById("gimg4c").innerHTML=myObj.results[3].vote_average;
    document.getElementById("gimg4d").innerHTML=myObj.results[3].vote_count;

    document.getElementById("gimg5").src="https://image.tmdb.org/t/p/w500"+myObj.results[4].poster_path;
    document.getElementById("gimg5a").innerHTML=myObj.results[4].original_title;
    document.getElementById("gimg5a").href='./movieInfo.html?id='+myObj.results[4].id;
    document.getElementById("gimg5b").innerHTML=myObj.results[4].release_date;
   document.getElementById("gimg5c").innerHTML=myObj.results[4].vote_average;
   document.getElementById("gimg5d").innerHTML=myObj.results[4].vote_count;

   document.getElementById("gimg6").src="https://image.tmdb.org/t/p/w500"+myObj.results[5].poster_path;
   document.getElementById("gimg6a").innerHTML=myObj.results[5].original_title;
   document.getElementById("gimg6a").href='./movieInfo.html?id='+myObj.results[5].id;
   document.getElementById("gimg6b").innerHTML=myObj.results[5].release_date;
  document.getElementById("gimg6c").innerHTML=myObj.results[5].vote_average;
  document.getElementById("gimg6d").innerHTML=myObj.results[5].vote_count;
   
  document.getElementById("gimg7").src="https://image.tmdb.org/t/p/w500"+myObj.results[6].poster_path;
  document.getElementById("gimg7a").innerHTML=myObj.results[6].original_title;
  document.getElementById("gimg7a").href='./movieInfo.html?id='+myObj.results[6].id;
  document.getElementById("gimg7b").innerHTML=myObj.results[6].release_date;
 document.getElementById("gimg7c").innerHTML=myObj.results[6].vote_average;
 document.getElementById("gimg7d").innerHTML=myObj.results[6].vote_count;

 document.getElementById("gimg8").src="https://image.tmdb.org/t/p/w500"+myObj.results[7].poster_path;
 document.getElementById("gimg8a").innerHTML=myObj.results[7].original_title;
 document.getElementById("gimg8a").href='./movieInfo.html?id='+myObj.results[7].id;
 document.getElementById("gimg8b").innerHTML=myObj.results[7].release_date;
document.getElementById("gimg8c").innerHTML=myObj.results[7].vote_average;
document.getElementById("gimg8d").innerHTML=myObj.results[7].vote_count;

document.getElementById("gimg9").src="https://image.tmdb.org/t/p/w500"+myObj.results[8].poster_path;
document.getElementById("gimg9a").innerHTML=myObj.results[8].original_title;
document.getElementById("gimg9a").href='./movieInfo.html?id='+myObj.results[8].id;
document.getElementById("gimg9b").innerHTML=myObj.results[8].release_date;
document.getElementById("gimg9c").innerHTML=myObj.results[8].vote_average;
document.getElementById("gimg9d").innerHTML=myObj.results[8].vote_count;

document.getElementById("gimg10").src="https://image.tmdb.org/t/p/w500"+myObj.results[9].poster_path;
document.getElementById("gimg10a").innerHTML=myObj.results[9].original_title;
document.getElementById("gimg10a").href='./movieInfo.html?id='+myObj.results[9].id;
document.getElementById("gimg10b").innerHTML=myObj.results[9].release_date;
document.getElementById("gimg10c").innerHTML=myObj.results[9].vote_average;
document.getElementById("gimg10d").innerHTML=myObj.results[9].vote_count;

document.getElementById("gimg11").src="https://image.tmdb.org/t/p/w500"+myObj.results[10].poster_path;
document.getElementById("gimg11a").innerHTML=myObj.results[10].original_title;
document.getElementById("gimg11a").href='./movieInfo.html?id='+myObj.results[10].id;
document.getElementById("gimg11b").innerHTML=myObj.results[10].release_date;
document.getElementById("gimg11c").innerHTML=myObj.results[10].vote_average;
document.getElementById("gimg11d").innerHTML=myObj.results[10].vote_count;

document.getElementById("gimg12").src="https://image.tmdb.org/t/p/w500"+myObj.results[11].poster_path;
document.getElementById("gimg12a").innerHTML=myObj.results[11].original_title;
document.getElementById("gimg12a").href='./movieInfo.html?id='+myObj.results[11].id;
document.getElementById("gimg12b").innerHTML=myObj.results[11].release_date;
document.getElementById("gimg12c").innerHTML=myObj.results[11].vote_average;
document.getElementById("gimg12d").innerHTML=myObj.results[11].vote_count;

    }
};

url1="https://api.themoviedb.org/3/genre/"+impid+"/movies?api_key=5c8c2f862eecc57cc9a208ccde813b0b&language=en-US&include_adult=false&sort_by=created_at.asc";
 xmlhttp.open("GET", url1, true);
xmlhttp.send();