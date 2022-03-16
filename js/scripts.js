//BUSINESS LOGIC 
//contact constructor 
function Contact (first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }

//address constructor
function Address(street, city, county) {
  this.street = street;
  this.city = city;
  this.county = county;
}


// USER INTERFACE LOGIC
$(document).ready(function() {
  //collecting name details from the user
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
  
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
  
      var newContact = new Contact(inputtedFirstName, inputtedLastName);
      $(".new-address").each(function() {
        var inputtedStreet = $(this).find("input.new-street").val();
        var inputtedCity = $(this).find("input.new-city").val();
        var inputtedCounty = $(this).find("input.new-county").val();
        var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);
        newContact.addresses.push(newAddress);
      });
  
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>"); 

      $(".contact").last().click(function() {
        //displaying the name details
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);

        //displaying addresses alongside the name
        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
          $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.County + "</li>");
        });
      });

      //clearing the fields after the form is submitted 
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
      $("input.new-street").val("");
      $("input.new-city").val("");
      $("input.new-county").val("")
    });

    //collecting address details from the user
    $("#add-address").click(function() {
      $("#new-addresses").append('<div class="new-address">' +
                                   '<div class="form-group">' +
                                     '<label for="new-street">Street</label>' +
                                     '<input type="text" class="form-control new-street">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-city">City</label>' +
                                     '<input type="text" class="form-control new-city">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="new-county">County</label>' +
                                     '<input type="text" class="form-control new-county">' +
                                   '</div>' +
                                 '</div>');
    });
  });