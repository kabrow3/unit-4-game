

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

  $("#target").text(targetNumber);
  $("#wins").text("Wins " + wins);
  $("#losses").text("Losses " + losses);
  $("#score").text(userScore);


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
  
    $("#target").text(targetNumber);
    $("#score").text(userScore);
  }

  var crystals = $("#crystals");

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  
  

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < 4; i++) {

    // For each iteration, we will create an imageCrystal
    imageCrystals[i] = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystals[i].addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystals[i].attr("src", imageOptions[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystals[i].attr("data-crystalvalue", numberOptions[i]);

    console.log(imageCrystals[i].attr("data-crystalvalue"));

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    crystals.append(imageCrystals[i]);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  crystals.on("click", ".crystal-image", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    userScore += crystalValue;
    $("#score").text(userScore);

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + userScore);

    if (userScore === targetNumber) {
      alert("You win!");
      wins++;
      $("#wins").text("Wins " + wins);
      reset();
    }

    else if (userScore >= targetNumber) {
      alert("You lose!!");
      losses++;
      $("#losses").text("Losses " + losses);
      reset();
    }

  });

  