const playerHolder = $('.big-video .actual-video');
const foundersVideos = $('.founder-avatar-story');


/* For each of our founders, on click play theyr video */
[...foundersVideos].forEach(el=>{
   el.addEventListener('click',()=>{
       if(el.classList.contains('active')){ //if the element is alredy the one being played do nothing
           return;
       }

       document.querySelector('.founder-avatar-story.active').classList.remove('active');
       el.classList.add('active');
       
       const personInfo = videos[el.dataset.name];
       $('.big-video p').html(personInfo['txt']);
       playerHolder.html(playVideo((personInfo['url'])));
   })
})

/* Event for the first one which is static */
document.querySelector('.player').addEventListener('click',()=>{
    playerHolder.html(playVideo(videos[document.querySelector('.founder-avatar-story.active').dataset.name].url))
})

/* Each founder video link for youtube */
const videos = {
    rami: {
        url : 'lxXGAbVd5sg',
        txt : '"It is better to travel well then to arrive" - The Budha1',
    },
    andrea: {
        url : 'lxXGAbVd5sg',
        txt : '"It is better to travel well then to arrive" - The Budha2',
    },
    zerka: {
        url : 'lxXGAbVd5sg',
        txt : '"It is better to travel well then to arrive" - The Budha3',
    },
    rodion: {
        url : 'lxXGAbVd5sg',
        txt : '"It is better to travel well then to arrive" - The Budha4',
    },
    jovita: {
        url : 'lxXGAbVd5sg',
        txt : '"It is better to travel well then to arrive" - The Budha5',
    },
}

/* Function that return the iframe element */
function playVideo(url){
    return(`<iframe 
    width="100%" 
    height="100%" 
    src="https://www.youtube.com/embed/${url}?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" 
    frameborder="0" 
    allow="autoplay; encrypted-media" 
    allowfullscreen
    ></iframe>`)

}


