
let date1 = document.querySelector(".date_1");
let date2 = document.querySelector(".date_2");
let price = 0;

 date1.addEventListener('change',function() {
     
      date1 = date1.value;
      console.log(date1);
 })

 date2.addEventListener('change',function() {
     
    date2 = date2.value;
    console.log(date2);
})

function getGearBox() {
    let select = document.querySelector(".gearBox");
    let output = select.value;
    console.log(output);
    return output;
}
function getOption() {
    let select = document.querySelector(".types");
    let output = select.value;
    displayEngin(output);
    return output;
}

function SelectEngin() {
    let select = document.querySelector(".fuel");
    output = select.value;
    console.log(output);

    return output;
}

function displayEngin(x) {
    switch (x) {
        case "moto":
            document.querySelector(".diesel").style.display = "none";
            document.querySelector(".hybrid").style.display = "none";
            document.querySelector(".auto ").style.display = "none";
            document.querySelector(".man ").style.display = "none";

            break;

        case "citadine":
            document.querySelector(".auto").style.display = "none";
            break;

        case "compact":
            document.querySelector(".elec").style.display = "none";
            document.querySelector(".auto").style.display = "none";
            document.querySelector(".essence").style.display = "none";

            break;

        case "berline":
            document.querySelector(".man").style.display = "none";
            document.querySelector(".elec").style.display = "none";
            break;

        case "utilitaire":
            document.querySelector(".elec").style.display = "none";
            document.querySelector(".auto ").style.display = "none";
            document.querySelector(".hybrid").style.display = "none";
            document.querySelector(".essence").style.display = "none";
            break;

        case "engin":
            document.querySelector(".elec").style.display = "none";
            document.querySelector(".auto ").style.display = "none";
            document.querySelector(".hybrid").style.display = "none";
            break;

        case "camion":
            document.querySelector(".hybrid").style.display = "none";
            document.querySelector(".essence").style.display = "none";
            document.querySelector(".elec").style.display = "none";
            document.querySelector(".man").style.display = "none";

        default:
            break;
    }
}


function NumberOfDays(date1, date2) {
    let date_1 = new Date(date1);
    let date_2 = new Date(date2);

    let difference = date_2.getTime() - date_1.getTime();

    let days = difference / (1000 * 60 * 60 * 24);
    console.log(days);

    return days;
}




function setPrice() {
    let days = NumberOfDays(date1, date2);

    console.log("Duration :",days);


    switch (getOption()) {
        case "moto":
            if (SelectEngin() === "elec") {
                price = (10 + 10 * 0.05) * days;
                console.log(price);
                return price;
            } else {
                price = (10 + 10 * 0.09) * days;
                console.log(price);

                return price;
            }

        case "citadine":
            if (SelectEngin() === "elec") {
                price = (12 + 0.05 * 12) * days;
                console.log(price);

                return price;
            } else if (SelectEngin() === "hybrid") {
                price = (12 + 12 * 0.09) * days;
                console.log(price);

                return price;
            } else if (SelectEngin() === "essence") {
                price = (12 + 12 * 0.14) * days;
                console.log(price);

                return price;
            } else if (SelectEngin() === "diesel") {
                price = (12 + 12 * 0.21) * days;
                console.log(price);

                return price;
            }

            break;

        case "compact":
            if (SelectEngin() === "hybrid") {
                price = (14 + 14 * 0.09) * days;
                console.log(price);

                return price;
            } else if (SelectEngin() === "essence") {
                price = (14 + 14 * 0.14) * days;
                console.log(price);

                return price;
            } else if (SelectEngin() === "diesel") {
                price = (14 + 14 * 0.21) * days;
                console.log(price);

                return price;
            }
            break;

        case "berline":

            if (SelectEngin() === "hybrid") {
                price = (20 + 20 * (0.09 + 0.19)) * days;
                console.log(price);

                return price;
            } else if (SelectEngin() === "essence") {
                price = (20 + 20 * (0.14 + 0.19)) * days;
                console.log(price);

                return price;
            } else if (SelectEngin() === "diesel") {
                price = (20 + 20 * (0.21 + 0.19)) * days;
                console.log(price);

                return price;
            } else {
                if (SelectEngin() === "hybrid") {
                    price = (20 + 20 * 0.09) * days;
                    console.log(price);

                    return price;
                } else if (SelectEngin() === "essence") {
                    price = (20 + 20 * 0.14) * days;
                    console.log(price);

                    return price;
                } else if (SelectEngin() === "diesel") {
                    price = (20 + 20 * 0.21) * days;
                    console.log(price);

                    return price;
                }
            }

            //   }
            break;

        case "utilitaire":
            price = (16 + 16 * 0.21) * days;
            break;

        case "engin":
            if (SelectEngin() === "essence") {
                price = (900 + 900 * 0.14) * days;
                return price;
            } else if (SelectEngin() === "diesel") {
                price = (900 + 900 * 0.21) * days;
                return price;
            }

            break;

        case "camion":
            price = (250 + 250 * (0.21 + 0.19)) * days;
            return price;

        default:
            break;
    }

//    price = price.toString();
}


function clickme() {
    swal(
        {
        title: price +" $",
        icon: 'success'
         }
        
         );

}








    