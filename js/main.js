// SLIDESHOW CODE STARTS

let slideshowDiv = document.getElementById('slideshowDiv');

fadeInFirst();

function fadeInFirst()
{
    setTimeout(slideshowDiv.style.animationName = "fadeInDiv", 2000);
    setTimeout(slideshowDiv.style.background = "url(../images/slideshow2.jpg)", 2000);
    setTimeout(slideshowDiv.style.backgroundRepeat = "no-repeat", 2000);
    setTimeout(slideshowDiv.style.backgroundPosition = "center", 2000);
    setTimeout(slideshowDiv.style.backgroundSize = "cover", 2000);
    setTimeout(fadeOutFirst, 3000);
}

function fadeOutFirst()
{
    slideshowDiv.style.animationName = "fadeOutDiv";
    setTimeout(slideshowDiv.style.background = "none", 2000);
    setTimeout(fadeInSeccond, 2000);
}

function fadeInSeccond()
{
    slideshowDiv.style.animationName = "fadeInDiv2";
    setTimeout(slideshowDiv.style.background = "url(../images/slideshow3.jpg)", 2000);
    setTimeout(slideshowDiv.style.backgroundRepeat = "no-repeat", 2000);
    setTimeout(slideshowDiv.style.backgroundPosition = "center", 2000);
    setTimeout(slideshowDiv.style.backgroundSize = "cover", 2000);
    setTimeout(fadeOutSeccond, 3000);
}

function fadeOutSeccond()
{
    slideshowDiv.style.animationName = "fadeOutDiv2";
    setTimeout(slideshowDiv.style.background = "none", 2000);
    setTimeout(fadeInThird, 2000);
}

function fadeInThird()
{
    slideshowDiv.style.animationName = "fadeInDiv3";
    setTimeout(slideshowDiv.style.background = "url(../images/slideshow1.jpg)", 2000);
    setTimeout(slideshowDiv.style.backgroundRepeat = "no-repeat", 2000);
    setTimeout(slideshowDiv.style.backgroundPosition = "center", 2000);
    setTimeout(slideshowDiv.style.backgroundSize = "cover", 2000);
    setTimeout(fadeOutThird, 3000);
}

function fadeOutThird()
{
    slideshowDiv.style.animationName = "fadeOutDiv3";
    setTimeout(slideshowDiv.style.background = "none", 2000);
    setTimeout(fadeInFirst, 2000);
}

// SLIDESHOW CODE ENDS

let displayFood = document.getElementById('displayFood');
let displayDrinks = document.getElementById('displayDrinks');
let mainMenu = document.getElementById('mainMenu');
let drinksMenu = document.getElementById('drinksMenu');
let foodMenu = document.getElementById('foodMenu');
let foodBackMain = document.getElementById('foodBackMain');
let drinksBackMain = document.getElementById('drinksBackMain');
let displayHamburger = document.getElementById('displayHamburger');
let displayPizza = document.getElementById('displayPizza');
let displayHouseSpecials = document.getElementById('displayHouseSpecials');
let displayMeat = document.getElementById('displayMeat');
let displayCoffee = document.getElementById('displayCoffee');
let displayBeer = document.getElementById('displayBeer');
let displayWine = document.getElementById('displayWine');
let displayCocktails = document.getElementById('displayCocktails');
let displayHardLiquor = document.getElementById('displayHardLiquor');
let houseSpecials = document.getElementById('houseSpecials');
let burgers = document.getElementById('burgers');
let pizza = document.getElementById('pizza');
let meat = document.getElementById('meat');
let coffee = document.getElementById('coffee');
let beer = document.getElementById('beer');
let wine = document.getElementById('wine');
let cocktails = document.getElementById('cocktails');
let hardLiquor = document.getElementById('hardLiquor');

