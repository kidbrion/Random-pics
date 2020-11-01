const cont = document.getElementById("container");

getImages()

// functions
async function getImages (){
    let data = await fetch("https://picsum.photos/v2/list?page=2&limit=30");
    if (data.ok) {
        let imagesPromise = await data.json()
        console.log(Object.keys(imagesPromise).map(function(key){
            console.log(imagesPromise[key])
        }).join(""))
        //setInterval(display(imagesPromise), 3000);
        display(imagesPromise)
    } else {
        console.log("HTTP ERROR: "+ data.status)
    }
}

function display (images){
    cont.innerHTML=`
        ${Object.keys(images).map(key=>{
            return `
                <div class="display col-md-3 ">
                    <img src=${images[key].download_url} alt="image not loaded">
                    
                    <div class="caption">
                        <a href="#">
                            <i class="fas fa-user-circle"></i> ${images[key].author}
                        </a>
                        <a href=${images[key].url} target="blank">
                            <i class="fas fa-external-link-alt"></i> Visit source
                        </a>
                    </div>


                </div>
            `
        }).join("")}
    `
}