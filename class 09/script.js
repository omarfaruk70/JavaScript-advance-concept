// javascript more event class 2;
document.querySelector('#name').addEventListener('focus',test);
document.querySelector('#name').addEventListener('keyup', test02);
function test(){
    this.style.background = 'pink';
    console.log('focused!')
}
function test02(){
    document.getElementById('demo').innerText = this.value;
}