displayFood.addEventListener('click', displayFoodMenu);
displayDrinks.addEventListener('click', displayDrinksMenu);
displayHamburger.addEventListener('click', displayHamburgerItems);
displayPizza.addEventListener('click', displayPizzaItems);
displayHouseSpecials.addEventListener('click', displayHouseSpecialItems);
displayMeat.addEventListener('click', displayMeatItems);
displayCoffee.addEventListener('click', displayCoffeeItems);
displayBeer.addEventListener('click', displayBeerItems);
displayWine.addEventListener('click', displayWineItems);
displayCocktails.addEventListener('click', displayCocktailsItems);
displayHardLiquor.addEventListener('click', displayHardLiquorItems);


function displayFoodMenu()
{
    mainMenu.style.display = "none";
    foodMenu.style.display = "grid";
    foodBackMain.addEventListener('click', displayMain);
}

function displayDrinksMenu()
{
    mainMenu.style.display = "none";
    drinksMenu.style.display = "grid";
    drinksBackMain.addEventListener('click', displayMain);
}

function displayMain()
{
    hardLiquor.style.display = "none";
    drinksMenu.style.display = "none";
    foodMenu.style.display = "none";
    mainMenu.style.display = "grid";
    burgers.style.display = "none";
    pizza.style.display = "none";
    meat.style.display = "none";
    coffee.style.display = "none";
    beer.style.display = "none";
    wine.style.display = "none";
    cocktails.style.display = "none";
    houseSpecials.style.display = "grid";
}

function displayHamburgerItems()
{
    hardLiquor.style.display = "none";
    meat.style.display = "none";
    pizza.style.display = "none";
    houseSpecials.style.display = "none";
    coffee.style.display = "none";
    beer.style.display = "none";
    wine.style.display = "none";
    cocktails.style.display = "none";
    burgers.style.display = "grid";
}

function displayPizzaItems()
{
    hardLiquor.style.display = "none";
    meat.style.display = "none";
    houseSpecials.style.display = "none";
    burgers.style.display = "none";
    coffee.style.display = "none";
    beer.style.display = "none";
    wine.style.display = "none";
    cocktails.style.display = "none";
    pizza.style.display = "grid";
}

function displayHouseSpecialItems()
{
    hardLiquor.style.display = "none";
    meat.style.display = "none";
    pizza.style.display = "none";
    burgers.style.display = "none";
    coffee.style.display = "none";
    beer.style.display = "none";
    wine.style.display = "none";
    cocktails.style.display = "none";
    houseSpecials.style.display = "grid";
}

function displayMeatItems()
{
    hardLiquor.style.display = "none";
    pizza.style.display = "none";
    burgers.style.display = "none";
    houseSpecials.style.display = "none";
    coffee.style.display = "none";
    beer.style.display = "none";
    wine.style.display = "none";
    cocktails.style.display = "none";
    meat.style.display = "grid";
}

function displayCoffeeItems()
{
    hardLiquor.style.display = "none";
    pizza.style.display = "none";
    burgers.style.display = "none";
    houseSpecials.style.display = "none";
    meat.style.display = "none";
    beer.style.display = "none";
    wine.style.display = "none";
    cocktails.style.display = "none";
    coffee.style.display = "grid";
}

function displayBeerItems()
{
    hardLiquor.style.display = "none";
    cocktails.style.display = "none";
    pizza.style.display = "none";
    burgers.style.display = "none";
    houseSpecials.style.display = "none";
    meat.style.display = "none";
    coffee.style.display = "none";
    wine.style.display = "none";
    beer.style.display = "grid";
}

function displayWineItems()
{
    hardLiquor.style.display = "none";
    coffee.style.display = "none";
    pizza.style.display = "none";
    meat.style.display = "none";
    houseSpecials.style.display = "none";
    coffee.style.display = "none";
    beer.style.display = "none";
    burgers.style.display = "none";
    cocktails.style.display = "none";
    wine.style.display = "grid";
}

