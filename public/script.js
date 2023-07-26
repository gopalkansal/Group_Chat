const socket = io();

$('#chatting').hide();

let username;

$('#name-btn').click(function(){

    username = $('#login-inp').val();
    $('#login-inp').val("");
    $('#login').hide();
    $('.display-name').append(`<p><i>Hey <strong>${username}</strong>! How are you today?</i></p>`);
    $('#chatting').show();
    
});


$('#send-btn').click(function(){
    const msgText = $('#inp-msg').val();
   
    
    socket.emit('send_msg', {
        msg: msgText,
        name: username
    });
    $('#inp-msg').val("");
})

socket.on('received_msg', (data)=>{
 
    $('#chat').append(`<li><strong> ${data.name}</strong> : ${data.msg}`);
    $('#chat-box').scrollTop($("#chat-box").outerHeight());
})