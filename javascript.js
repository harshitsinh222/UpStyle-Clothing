$(document).ready(function(){
    $(".add-wishlist").mouseover(function(){
        $(".add-wishlist").animate({height:"200px", width:"200px"}, 1000);
    });
    
    $(".add-wishlist").mouseout(function(){
        $(".add-wishlist").animate({height: "100px", width:"200px"}, 1000);
    });
    
    $(".add-wishlist").click(function(){
    $(".add-wishlist").hide();
    });
    
    $(".size-option").hover(function(){  
        $(this).css("background-color", "grey");  
    });
    
    $(".item-price").mousedown(function(){  
        $(".item-price").css("background-color", "grey");  
    });  
    $(".item-price").mouseup(function(){  
        $(".item-price").css("background-color", "brown");  
    }); 
    
     $(".add-wishlist").mouseleave(function(){    
       $(".add-wishlist").text( "Go for it" ).show().fadeOut( 2000 );   
    });    
    

});








var addToCartButtons = document.getElementsByClassName('add-wishlist')

for(var i=0; i < addToCartButtons.length; i++){
    
     var button = addToCartButtons[i]    
     button.addEventListener('click', addToCartClicked)
} 
function addToCartClicked(event){
   
    var button = event.target
    var shopItem = button.parentElement.parentElement

    var price = shopItem.getElementsByClassName('item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('gender-img')[0].src
    
    addItemToCart(price,imageSrc)
    
    alert("Added Successfully");
     
     }
function addItemToCart(price,imageSrc){
    
   var cartRow = document.createElement('div')
   cartRow.classList.add('wishlist-row')
   var cartItems = document.getElementsByClassName('wishlist-item')[0]
   var cartRowContents =
   `<div class="wishlist-column">
Price &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Item <br>
              -----------------------------<br>
   <span class="cart-price">${price}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img class="wishlist-img" src="${imageSrc}" width="200" height="200"><br>
     <div>
            <input type="button" value="Buy" class="buy" onclick="buy();">
        </div>
        
    </div>`
   cartRow.innerHTML = cartRowContents
       
   cartItems.append(cartRow)              
}

function buy(Event)
{
    alert("Bought Successfully");
}



var usernames = ["hla","tasdsron","acgfge","ladererj","asdsan"];
var passwords = ["qwerty", "EndOasdsdfLine", "year1w242", "la23dyj123", "HOLA"];
var valid = false;

var login_button = document.getElementById('login');
login_button.addEventListener('click',loginMatch);
function loginMatch(event) {
    var usrname = document.getElementsByClassName('username')[0].value;
var pwd = document.getElementsByClassName('password').value;
    for (var i=0; i <usernames.length; i++) {
        if ((usrname == usernames[i])) {
           valid = true;
            break;  
       }

    }
    if(valid) {
  alert("valid credentials");
}
else {
  alert("invalid credentials");
}
    }


var signup_button = document.getElementById('sign-up');
signup_button.addEventListener('click',signupp)
function signupp(event){
    var new_username = document.getElementsByClassName('new-username')[0].value;
    var new_password = document.getElementsByClassName('new-password')[0].value;
    usernames.push(new_username)
    passwords.push(new_password)
    console.log(usernames[5],passwords[5])
    alert("Account created successfully")
}

