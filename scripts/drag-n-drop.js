$(document).ready(function() {
  $("#creators").sortable({ revert: true });
  $("#companies").sortable({ revert: true });
  
  $("#checkButton").on("click", function() {
      let correct = true;
      $("#creators li").each(function(index, creator) {
          const creatorName = $(creator).text();
          const companyName = $("#companies li:eq(" + index + ")").text();
          
          if (getCompanyForCreator(creatorName) !== companyName) {
              correct = false;
          }
      });

      if (correct) {
          $("#creators").sortable("disable");
          $("#companies").sortable("disable");
          $("#creators li, #companies li").addClass("list-group-item-success");
          $("#checkButton").hide();
          $("#tryAgainButton").show();
      } else {
          $("#creators li, #companies li").addClass("list-group-item-danger");
          $("#checkButton").hide();
          $("#tryAgainButton").show();
      }
  });

  $("#tryAgainButton").on("click", function() {
      $("#creators li, #companies li").removeClass("list-group-item-danger");
      $("#creators li, #companies li").removeClass("list-group-item-success");
      $("#creators").sortable("enable");
      $("#companies").sortable("enable");
      $("#checkButton").show();
      $("#tryAgainButton").hide();
      shuffleLists();
  });

  function shuffleLists() {
      $("#creators, #companies").each(function() {
          const list = $(this);
          const listItems = list.children();
          listItems.sort(function() { return 0.5 - Math.random() });
          listItems.detach().appendTo(list);
      });
  }

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

  shuffleLists();
});