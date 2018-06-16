

  var targetNumber = Math.floor((Math.random()*101) + 19);
  var crystalNum1 = Math.floor((Math.random()*12) + 1);
  var crystalNum2 = Math.floor((Math.random()*12) + 1);
  var crystalNum3 = Math.floor((Math.random()*12) + 1);
  var crystalNum4 = Math.floor((Math.random()*12) + 1);
  var numberOptions = [crystalNum1, crystalNum2, crystalNum3, crystalNum4];
  var imageOptions = ["assets/images/crystal1.jpg","assets/images/crystal2.jpg","assets/images/crystal3.jpg","assets/images/crystal4.jpg"];
  var imageCrystal1;
  var imageCrystal2;
  var imageCrystal3;
  var imageCrystal4;
  var imageCrystals = [imageCrystal1, imageCrystal2, imageCrystal3, imageCrystal4];

  var userScore = 0;
  var wins = 0;
  var losses = 0;

  $("#target").html("<h2>" + targetNumber + "</h2>");
  $("#wins").text("Wins " + wins);
  $("#losses").text("Losses " + losses);
  $("#score").html("<h2>" + userScore + "</h2>");


  function reset() {
    userScore = 0;
    targetNumber = Math.floor((Math.random()*101) + 19);
    crystalNum1 = Math.floor((Math.random()*12) + 1);
    crystalNum2 = Math.floor((Math.random()*12) + 1);
    crystalNum3 = Math.floor((Math.random()*12) + 1);
    crystalNum4 = Math.floor((Math.random()*12) + 1);
    numberOptions = [crystalNum1, crystalNum2, crystalNum3, crystalNum4];
    for (var i = 0; i < 4; i++) {
      imageCrystals[i].attr("data-crystalvalue", numberOptions[i]);
    }
  
    $("#target").html("<h2>" + targetNumber + "</h2");
    $("#score").html("<h2>" + userScore + "</h2>");
  }

  var crystals = $("#crystals");

for (var i = 0; i < 4; i++) {

    imageCrystals[i] = $("<img>");
    imageCrystals[i].addClass("crystal-image");
    imageCrystals[i].attr("src", imageOptions[i]);
    imageCrystals[i].attr("data-crystalvalue", numberOptions[i]);
    crystals.append(imageCrystals[i]);
  }

 crystals.on("click", ".crystal-image", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
    
    userScore += crystalValue;
    $("#score").html("<h2>" + userScore + "</h2>");

  alert("New score: " + userScore);

    if (userScore === targetNumber) {
      wins++;
      $("#wins").text("Wins " + wins);
      alert("You win!");
      reset();
    }

    else if (userScore >= targetNumber) {
      losses++;
      $("#losses").text("Losses " + losses);
      alert("You lose!!");
      reset();
    }

  });

  