document.querySelector('.submit-data').addEventListener('click', ()=>{
     const priceValue = document.getElementById('price__value').value;
     const online = document.getElementById('online').value
     const offline = document.getElementById('radioMe').value
    const dateTime = document.getElementById('dateTime').value;
    const address = document.getElementById('address').value;
    const details =  document.getElementById('details').value
    const taskTitle = document.getElementById('task__title').value;

    if(priceValue === '' && dateTime === '' && address === '' && details === '' && taskTitle === ''){
    
    }else{
        const feed = {
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            priceValue,
            status: online ? online : offline,
            dateTime,
            address,
            details,
            taskTitle
        }
        localStorage.setItem('feed-data', JSON.stringify(feed));
        window.location.href = './feed.html'
    }
})