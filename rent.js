
//  function popup() {
//     window.open("index.htm");
   
// }

    let date1 = document.getElementById("date_1").value;
    let date2 = document.getElementById("date_2").value;






function getGearBox() {
    let select  = document.querySelector(".gearBox");
    let output = select.value;
    console.log("gear function")
        return output;
}

function NumberOfDays(x , y) {

    let date_1 = new Date(x);
    let date_2 = new Date(y);


    let difference = date_2.getTime() - date_1.getTime();
   
    let days = difference / (1000*60*60*24);
    return days;
}
    
function displayEngin(x) {


    switch (x) {
        case 'Moto':
            
             document.querySelector(".diesel").style.display = "none";
             document.querySelector(".hybrid").style.display = "none";
             document.querySelector(".auto ").style.display = "none";
             document.querySelector(".man ").style.display = "none";

            break;
    
         case 'Citadin':
             document.querySelector(".auto").style.display = 'none';   
             break;

         case 'Compact':
             document.querySelector(".elec").style.display = 'none';  
             document.querySelector(".auto").style.display = 'none';  
             document.querySelector(".essence").style.display = 'none';   
 
             
             break;

         case 'Berline':
             document.querySelector(".man").style.display = 'none';
             document.querySelector(".elec").style.display = 'none';  
             break;

         case 'Utilitaire':
            document.querySelector(".elec").style.display = 'none'; 
            document.querySelector(".auto ").style.display = "none";
            document.querySelector(".hybrid").style.display = "none";
            document.querySelector(".essence").style.display = 'none';   
            break;

         case 'Engin de chantier':
            document.querySelector(".elec").style.display = 'none'; 
            document.querySelector(".auto ").style.display = "none";
            document.querySelector(".hybrid").style.display = "none";    
            break;

         case 'Camion':
            document.querySelector(".hybrid").style.display = "none";
            document.querySelector(".essence").style.display = 'none';   
            document.querySelector(".elec").style.display = 'none'; 
            document.querySelector(".man").style.display = 'none';

            console.log("here");

            default:
            break;
    }


    
}


function SelectEngin() {
    
    

    let select = document.querySelector(".fuel");
    output = select.value;
        return output;
}

function setPrice() {

  let days = NumberOfDays(date1,date2);
  let price;
   switch (getOption()) {
       case 'Moto':
               
           if (SelectEngin() === 'Electric') {
               
               price = (10 + 10*0.05) * days;

               return price;
           }else{
               price = (10 + 10 * 0.09) * days;
               return price;
           }
           
           break;
   
        case 'Citadin':
            if(SelectEngin() === 'Electric')
            {
                price = (12 + 0.05 * 12) * days;
                return  price;

            }else if (SelectEngin() === 'Hybrid') {
                price = (12 + 12*0.09) * days;
                return price;
            }else if (SelectEngin() === 'Essence') {
                price = (12 + 12*0.14) * days;
                return price;
            }else if (SelectEngin() === 'Diesel') {
                price = (12 + 12*0.21) * days;
                return price;
            }

            break;

        case 'Compact':
            if (SelectEngin() === 'Hybrid') {
                price = (14 + 14*0.09) * days;
                return price;
            }else if (SelectEngin() === 'Essence') {
                price = (14 + 14*0.14) * days;
                return price;
            }else if (SelectEngin() === 'Diesel') {
                price = (14 + 14*0.21) * days;
                return price;
            }
            break;

         case 'Berline':

          if(getGearBox() === 'Automatic')
          {
            if (SelectEngin() === 'Hybrid') {
                price = (20 + 20*(0.09+0.19)) * days;
                return price;
            }else if (SelectEngin() === 'Essence') {
                price = (20 + 20*(0.14 + 0.19 )) * days;
                return price;
            }else if (SelectEngin() === 'Diesel') {
                price = (20 + 20*(0.21 + 0.19)) * days;
                return price;
            }else{
                if (SelectEngin() === 'Hybrid') {
                    price = (20 + 20*0.09) * days;
                    return price;
                }else if (SelectEngin() === 'Essence') {
                    price = (20 + 20*0.14 ) * days;
                    return price;
                }else if (SelectEngin() === 'Diesel') {
                    price = (20 + 20*0.21) * days;
                    return price;
            }
        }
    }
            break;

        case 'Utilitaire':
            price = (16 + 16*0.21) * days;
            break;
            
        case 'Engin de chantier':
            if (SelectEngin() === 'Essence') {
                price = (900 + 900*0.14 ) * days;
                return price;
            }else if (SelectEngin() === 'Diesel') {
                price = (900 + 900*0.21) * days;
                return price;
             }

             break;

        case 'Camion':
            price = (250 + 250* (0.21+ 0.19))*days;  
            return price;   
       default:
           break;
   }
//    console.log(setPrice(getOption()));

}
function getOption() {
    
    let select = document.querySelector(".types");
    let    output = select.value;
        
   displayEngin(output); 


}
// console.log(setPrice());

function popup() {
    
    window.alert(setPrice());
}
// SelectEnginGear(getOption());
//    console.log(NumberOfDays(date1 , date2));
// let x = document.getElementsByClassName(".Cname")
// console.log(x.innerText);


