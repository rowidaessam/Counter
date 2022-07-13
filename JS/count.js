var count = 10;
var colors = ['blue', 'aqua', 'cyan', 'gray', 'antiquewhite', 'lightgray', 'brown', 'lightblue', 'violet', 'bisque', 'azure']
interval = setInterval(function (){

    if (count === 0){
        document.body.style.backgroundColor = colors[0];
        clearInterval(interval);
        setTimeout(function (){
            window.close();
        }, 2000)
    }
    countDown.innerHTML = count;
    document.body.style.backgroundColor = colors[count];
    count--;

}, 500)