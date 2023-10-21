var tabButtons = document.querySelectorAll(".tablinks");
// console.log(tabButtons);
for (var i = 0; i < tabButtons.length; i++) 
{
    tabButtons[i].addEventListener("click", function () 
    {
        var tabName = this.dataset.tab; //this "tab" is what we used with data-'tab'
        var tabContent = document.getElementById(tabName);
        var allTabContent = document.querySelectorAll(".tabcontent");
        var allTabButtons = document.querySelectorAll(".tablinks"); 
    
        for (var j = 0; j < allTabContent.length; j++) 
        {
         allTabContent[j].style.display = "none";
        }
            
        for (var k = 0; k < allTabButtons.length; k++) 
        {
        allTabButtons[k].classList.remove("active");
        }
            
        tabContent.style.display = "block";
       this.classList.add("active");
    });
}
document.querySelector(".tablinks").click();

// ------------------tab2---------------------------------


var c = document.querySelector('.con');
var d = document.querySelector('#inputField');
var selectElement = document.getElementById("fromSelect");
var selectElement2 = document.getElementById("to");
var cal; 

c.addEventListener("click", function() {
    var e = parseInt(d.value);
    var selectedValue = selectElement.value;
    var selectedValue2 = selectElement2.value;
    function converter(e, selectedValue, selectedValue2) {
        if (selectedValue == "Kilometre" && selectedValue2 == "Kilometre") {
            return e;
        }
        else if (selectedValue == "Kilometre" && selectedValue2 == "Meter") {
            return e*1000;
        }
        else if (selectedValue == "Kilometre" && selectedValue2 == "Centimetre") {
            return e*100000;
        }
        else if (selectedValue == "Kilometre" && selectedValue2 == "Millimetres") {
            return e*1000000;
        }
        else if (selectedValue == "Kilometre" && selectedValue2 == "Micrometres") {
            return e*10000000;
        }
        else if (selectedValue == "Kilometre" && selectedValue2 == "Nanometre") {
            return e*100000000;
        }

        else if (selectedValue == "Meter" && selectedValue2 == "Kilometre") {
            return e/1000;
        }
        else if (selectedValue == "Meter" && selectedValue2 == "Meter") {
            return e;
        }
        else if (selectedValue == "Meter" && selectedValue2 == "Centimetre") {
            return e*100;
        }
        else if (selectedValue == "Meter" && selectedValue2 == "Millimetres") {
            return e*1000;
        }
        else if (selectedValue == "Meter" && selectedValue2 == "Micrometres") {
            return e*100000;
        }
        else if (selectedValue == "Meter" && selectedValue2 == "Nanometre") {
            return e*1000000;
        }

        else if (selectedValue == "Centimetre" && selectedValue2 == "Kilometre") {
            return e/100000;
        }
        else if (selectedValue == "Centimetre" && selectedValue2 == "Meter") {
            return e/100;
        }
        else if (selectedValue == "Centimetre" && selectedValue2 == "Centimetre") {
            return e;
        }
        else if (selectedValue == "Centimetre" && selectedValue2 == "Millimetres") {
            return e*10;
        }
        else if (selectedValue == "Centimetre" && selectedValue2 == "Micrometres") {
            return e*10000;
        }
        else if (selectedValue == "Centimetre" && selectedValue2 == "Nanometre") {
            return e*1000000;
        }

        else if (selectedValue == "Millimetres" && selectedValue2 == "Kilometre") {
            return e/1000000;
        }
        else if (selectedValue == "Millimetres" && selectedValue2 == "Meter") {
            return e/1000;
        }
        else if (selectedValue == "Millimetres" && selectedValue2 == "Centimetre") {
            return e/10;
        }
        else if (selectedValue == "Millimetres" && selectedValue2 == "Millimetres") {
            return e;
        }
        else if (selectedValue == "Millimetres" && selectedValue2 == "Micrometres") {
            return e*10;
        }
        else if (selectedValue == "Millimetres" && selectedValue2 == "Nanometre") {
            return e*1000;
        }

        else if (selectedValue == "Micrometres" && selectedValue2 == "Kilometre") {
            return e/100000000;
        }
        else if (selectedValue == "Micrometres" && selectedValue2 == "Meter") {
            return e/100000;
        }
        else if (selectedValue == "Micrometres" && selectedValue2 == "Centimetre") {
            return e/1000;
        }
        else if (selectedValue == "Micrometres" && selectedValue2 == "Millimetres") {
            return e/100;
        }
        else if (selectedValue == "Micrometres" && selectedValue2 == "Micrometres") {
            return e;
        }
        else if (selectedValue == "Micrometres" && selectedValue2 == "Meter") {
            return e*1000;
        }

        else if (selectedValue == "Nanometre" && selectedValue2 == "Kilometre") {
            return e/1000000000;
        }
        else if (selectedValue == "Nanometre" && selectedValue2 == "Meter") {
            return e/100000000;
        }
        else if (selectedValue == "Nanometre" && selectedValue2 == "Centimetre") {
            return e/1000000;
        }
        else if (selectedValue == "Nanometre" && selectedValue2 == "Millimetres") {
            return e/100000;
        }
        else if (selectedValue == "Nanometre" && selectedValue2 == "Micrometres") {
            return e/100;
        }
        else if (selectedValue == "Nanometre" && selectedValue2 == "Nanometre") {
            return e;
        }
    }
    cal = converter(e, selectedValue, selectedValue2);
    d.value = cal;
});

// --------------------------tab3--------------------------------------------

function convertBinaryToDecimal() {
    const binaryInput = document.getElementById("binaryInput").value;
    const decimalOutput = document.getElementById("decimalOutput");

    // Check if the input is a valid binary number
    if (/^[01]+$/.test(binaryInput)) {
        const decimalValue = parseInt(binaryInput, 2);
        decimalOutput.textContent = `Decimal: ${decimalValue}`;
    } else {
        decimalOutput.textContent = "Invalid binary input";
    }
}
