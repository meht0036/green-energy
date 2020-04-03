// creating shortcut for printing
const p = console.log;

// get the references to interactive HTML elements
const ctrlBtns = document.querySelectorAll('.controls button');
const headings = document.querySelector('.headings');
const bodytext = document.querySelector('.bodytext');
const img      = document.querySelector(".image");

let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];

// create array that will store the data
let pages = [
    {
        heading: "Home Solar Panels",
        bodyText: "An ever increasing number of individuals are arranging the materials,learning the procedure and making solar panels for their homes. It won't let you get totally off the grid, however it will decrease your power bill. There is even an approach to catch and store solar energy in batteries. On the off chance that you consolidate new parts with used and even rescued materials, you can make a solar panel for as little as $100. It will require some investment and exertion, and one panel will deliver minimal in excess of a couple of volts, yet it is a beginning. When connected in a circuit, several solar panels can cut into your power bill extensively.",
        thumb: "./img/solar-energy.jpg"
    },
    {
        heading: "Hydro Power",
        bodyText: "Hydroelectricity remains the most lowest cost source of electricity around the world, as indicated by an ongoing report by the International Renewable Energy Agency, entitled Renewable Power Generation Costs in 2017. Hydro power  benefits customers through lower power costs. States that get most of their power from hydropower like Idaho, Washington, and Oregon on normal have vitality charges that are lower than the rest of the nation. Depending just on the intensity of moving water, hydro costs don't rely upon unpredictable changes in fuel costs. Hydropower offers the most minimal levelized cost of power over all significant fossil fuel and renewable energy  power sources, and expenses even not as much as energy efficiency options, as indicated by an ongoing report from Navigant Consulting and the American Council on Renewable Energy (ACORE).",
        thumb: "./img/hydro-power.jpg"
    },
    {
        heading: "Wind Turbine",
        bodyText: "Another choice for moderately cheap inexpensive sources of alternative energy is a wind turbine. Once more, there is a decent lot of information and readiness associated with this endeavor, however once you have an understanding, you can order a wide range of materials to assemble it. Like solar panels at home, you presumably won't get off the grid completely, yet your hand crafted wind power generator will reduce your month to month bill.",
        thumb: "./img/wind-energy.jpg"
    }
];
// create function that handles click-event
function  clickBtn(ev) {
    
    // Brightspsce Ref: Week 6
    let clickedButton = ev.target;
    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let index = btnsArray.indexOf(clickedButton);
    p(index);
    
    // MDN Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element
    p(clickedButton.id);
    // handle moving id-active to the currently clicked button 

        // remove currently present id="active"
        for (let i = 0; i<ctrlBtns.length; i++){
            // claiming that current element in the loop containe attribute
            if(ctrlBtns[i].id){
                // MDN ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
                ctrlBtns[i].removeAttribute('id');
            }  
        }

        // assign id="active" to the currently clicked button
        clickedButton.id='active';    
    
    // load the corresponding data into <div class="container"></div>
    headings.innerHTML = `
        ${pages[index].heading}
    `;
    bodytext.innerHTML = `
        ${pages[index].bodyText}
    `;
    img.src= `
        ${pages[index].thumb}
    `;

}
// register your buttons for click event
for(let i = 0; i<ctrlBtns.length; i++){ 
    ctrlBtns[i].addEventListener('click', clickBtn);  
}
