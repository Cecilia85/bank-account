//business logic
function Balance(name,initialdeposit) {
  this.name = name;
  this.initialdeposit = initialdeposit;
}



Balance.prototype.fullCalc= function(deposit, withdraw,balance) {
  this.deposit= deposit;
  this.withdraw= withdraw;
  this.balance= balance

  if(this.inititialdeposit<=0){
    return "Youre broke";
  }else if (this.initialdeposit>0){
  return this.balance=this.initialdeposit + this.deposit - this.withdraw;
}
return this.balance;

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
          var inputtedDeposit = parseInt($("input#new-deposit").val());
          var inputtedWithdraw = parseInt($("input#new-withdraw").val());
          var finalBalance = new Finalbalance(inputtedDeposit, inputtedWithdraw);
            $("ul#balance").append("<li><span class='balance'>" + finalBalance.balance + "</span></li>");

resetFields();

});

          // $("#movements").submit(function(event) {
          //   event.preventDefault();
          //   $("#movements").each(function(){
          //     var inputtedDeposit = $(this).find("input#new-deposit").val();
          //     var inputtedWithdraw = $(this).find("input#new-withdraw").val();
          //     var finalBalance = new Finalbalance(inputtedDeposit, inputtedWithdraw);
          //       $("ul#balance").html("<li><span class='balance'>" + finalBalance + "</span></li>");
