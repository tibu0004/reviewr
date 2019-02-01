

if (document.deviceready) {
    document.addEventListener("deviceready", init);
} else {
    document.addEventListener("DOMContentLoaded", init);
}

    let data = [];
    
    pages = null;
    function init() {
            //create page changing
            pages = document.querySelectorAll('.page');
            pages[0].classList.add('active');
            pages.forEach( page => {
                page.querySelector('button').addEventListener('click', navigate);
            });

            //create the button to take the picture
            document.getElementById('btn').addEventListener('click', takephoto);
    
            //create the button to save info to localStorage
            document.getElementById('btns').addEventListener('click', save);
            document.getElementById('btns').addEventListener('click', navigate);
            
            
        };

    //pages
    function navigate(ev){
        ev.preventDefault();
        document.querySelector('.active').classList.remove('active');
        let target = ev.currentTarget.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    };
     
    //picture
    function takephoto(){
        navigator.camera.getPicture(ftw, wtf, {
            quality:50,
            destinationType:Camera.DestinationType.FILE_URI,
            correctOrientation: true,
            targetWidth:400,
            targetHeight: 500
        })
    };
    
    //if photo works well
    function ftw(imgURI){
        document.getElementById('msg').textContent = imgURI;
        document.getElementById('photo').src = imgURI;
        
    };

    //if photo doesnt work
    function wtf(msg){
        document.getElementById('msg').textContent = msg;
    };
    
    //save to local storage
    function save(){
        let KEY = "tibu0004reviewr";
        let id = Date.now();
        let title = document.getElementById("ititle").value;
        let rate = document.getElementById("irate").value;
        let txt = document.getElementById("msg").textContent;

        let obj = {
            "id": id,
            "path": txt,
            "title": title,
            "rate": rate
            
        };

        data.push(obj);

    localStorage.setItem(KEY,JSON.stringify(data));

    var listItem = document.createElement('a');

     document.getElementsByTagName('section')[0].appendChild(listItem);

        // Add the item text
        listItem.innerHTML = data.length;
    
    };

   // function setLocalStorage
    
    //get local storage
    

    //create anchors using title
    
    
    
    

    //create link to local storage
    


    

