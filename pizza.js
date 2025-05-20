const bar = document.getElementById('bar')
const time = document.getElementById('time')
const status = document.getElementById('status');
const number = document.getElementById('number');
let orderComplete =  false
const pizzaorder = document.getElementById("order");
let barPercentage = 0;
let width = 0
let slider = ''
const orderupdates = [
    "we've recived your order and it has been sent to the kitchen"
] 


timeleft = 0;
let pizza = {
    size:"",
    crust:"",
    toppings:[]
}




document.getElementById('addPizza').addEventListener('click', function(){
    pizzaorder.innerHTML =` <div class="order section">
    <div class="forms">
        <label for="size">Selected a size</label>
        <select name="size" id="size>
            <option value="small">small</option>
            <option value="meduim">meduim</option>
            <option value="large">large</option>
            <option value="Xlarge">Xlarge</option>

        </select>
        <div class="forms">
            <label for="crust"> Selected a crust</label>
            <select name="crust" id="crust">
                <option value="thin">thin</option>
                <option value="regular">regular</option>
                <option value="thick">thick</option>
                <option value="stuffed">stuffed</option>

            </select>
            
        </div>
        <div class="forms">
            <label for="toppings"> Selected topping(max:4)</label>
            <select multiple name="topping" id="toppings"  size="4">
                <option value="peperoni">peperoni</option>
                <option value="mushrooms">mushrooms</option>
                <option value="onions">onions</option>
                <option value="sauseges">sauseges</option>
                <option value="bacon">bacon</option>
                <option value="extra-cheese">extra cheese</option>
                <option value="peppers">peppers</option>
                <option value="olives">olives</option>

            </select>>

            
        </div>
        <button onclick=finish() id="finsih">Finish order</button>`
        
        pizzaorder.style.display="block"
        number.innerHTML = "#"+(Math.round(Math.random()*10000))


})
function finish(){
    pizza.crust = document.getElementById('crust').value
    pizza.size = document.getElementById('size')
    pizza.toppings = document.getElementById('toppings').value
    console.log(pizza)
    pizzaorder.style.display="none"
    timeleft = 1200
    slider = setInterval(updatebar,100)
   
    setTimeout(()=>{
        const updates = document.getElementById('order-updates');
        const addedcontent = document.createElement('p')
        addedcontent.innerText =  "we've recived your order and it has been sent to the kitchen"
        updates.appendChild(addedcontent)
        setTimeout(()=>{
            const updates = document.getElementById('order-updates');
            const addedcontent = document.createElement('p')
            addedcontent.innerText = " your pizza is on the way"  
            updates.appendChild(addedcontent)
            setTimeout(()=>{
                const updates = document.getElementById('order-updates');
                const addedcontent = document.createElement('p')
                addedcontent.innerText = " your pizza will arive in 5 minutez"  
                updates.appendChild(addedcontent)
                setTimeout(()=>{
                    const updates = document.getElementById('order-updates');
                    const addedcontent = document.createElement('p')
                    addedcontent.innerText = " your pizza has arrived"  
                    updates.appendChild(addedcontent)


                    const pickup = document.createElement('button')
                    pickup.addEventListener('click',()=>{
                        updates.innerHTML = ''
                        

                        
                    })
                     const body =document.getElementById('body')
                     body.appendChild
                     
                     



                    
                },5000
                
                );
                
            },11000
            
            );
            
        },3999
        
        );
        
    },1
    );

    let timer = setInterval( ()=> {
        //update ready in
        timeleft -= 60

        time.innerHTML = timeleft/60+":00"






        if(timeleft <= 0){
            clearInterval(timer)
        }

    

        
    },1000)
   


}
function updatebar(){
    width+=0.5
    if(width >= 100){
        clearInterval(slider)
    }
    const statusbar =  document.getElementById('statusbar');

    

    statusbar.style.width =`${width}%
    `


    

}
function orderUpdates(){

    

    
}







