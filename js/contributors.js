$(document).ready(function(){
    $.ajax({
        url: "https://api.github.com/repos/fossasia/gci18.fossasia.org/contributors?per_page=100&page=1"
      }).done(function(data){
        data.forEach(function(contributors){
          var html = '<div class="col-xs-6 col-sm-3 col-md-2 col-lg-2 text-center contributor"> <div class="card hvr-hang single-mentor">';
          html += '<img src="https://github.com/'+contributors.login+'.png?size=120x120" height="120" width="120" style="width: auto">';
          html += '<br>';
          $.ajax({
              url: "https://api.github.com/users/"+contributors.login
          }).done(function(data){
            html += '<p class="person-name">';
            if(data.name != null && data.name != contributors.login){
                html += data.name+'<br>';
                html += '</p><p class="person-username">('+contributors.login+')</p>';
            }
            else{
                html += "</p><p class='person-username'>"+contributors.login+"</p>";
            }
            html += '<br>';
            html += '<ul class="list-inline social-list social-overlay-list">';
            html += '<a href="'+contributors.html_url+'" target="_blank" class="icon-a">';
            html += '<i class="icon-i fa fa-github fa-2x" aria-hidden="true"></i>';
            html += '</a></ul></div>'
            html += '<a contributor href="https://github.com/fossasia/gci18.fossasia.org/commits?author='+contributors.login+'" target="_blank" ';
            html += 'class="align-bottom">';
            html += '('+contributors.contributions;
            if (contributors.contributions === 1) {
              html += ' contribution)</a>';
            } else {
              html += ' contributions)</a>';
            }
            html += '</div>';
            $("#contributors").append(html);
          });
        });
      });
});
