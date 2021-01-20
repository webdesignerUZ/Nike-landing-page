const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const head = document.getElementById('head');
const image = document.getElementById('image');

const itemOne = {
    pic: '18.png',
    header: 'NIKE AIR MAX 90'
};
const itemTwo = {
    pic: '15.png',
    header: 'NIKE AIR MAX 30'
};
const itemThree = {
    pic: '20.png',
    header: 'NIKE AIR Bag 100'
};



item1.addEventListener('click', ()=>{
    head.innerText = itemOne.header;
    image.src = itemOne.pic;
 })

item2.addEventListener('click', ()=>{
   head.innerText = itemTwo.header;
   image.src = itemTwo.pic;
})

item3.addEventListener('click', ()=>{
    head.innerText = itemThree.header;
    image.src = itemThree.pic;
})


