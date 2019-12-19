

document.querySelector('.submit-data').addEventListener('click', ()=>{
     const priceValue = document.getElementById('price__value').value;
     const online = document.getElementById('online').value
     const offline = document.getElementById('radioMe').value
    const dateTime = document.getElementById('dateTime').value;
    const address = document.getElementById('address').value;
    const details =  document.getElementById('details').value
    const taskTitle = document.getElementById('task__title').value;
    
    if(priceValue === '' || dateTime === '' || address === '' || details === '' || taskTitle === ''){
    
    }else{
    
        const feed = {
            img: './images/user.png',
            priceValue,
            status: online ? online : offline,
            dateTime,
            address,
            details,
            taskTitle
        }
        if(JSON.stringify(localStorage.getItem('feed-data')) == null){
            feeds = []
        }else{
            feeds.push(feed);
            localStorage.setItem('feed-data', JSON.stringify(feeds));
            window.location.href = './feed.html';
        }
    }
})