console.log('Start');

function loginUser(email, password){
    return new Promise((resolve, reject) =>{

        setTimeout(() => {
            console.log("Now we have the data");
            resolve( {userEmail: email});
        }, 1500);
    });
}

function getUserVideos(email){
    return new Promise((resolve, reject) =>{ 
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]);
        }, 1000);
    });
}

function videoDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("title of the video");
        });
    });
} 
/*
const user = loginUser('devedf@goomail.com', 123456, user => {
    console.log(user);
    getUserVideos(user.userEmail, (video) =>{
        console.log(video);
        videoDetails(videos[0], title => {
            console.log(title);
        });
    });
});*/

//loginUser('ed', 'bumba')
//    .then(user=> getUserVideos(user.email))
//    .then(videos => videoDetails(videos[0]))
//    .then(detail => console.log(detail));


    //SYNC
/*const user = loginUser('ed', 'sdf');
const videos = videoDetails(user.email);
*/

//SYNC


//console.log("Finish");
/*
const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log("getting stuff form youtube");
        resolve({ videos: [1,2,3,4,5]});
    }, 2000);
})

const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log("stuff from fb");
        resolve({ user: "Name" });
    }, 5000);
})

Promise.all([yt, fb]).then(result => console.log(result));*/



//loginUser('ed', 'bumba')
//    .then(user=> getUserVideos(user.email))
//    .then(videos => videoDetails(videos[0]))
//    .then(detail => console.log(detail));

async function displayUser(){
    try{
        const loggedUser = await loginUser('ed', 12345);
        const videos = await getUserVideos(loggedUser.userEmail);
        const detail = await videoDetails(videos[0]);
        console.log(detail);
    }
    catch(err){
        console.log("We could not get the videos");
    }
}

displayUser(); 