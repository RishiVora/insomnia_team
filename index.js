window.onload = function () {

    let imgs = document.querySelectorAll(".tiles");
    let overlay = document.querySelector(".overlay");
    let profile = document.querySelector(".profile");

    imgs.forEach(img => {
        img.addEventListener('click', function () {
            overlay.style.opacity = "1";
            overlay.style.visibility = "visible";

            let profileImg = document.createElement("img");
            profileImg.className = "profile-img";
            profileImg.src = img.src;
            profileImg.style.cssText = `
            width: 40%;
            float: left;`
            /*
            profileImg.style.width = "40%";
            profileImg.style.float = "left";
            */
            profile.appendChild(profileImg);

            let desc = document.createElement("div");
            desc.className = "desc";
            desc.style.float = "right";
            profile.appendChild(desc);

            let name = document.createElement("h2");
            name.className = "name";
            name.appendChild(document.createTextNode("Lorem Ipsum"));
            desc.appendChild(name);
            
            let about = document.createElement("p");
            about.className = "about";
            about.appendChild(document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi incidunt maxime exercitationem beatae cumque ab accusantium rerum esse quae asperiores cum deserunt aut natus rem, quam hic sint corrupti placeat doloribus, pariatur explicabo totam! Ullam inventore mollitia doloremque tempora, totam quibusdam quos consequuntur excepturi corrupti? Nihil quos blanditiis ullam? "));
            desc.appendChild(about);

            let closebtn = document.createElement("a");
            closebtn.href = "javascript:void(0)";
            closebtn.className = "closebtn";
            closebtn.style.cssText = `
            position: absolute;
            top: -20px;
            right: 20px;
            font-size: 60px;`;
            closebtn.appendChild(document.createTextNode("×"))
            profile.appendChild(closebtn);

            closebtn.addEventListener('click', function () {
                profileImg.remove();
                desc.remove();
                closebtn.remove();
                overlay.style.opacity = "0";
                overlay.style.visibility = "hidden";
                /*overlay.style.transition = "300ms ease-in-out";*/
            });
        });
    });

}
