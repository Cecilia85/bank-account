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






          $("ul#balance").submit(function(event) {
            event.preventDefault();
            $("#movements").each(function(){
              var inputtedDeposit = $(this).find("input#new-deposit").val();
              var inputtedWithdraw = $(this).find("input#new-withdraw").val();
              var finalBalance = new Finalbalance(inputtedDeposit, inputtedWithdraw);
                $("ul#balance").html("<li><span class='balance'>" + finalBalance + "</span></li>");


});
});
});
});
