//business logic
function Info(name,initialdeposit) {
  this.name = name;
  this.initialdeposit = initialdeposit;

}
function Balance(deposit,withdraw) {
  this.deposit = deposit;
  this.withdraw = withdraw;
}

Info.prototype.calculation=function(){
  return this.name +" " + this.initialdeposit
}

Balance.prototype.depositwithdraw =function(){
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
    var inputtedInitialDeposit = parseInt($("input#new-initialdeposit").val());
    var newAccount = new Info(inputtedName,inputtedInitialDeposit);
    $("ul#info").text(newAccount.calculation() )


});

      $("form#movements").submit(function(event) {
      event.preventDefault();
        var inputtedDeposit = parseInt($("input#new-deposit").val());
        var inputtedWithdraw = parseInt($("input#new-withdraw").val());
        var finalBalance =new Balance(inputtedDeposit, inputtedWithdraw);
        $("ul#balance").text(finalBalance.depositwithdraw());



});
resetFields();
});