function displayCocktailsItems()
{
    hardLiquor.style.display = "none";
    wine.style.display = "none";
    beer.style.display = "none";
    coffee.style.display = "none";
    meat.style.display = "none";
    houseSpecials.style.display = "none";
    pizza.style.display = "none";
    burgers.style.display = "none";
    cocktails.style.display = "grid";
}

function displayHardLiquorItems()
{
    wine.style.display = "none";
    beer.style.display = "none";
    coffee.style.display = "none";
    meat.style.display = "none";
    houseSpecials.style.display = "none";
    pizza.style.display = "none";
    burgers.style.display = "none";
    cocktails.style.display = "none";
    hardLiquor.style.display = "grid";
}

let galleryOne = document.getElementById('galleryOne');
let galleryTwo = document.getElementById('galleryTwo');
let galleryThree = document.getElementById('galleryThree');
let galleryFour = document.getElementById('galleryFour');
let galleryFive = document.getElementById('galleryFive');
let gallerySix = document.getElementById('gallerySix');

function appendPicture(div, picture)
{
    div.style.background = picture;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";
    div.style.backgroundRepeat = "no-repeat";
}

function appendAll()
{
    appendPicture(galleryOne, "url('../images/gallery1.jpg')");
    appendPicture(galleryTwo, "url('../images/gallery2.jpg')");
    appendPicture(galleryThree, "url('../images/gallery3.jpg')");
    appendPicture(galleryFour, "url('../images/gallery4.jpg')");
    appendPicture(galleryFive, "url('../images/gallery5.jpg')");
    appendPicture(gallerySix, "url('../images/gallery6.jpg')");
    setTimeout(changeGallery, 3000);
}

appendAll();

function changeFirst()
{
    appendPicture(galleryOne, "url('../images/gallery2.jpg')");
}

function reverseFirst(){
    appendPicture(galleryOne, "url('../images/gallery1.jpg')");
}

function changeSeccond(){
    appendPicture(galleryTwo, "url('../images/gallery3.jpg')");
}

function reverseSeccond(){
    appendPicture(galleryTwo, "url('../images/gallery2.jpg')");
}

function changeThird()
{
    appendPicture(galleryThree, "url('../images/gallery4.jpg')");
}

function reverseThird()
{
    appendPicture(galleryThree, "url('../images/gallery3.jpg')");
}

function changeFourth()
{
    appendPicture(galleryFour, "url('../images/gallery5.jpg')");
}

function reverseFourth()
{
    appendPicture(galleryFour, "url('../images/gallery4.jpg')");
}

function changeFifth()
{
    appendPicture(galleryFive, "url('../images/gallery6.jpg')");
}

function reverseFifth()
{
    appendPicture(galleryFive, "url('../images/gallery5.jpg')");
}

function changeSixth()
{
    appendPicture(gallerySix, "url('../images/gallery1.jpg')");
}

function reverseSixth()
{
    appendPicture(gallerySix, "url('../images/gallery6.jpg')");
}

function changeGallery()
{
    setTimeout(changeFirst, 0);
    setTimeout(changeSeccond, 900);
    setTimeout(changeThird, 1800);
    setTimeout(changeFourth, 2700);
    setTimeout(changeFifth, 3600);
    setTimeout(changeSixth, 4500);
    setTimeout(reverseGallery, 11000);
}

function reverseGallery()
{
    setTimeout(reverseSixth, 0);
    setTimeout(reverseFifth, 900);
    setTimeout(reverseFourth, 1800);
    setTimeout(reverseThird, 2700);
    setTimeout(reverseSeccond, 3600);
    setTimeout(reverseFirst, 4500);
    setTimeout(changeGallery, 11000);
}

