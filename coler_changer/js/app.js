const getColor = () =>{
    const randomNum = (Math.random()*0xfffff*1000000).toString(16);
    const randomCode  = '#'+randomNum.slice(0,6);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('text').innerText = randomCode;
}

const btn = document.getElementsByClassName('btn')[0];
let toggle = false;
let interval ;

const toggleButtton = () =>{
    if (!toggle) {
        interval = setInterval(getColor,500)
        
    } else {
        clearInterval(interval);
    }
    toggle =!toggle;
}
btn.addEventListener('click',toggleButtton);

getColor();