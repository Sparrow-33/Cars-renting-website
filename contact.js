
// import swal from 'sweetalert'; 

function popup() {
    
    // let name = document.querySelector(".name"),
    //  lastName = document.querySelector(".lastName"),
    //   email = document.querySelector(".Email"),
      message = document.querySelector(".message");


    swal({
      title: "Message Submited!",
      text: message.innerText,
      icon: "success",
      button: "Aww yiss!",
    });   // swal("First Name :  "+name.value+ "\nLast Name :"
    //                             +lastName.value+"\nEmail :"
    //                             +email.value+"\nMessage :"+message.value,"");
}