//business logic
function Balance(name,balance) {
  this.name = name;
  this.balance = balance;
}



Balance.prototype.fullCalc= function(deposit, withdrawal) {
   this.balance+=deposit;
   this.balance-=withdrawal;
   return this.balance
}


function resetFields() {
$("input#new-name").val("");
$("input.new-initialdeposit").val("");
}

// user interface logic
$(document).ready(function() {
  $("form#Info").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedinitialDeposit = $("input#new-initialdeposit").val();
    var newBalance = new Balance(inputtedName,inputtedinitialDeposit);

     $( "#balance" ).show();
      $( "#depositWithdrawal" ).show();
});
});

//
//     $(".new-address").each(function() {
//       var inputtedType = $(this).find("select.new-type").val();
//       var inputtedStreet = $(this).find("input.new-street").val();
//       var inputtedCity = $(this).find("input.new-city").val();
//       var inputtedState = $(this).find("input.new-state").val();
//       var newAddress = new Address(inputtedType, inputtedStreet, inputtedCity, inputtedState);
//       newContact.addresses.push(newAddress);
//     });
//
//     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
//
//     $(".contact").last().hover(function() {
//       $("#show-contact").fadeIn();
//       $("#show-contact h2").text(newContact.firstName);
//       $("#show-contact h2").text(newContact.lastName);
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);
//       $(".birthday").text(newContact.birthday);
//       $("ul#addresses").text("");
//       newContact.addresses.forEach(function(address) {
//         $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
//       });
//     });
//
//     resetFields();
//
//   });
// });
