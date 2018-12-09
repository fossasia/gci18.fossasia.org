/*
 William DURAND <william.durand1@gmail.com>
 MIT Licensed

 GistID: 5705453

*/
(function(g,b){var a=function(d,c){var a=["http://api.flickr.com/services/feeds/photoset.gne?nsid=",c.id,"&set=",c.setId,"&format=json&jsoncallback=?"].join("");return b.getJSON(a).done(function(a){b.each(a.items,function(a,e){var f=e.media.m.replace("_m","_b");b("<img />").attr("src",e.media.m).appendTo(d).wrap(c.container||"").wrap(['<a data-lightbox="true" href="',f,c.cssClass?'" class="'+c.cssClass:"",'" title="',e.title,'"></a>'].join(""))})})};b.fn.flickrPhotoStream=function(d){return a(b(this).get(),
d||{})}})(document,jQuery);
