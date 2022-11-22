$(function () {
  //regular expression of only letters
  let alphaRegex = /^[a-zA-Z]*$/;


  $("#noSpaces").blur(function () {
    //first grab the value from the textbox and put in a variable
    let inputVal = $(this).val();
    //initialize an string variable that represents a space
    let strSpace = " ";
    //found this online, initialize a variable to count number of spaces in a string
    //takes the variable of the input and runs the split() method
    //which is an array method to chop it up whenever it finds the search parameter, in the case a space (" ")
    let spaceCount = inputVal.split(" ").length - 1;
    //displays text depending on user input
    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().text("all good");
    } else if (spaceCount > 0) {
      $(this).next().text("no spaces allowed in ssn");
    }
  });
//1st data input
  $("#noAlpha").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    //show dialogue if user enters letters
    $(this).next().text("that's not a number pal");
  });

//2nd data input
  $("#noNumbers").on("input", function () {
    let inputVal = $(this).val();
    //displays text depending on user input
    if (alphaRegex.test(inputVal)) {
      $(this).removeClass("error").addClass("success");
      $(this).next().text("that one is ok I guess");
    } else {
      $(this).removeClass("success").addClass("error");
      $(this).next().text("that is no fish name");
    }
  });


  //3rd data input
  $("input[type=radio][name=entertained]").change(function () {
    //if they say yes, display the textbox

    //get new data
    let entertain = $("input[name=entertained]:checked").val();

    //show/hide data box accordingly
    if (entertain === "No") {
      $("#divExplain").show();
    } else {
      $("#divExplain").hide();
    }
  }); 
});

//Check for file open or not for fav words
$("#load").click(function () {
  $("#div1").load("favWords", function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "success")
          alert("External content loaded successfully!");
      if (statusTxt == "error")
          alert("Error " + xhr.status + ": File not loaded");
  });
});

