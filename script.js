let likeBtn = document.querySelectorAll('.like-btn');


likeBtn.forEach(like => {
    let count = 0;
    like.addEventListener('click',() => {
        if(count % 2 == 0){
            like.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
        }
        else{
            like.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png";
        }
        count++;
    })
});
