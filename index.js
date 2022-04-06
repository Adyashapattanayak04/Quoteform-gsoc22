function validation(){
   
  var text = $("#textinput");
  var letters = /^[0-9a-zA-Z ?.!]+$/;
  if (text.val() == "") {
   text.addClass("invalid");
    $("#message").html("Quote is invalid");

     
  }
  else if(text.val().trim().length < 2){
       text.addClass("invalid");
       $("#message").html("Quote is too short");
      
  }
  
  else if (!letters.test(text.val())) {
    text.addClass("invalid");
    $("#message").html("Quote must have only alphanumeric characters");
    
  }

   else {
    text.removeClass("invalid");
    text.addClass("valid");
    $("#message").html("");
  }
}
