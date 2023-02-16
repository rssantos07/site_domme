
const videos = document.querySelectorAll('video');


const galleryVideos = document.querySelectorAll('.gallery-video');
galleryVideos.forEach(function(video) {
  video.addEventListener('click', function() {
  
    const container = this.closest('.video-container');
   
    const mainVideo = container.querySelector('video');
  
    mainVideo.src = this.src;
    mainVideo.play();
  });
});

videos.forEach(function(video) {
  video.addEventListener('ended', function() {
   
    const container = this.closest('.video-container');
    
    const gallery = container.querySelector('.gallery');
  
    const nextVideo = gallery.querySelector('video[src="' + this.src + '"]').closest('.gallery-item').nextElementSibling;
    if (nextVideo) {
      
      nextVideo.querySelector('video').click();
    } else {
     
      gallery.firstElementChild.querySelector('video').click();
    }
  });
});
