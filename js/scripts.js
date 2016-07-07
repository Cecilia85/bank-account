//business logic
function Balance(name,initialdeposit) {
  this.name = name;
  this.initialdeposit = initialdeposit;
}



Balance.prototype.fullCalc= function(deposit, withdraw) {
  this.deposit= deposit;
  this.withdraw= withdraw;
  return this.initialdeposit + this.deposit - this.withdraw;
}


function resetFields() {
$("input#new-name").val("");
$("input#new-initialdeposit").val("");
}

// user interface logic
$(document).ready(function() {
  $("form#Info").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedInitialDeposit = $("input#new-initialdeposit").val();
    var newAccount = new Balance(inputtedName,inputtedInitialDeposit);
    $("ul#balance").html("<li><span class='balance'>" + newAccount.name + " " + newAccount.initialdeposit + "</span></li>")
      $( "#movements").show();




      $("#movements").submit(function(event) {
      event.preventDefault();
        var inputtedDeposit = parseInt($("input#new-deposit").val());
        var inputtedWithdraw = parseInt($("input#new-withdraw").val());
        var finalBalance = newAccount(inputtedDeposit, inputtedWithdraw);
          $("ul#balance").html("<li><span class='balance'>" + finalBalance + "</span></li>");


});
});
});
