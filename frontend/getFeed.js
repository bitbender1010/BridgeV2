const feed  = [{
    "taskId": "PAH8XATMgG9vd98eZF9X",
    "profile-pics": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    "taskName": "House Cleaning",
    "description": "cleaner to clean my house",
    "taskMode": "Online",
    "location": "Eagles Landing",
    "timeFrame": "2 weeks",
    "budget": "5000"
},
{
    "taskId": "nRz77YnQaM4U783GqTtR",
    "profile-pics": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    "taskName": "House Cleaning",
    "description": "cleaner to clean my house",
    "taskMode": "Online",
    "location": "Eagles Landing",
    "timeFrame": "2 weeks",
    "budget": "5000"
}]

window.addEventListener('load', ()=>{
    const feedFromDb = localStorage.getItem('feed-data')
    const feedData  = JSON.parse(feedFromDb);
    const div = document.createElement('div');
    div.classList.add('feed__card')
    div.innerHTML = `
    <div class="profile">
                <img src="${feedData.img}" alt="username">
                <div class="user__details">
                    <p class="description">${feedData.taskTitle}</p>
                    <p><i class="fas fa-globe"></i> <span class="status">Remote</span></p>
                    <p class="date"><i class="far fa-calendar-alt"></i> <span>${feedData.dateTime}</span> </p>
                </div>
            </div>

            <div class="status">
                <p class="open__status">open</p>
                <p class="offers">${feedData.priceValue} Offers</p>
            </div>
    `
    document.querySelector('.feed').appendChild(div);
})
