var request=new XMLHttpRequest();

request.open('GET','https://ghibliapi.herokuapp.com/films', true);

request.onload=function(){
    var data=JSON.parse(this.response);
    data.array.forEach(movie => {
        console.log(movie.title);
    });
}
request.send();
const app=document.getElementById('root');
const logo=document.createElement('img');
logo.src='logo.png';

const container=document.createElement('div');
container.setAttribute('class','container');
app.appendChild(logo);
app.appendChild(container);


