var navBlock = document.getElementById('nav');
var rightBlock = document.getElementById('right_down');
navBlock.outerHTML = '<div id="right_down"><p>Тут може бути ваша реклама</p></div>';
rightBlock.outerHTML = '<nav id="nav"><p>\tМеню    Відгуки    Контакти </p>  </nav>';




function getSquare(){
    var block = document.getElementById('main');
    return (block.offsetHeight*block.offsetWidth);
}
//alert("Площа паралелограма: " + getSquare() + " пікселів");





// Function to find the maximum digit in a given number
function findMaxDigit() {
    // Get the input value from the form
    var numberInput = document.getElementById("number").value;

    // Validate if the input is a natural number
    if (/^[1-9]\d*$/.test(numberInput)) {
        // Convert the input to an array of digits
        var digits = numberInput.split('').map(Number);

        // Find the maximum digit
        var maxDigit = Math.max.apply(null, digits);

        // Display the result using a dialog box
        alert("Максимальна цифра: " + maxDigit);

        // Save the result in cookies
        document.cookie = "maxDigit=" + maxDigit;
    } else {
        alert("Будь ласка, введіть натуральне число.");
    }
}

// Function to display the information stored in cookies on page reload
function displayStoredInfo() {
    // Check if the "maxDigit" cookie is set
    var maxDigitCookie = getCookie("maxDigit");

    if (maxDigitCookie) {
        // Display the stored information using a dialog box
        var userChoice = confirm("Максимальна цифра, збережена в cookies: " + maxDigitCookie +
                                 "\nНатисніть 'ОК', щоб видалити ці дані, або 'Скасувати', щоб залишити.");

        if (userChoice) {
            // Delete the "maxDigit" cookie
            document.cookie = "maxDigit=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
    }
}




// Function to get the value of a specific cookie
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();

        // Check if the cookie starts with the specified name
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return null;
}

// Call the function to display stored information on page reload
displayStoredInfo();







function setAlign(block){
    RadioButton = document.querySelector('input[name="alignment"]:checked');
    if (RadioButton) {
        const alignment = document.querySelector('input[name="alignment"]:checked').value;
        block.style.textAlign = alignment;
        const blockClass = '.' +  block.classList[0];
        localStorage.setItem(`alignment_${blockClass}`, alignment);
    }
}
function to_align(){
    const blocksToAlign = ['.block2', '.block4', '.block5'];
    blocksToAlign.forEach(function(blockclass) {
        const block = document.querySelector(blockclass);
        alignment = localStorage.getItem(`alignment_${blockclass}`);
        if (alignment) {
            block.style.textAlign = alignment;
        }        
    });
}




var maxItems = 13;
var itemCount = document.getElementById('dynamicList').childElementCount;

var savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

function addItemToList() {
    var selectedValue = document.getElementById('dynamicSelect').value;

    if (itemCount < maxItems) {
        var newItem = document.createElement('li');
        newItem.textContent = selectedValue;
        document.getElementById('dynamicList').appendChild(newItem);

        savedItems.push(selectedValue);
        localStorage.setItem('savedItems', JSON.stringify(savedItems));

        itemCount++;
    } else {
        alert('Досягнуто максимальну кількість елементів (13). Оновіть сторінку.');
    }
}

window.addEventListener('beforeunload', function() {
    localStorage.removeItem('savedItems');
});