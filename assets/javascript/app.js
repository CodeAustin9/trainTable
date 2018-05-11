$(document).ready(function(){
console.log('script working');
  function scheduleMath(tFrequency, firstTime) {

  // First Time (pushed back 1 year to make sure it comes before current time)
  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);
    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));
    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);
    
    
    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));
    
    return [tMinutesTillTrain, nextTrain];
    }
    
    
    
  $("#submit").on("click", function(event) {
      event.preventDefault();

    // variables to change in javascript
    var firstTrainTime = $("#first-train-time").val();
    var frequency = $("#frequency").val();
    var mathResults = scheduleMath(frequency, firstTrainTime);

    // variables to print to table
    var trainName = $("#trainName").val();
    var destination = $("#destination").val();
    var nextArrival = moment(mathResults[1]).format('HH:mm');
    var timeUntilNextTrain = mathResults[0];

    //function for adding variables to html table
    function printToTable() {
      var template = "<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + timeUntilNextTrain + "</td></tr>";
    $("tbody").append(template);
    console.log("test")
    }
    printToTable();

  });
 
});