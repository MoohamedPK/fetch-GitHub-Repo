let input = document.querySelector(".get-repos input");
let button = document.querySelector(".search");
let showD = document.querySelector(".show-data");

button.onclick = function (){
    getRepos()
}

function getRepos() {
    if (input.value == "") {
        showD.innerHTML = `<span> Please Write A GitHub Name</span>`
    } else {

    fetch(`https://api.github.com/users/${input.value}/repos`)
        .then((res) => {
        return res.json();
        })
        .then((repos) => {
        showD.innerHTML = "";

        repos.forEach((repo) => {
            let mainDiv = document.createElement("div");

            let divText = document.createTextNode(repo.name);

            mainDiv.appendChild(divText);

            
            let theUrl = document.createElement("a");
            
            let urlText = document.createTextNode("Visit");
            
            theUrl.appendChild(urlText);
            
            theUrl.href = `https://api.github.com/users/${input.value}/repos`;
            
            theUrl.setAttribute("target", "-blank");

            mainDiv.appendChild(theUrl);
            
            let repRates = document.createElement("span");
            
            let ratesText = document.createTextNode(`Stars ${repo.stargazers_count}`);
                
            repRates.appendChild(ratesText);

            let theContent = document.createElement("div");

            mainDiv.appendChild(theContent);

            mainDiv.appendChild(repRates);

            mainDiv.className = "repo-box";

            showD.appendChild(mainDiv);
        });
        });
}
}