document.addEventListener('DOMContentLoaded', function(event){
    event.preventDefault();

    const nome = document.querySelector('.profile-name');
    const user = document.querySelector('.profile-username');
    const repo = document.querySelector('#repo');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const avatar = document.querySelector('#avatar');
    const link = document.querySelector('#link');
    
    const url = `https://api.github.com/users/devanaclaramota`//recebe o link ajax

    fetch(url)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
       nome.innerText = json.name;
       user.innerText = `@${json.login}`;
       repo.innerText = json.public_repos;
       followers.innerText = json.followers;
       following.innerText = json.following;
       avatar.src = json.avatar_url;
       link.href = json.html_url;
    })
})