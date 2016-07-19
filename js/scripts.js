//business logic
function Info (name,lastName) {
  this.name = name;
  this.lastName= lastName;

}
function DepositWithdraw(initialDeposit,deposit, withdraw,finalBalance){
  this.initialDeposit= initialDeposit;
  this.deposit= deposit;
  this.withdraw= withdraw;
  this.finalBalance= finalBalance;
}

Info.prototype.calculation=function(){
  return this.name + " " +this.lastName ;
}

DepositWithdraw.prototype.depositwithdraw =function(){


  return this.initialDeposit + this.deposit - this.withdraw;
}



function resetFields() {
$("input#new-name").val("");
$("input#new-lastname").val("");
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
    var inputtedLastName= $("input#new-lastname").val();
    var newAccount = new Info(inputtedName, inputtedLastName);
    console.log(newAccount);
    $("ul#info").text(newAccount.calculation() )


});

      $("form#movements").submit(function(event) {
      event.preventDefault();
        var inputtedInitialDeposit = parseInt($("input#new-initial-deposit").val());
        var inputtedDeposit = parseInt($("input#new-deposit").val());
        var inputtedWithdraw = parseInt($("input#new-withdraw").val());
        var finalBalance =new DepositWithdraw(inputtedInitialDeposit ,inputtedDeposit, inputtedWithdraw);
        finalBalance.depositwithdraw();
        console.log(finalBalance);
        $("ul#balance").text(finalBalance.depositwithdraw());



});
resetFields();
});
