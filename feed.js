document.querySelector('.dropdown__selector').addEventListener('click', ()=>{
    document.querySelector('.dropdown__div').style.display = 'block';
    setTimeout(()=>{ document.querySelector('.dropdown__div').style.opacity = '1'; }, 300)
})
document.querySelector('.close__modal').addEventListener('click' , ()=>{
    document.querySelector('.dropdown__div').style.opacity = '0';
    setTimeout(()=>{ document.querySelector('.dropdown__div').style.display = 'none'}, 100)
})