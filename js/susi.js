var susi_chat_loaded = false ;
$('#start-susi').click(function(){
	var susi_chat = document.querySelector('#susi-chat');
	if(!susi_chat_loaded){
		susi_chat.src = susi_chat.dataset.src;
		susi_chat_loaded = true;
		$('#susi-loading').css('display','inline-block');
		$('#susi-chat').load(function(){
		   $('#susi-chat').css('display','inline-block');
	       $('#susi-close').css('display','inline-block');
	       $('#susi-loading').css('display','none');
        });
	}
	else{
		$('#susi-chat').css('display','inline-block');
		$('#susi-close').css('display','inline-block');
	}
});
$('#susi-close i').click(function(){
	$('#susi-close').css('display','none');
	$('#susi-chat').css('display','none');
}); 