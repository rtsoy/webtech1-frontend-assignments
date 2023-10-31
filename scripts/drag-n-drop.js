$(document).ready(function() {
  // Initialize the creators and companies lists as sortable with the revert option
  $("#creators").sortable({ revert: true });
  $("#companies").sortable({ revert: true });
  
  // Add a click event handler to the checkButton
  $("#checkButton").on("click", function() {
      let correct = true;
      $("#creators li").each(function(index, creator) {
          const creatorName = $(creator).text();
          const companyName = $("#companies li:eq(" + index + ")").text();
          
          // Check if the company assigned to the creator matches the correct company
          if (getCompanyForCreator(creatorName) !== companyName) {
              correct = false;
          }
      });

      // If all assignments are correct, disable sorting, mark items as success, and show the tryAgainButton
      if (correct) {
          $("#creators").sortable("disable");
          $("#companies").sortable("disable");
          $("#creators li, #companies li").addClass("list-group-item-success");
          $("#checkButton").hide();
          $("#tryAgainButton").show();
      } else {
          // If there are incorrect assignments, mark items as danger and show the tryAgainButton
          $("#creators li, #companies li").addClass("list-group-item-danger");
          $("#checkButton").hide();
          $("#tryAgainButton").show();
      }
  });

  // Add a click event handler to the tryAgainButton
  $("#tryAgainButton").on("click", function() {
      // Reset the styling and enable sorting
      $("#creators li, #companies li").removeClass("list-group-item-danger");
      $("#creators li, #companies li").removeClass("list-group-item-success");
      $("#creators").sortable("enable");
      $("#companies").sortable("enable");
      $("#checkButton").show();
      $("#tryAgainButton").hide();
      shuffleLists();
  });

  // Function to shuffle the items in the creators and companies lists
  function shuffleLists() {
      $("#creators, #companies").each(function() {
          const list = $(this);
          const listItems = list.children();
          // Randomly shuffle the list items and reattach them to the list
          listItems.sort(function() { return 0.5 - Math.random() });
          listItems.detach().appendTo(list);
      });
  }

  // Function to get the correct company for a given creator
  function getCompanyForCreator(creatorName) {
      switch (creatorName) {
          case "Elon Musk":
              return "SpaceX";
          case "Mark Zuckerberg":
              return "Facebook";
          case "Jeff Bezos":
              return "Amazon";
          case "Reed Hastings":
              return "Netflix";
          case "Larry Page, Sergey Brin":
              return "Google";      
          default:
              return "";
      }
  }

  // Shuffle the lists when the page loads
  shuffleLists();
});