let reservationForm = document.getElementById('reservationForm');
let reservationFirstName = document.getElementById('reservationFirstName');
let reservationLastName = document.getElementById('reservationLastName');
let reservationNumberOfAdults = document.getElementById('reservationNumberOfAdults');
let reservationNumberOfChildren = document.getElementById('reservationNumberOfChildren');
let reservationTime = document.getElementById('reservationTime');
let reservationDate = document.getElementById('reservationDate');
let reservationComment = document.getElementById('reservationComment');
let reservationConfirmButton = document.getElementById('reservationConfirmButton');
let firstnameHelp = document.getElementById('firstnameHelp');
let lastnameHelp = document.getElementById('lastnameHelp');
let adultsHelp = document.getElementById('adultsHelp');
let childrenHelp = document.getElementById('childrenHelp');
let timeHelp = document.getElementById('timeHelp');
let commentsHelp = document.getElementById('commentsHelp');
let postReservation = document.getElementById('postReservation');

reservationForm.addEventListener('submit', preventFormSubmit);
reservationFirstName.addEventListener('mouseover', displayFirstnameHelp);
reservationFirstName.addEventListener('mouseout', hideFirstnameHelp);
reservationLastName.addEventListener('mouseover', displayLastnameHelp);
reservationLastName.addEventListener('mouseout', hideLastnameHelp);
reservationNumberOfAdults.addEventListener('mouseover', displayAdultHelp);
reservationNumberOfAdults.addEventListener('mouseout', hideAdultHelp);
reservationNumberOfChildren.addEventListener('mouseover', displayChildrenHelp);
reservationNumberOfChildren.addEventListener('mouseout', hideChildrenHelp);
reservationTime.addEventListener('mouseover', displayTimeHelp);
reservationTime.addEventListener('mouseout', hideTimeHelp);
reservationComment.addEventListener('mouseover', displayCommentHelp);
reservationComment.addEventListener('mouseout', hideCommentHelp);
reservationConfirmButton.addEventListener('click', displayFormCompleted);

function preventFormSubmit(e)
{
    e.preventDefault();
}

function displayFirstnameHelp()
{
    firstnameHelp.style.display = "flex";
}

function hideFirstnameHelp()
{
    firstnameHelp.style.display = "none";
}

function displayLastnameHelp()
{
    lastnameHelp.style.display = "flex";
}

function hideLastnameHelp()
{
    lastnameHelp.style.display = "none";
}

function displayAdultHelp()
{
    adultsHelp.style.display = "flex";
}

function hideAdultHelp()
{
    adultsHelp.style.display = "none";
}

function displayChildrenHelp()
{
    childrenHelp.style.display = "flex";
}

function hideChildrenHelp()
{
    childrenHelp.style.display = "none";
}

function displayTimeHelp()
{
    timeHelp.style.display = "flex";
}

function hideTimeHelp()
{
    timeHelp.style.display = "none";
}

function displayCommentHelp()
{
    commentsHelp.style.display = "flex";
}

function hideCommentHelp()
{
    commentsHelp.style.display = "none";
}

function displayFormCompleted()
{
    reservationForm.style.display = "none";
    postReservation.style.display = "flex";
}

let contactForm = document.getElementById('contactForm');
let contactFormFirstStep = document.getElementById('contactFormFirstStep');
let contactFormSeconndStep = document.getElementById('contactFormSeconndStep');
let contactFormThirdStep = document.getElementById('contactFormThirdStep');
let continueContactForm = document.getElementById('continueContactForm');
let finishContactForm = document.getElementById('finishContactForm');

contactForm.addEventListener('submit', preventContactSubmit);
continueContactForm.addEventListener('click', contineContactMeForm);
finishContactForm.addEventListener('click', finishContactMeForm);

function preventContactSubmit(e)
{
    e.preventDefault();
}

function contineContactMeForm()
{
    contactFormFirstStep.style.display = "none";
    contactFormSeconndStep.style.display = "grid";
}

function finishContactMeForm()
{
    contactFormSeconndStep.style.display = "none";
    contactFormThirdStep.style.display = "flex";
}