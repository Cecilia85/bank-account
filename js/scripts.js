//business logic
function Balance(name,initialdeposit) {
  this.name = name;
  this.initialdeposit = initialdeposit;
}

Balance.prototype.depositwihdraw=function(deposit,withdraw){
  this.deposit = deposit;
  this.withdraw = withdraw;
  return this.initialdeposit + this.deposit - this.withdraw
}



function resetFields() {
$("input#new-name").val("");
$("input#new-initialdeposit").val("");
$("input#new-deposit").val("");
$("input#new-withdraw").val("");
}

// user interface logic
$(document).ready(function() {
  $("form#Info").submit(function(event) {
  $("form#movements").show();
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedInitialDeposit = $("input#new-initialdeposit").val();
    var newAccount = new Balance(inputtedName,inputtedInitialDeposit);
    $("ul#balance").append("<li><span class='balance'>" + newAccount.name + " " + newAccount.initialdeposit + "</span></li>")


});
});
      $("form#movements").submit(function(event) {
      event.preventDefault();
      $("form#movements").each(function(){
        var inputtedDeposit = $("input#new-deposit").val();
        var inputtedWithdraw = $("input#new-withdraw").val();
        var finalBalance =new final(inputtedDeposit, inputtedWithdraw);
        $("ul#balance").append("<li><span class='balance'>" + finalBalance.depositwithdraw() + "</span></li>");

resetFields();

});
});
