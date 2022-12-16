const getFloorLiftValue = document.getElementsByClassName("floorLiftValue");
getFloorLiftValue[0].addEventListener("click", getValue);
const floorValue = document.getElementById("inputfloors");
const container = document.getElementById("container");
const liftValue = document.getElementById("inputLifts");
let lift = [];
let floors = [];
function getValue() {
  // if(floorValue<1 || floorValue > 7){
  //     alert("the lift must be")
  //     return;
  // }
  console.log('container',container)
  if (floorValue.value !== "" || liftValue.value !== "") {
    document.querySelector(".form").classList.add("hide");
  }
  // get the number entered by user
  renderFloors(floorValue.value);
  renderLifts(liftValue.value);
}

function renderFloors(floors) {
  // generate floors
  for (i = 0; i < floors; i++) {
    let generatedFloor = document.createElement("div");
    generatedFloor.id = `floor-${i}`;
    generatedFloor.className = "floors";
  // generate button
    let buttonGenerated = document.createElement("button");
    buttonGenerated.className = "callbtn";
    buttonGenerated.id = `floor-btn${i}`;
    buttonGenerated.innerHTML = "call";
    generatedFloor.appendChild(buttonGenerated);
    container.appendChild(generatedFloor);
    // floors.push(generatedFloor)
  
    
  }
}
function renderLifts(lifts) {
  const liftSection = document.createElement('div')
  liftSection.className="liftsection";
  for(i=0;i<lifts;i++){
    let generatedLift = document.createElement('div');
    generatedLift.id = `lift-${i}`;
    generatedLift.className="lifts";
    //find bottom floor and append it to the lift
    const bottomFloor = document.getElementById(`floor-${floorValue.value-1}`)
    bottomFloor.className ="bottomfloor"
    const generatedoor1 = document.createElement('div');
    const generatedoor2 = document.createElement('div');
    generatedoor1.className='door1';
    generatedoor2.className='door2';
    generatedLift.appendChild(generatedoor1);
    generatedLift.appendChild(generatedoor2);
    liftSection.appendChild(generatedLift);
    bottomFloor.appendChild(liftSection);
 
  }

}
