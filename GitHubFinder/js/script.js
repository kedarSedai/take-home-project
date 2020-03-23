$(document).ready(function(){
  $('#searchUser').on('keyup', function(e) {

    let username = e.target.value; 

    //Make request to to Github
    $.ajax({
        url:'http://api.github.com/users/' + username,
        data:  {
            client_id: './keys/keys.client_id'
            client_secret: './keys/keys.client_secret'
        }
    }).done(function(user){
        $('#profile').html(`
        
        <div class="panel panel-default">
         <div class="panel-heading">
          <h3 class="panel-title">${user.name}</h3>
        </div>
          <div class="panel-body">
            <div class="row">
                <div class="col-md-3">
                    <img  class="thumbnail" src="${user.avatar_url}">
                    <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
                    <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">${user.blog}</li>
                </ul>
                </div>
                <div class="col-md-9">
                <button class="btn btn-success">Public Repos: ${user.public_repos}</button>
                <button class="btn btn-primary">Public Gists: ${user.public_gists}</button>
                <button class="btn btn-info">Followers: ${user.followers}</button>
                <button class="btn btn-info">Following: ${user.following}</button>
                </div>
                <br><br>
               
            </div>
          </div>
        </div>
    
        `);
    });
  });
});