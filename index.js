const getFloorLiftValue = document.getElementsByClassName("floorLiftValue");
getFloorLiftValue[0].addEventListener("click", getValue);
const floorValue = document.getElementById("inputfloors");
const container = document.getElementsByClassName("container");
const liftValue = document.getElementById("inputLifts");
let lift = [];
let floors = [];
function getValue() {
  // if(floorValue<1 || floorValue > 7){
  //     alert("the lift must be")
  //     return;
  // }
  if (floorValue.value !== "" || liftValue.value !== "") {
    document.querySelector(".form").classList.add("hide");
  }
  renderFloors(floorValue.value);
  renderLifts(liftValue.value);
}

function renderFloors(floors) {
  for (i = 0; i < floors; i++) {
    let generatedFloor = document.createElement("div");
    generatedFloor.id = `floor-${i}`;
    generatedFloor.className = "floors";

    let buttonGenerated = document.createElement("button");
    buttonGenerated.className = "callbtn";
    buttonGenerated.id = `floor-btn${i}`;
    buttonGenerated.innerHTML = "call";
    generatedFloor.appendChild(buttonGenerated);
    container[0].appendChild(generatedFloor);
    // floors.push(generatedFloor)
  
    
  }
}
function renderLifts(lifts) {

  for(i=0;i<lifts;i++){
    let generatedLift = document.createElement('div');
    generatedLift.id = `lift-${i}`;
    generatedLift.className="lifts";
    container[0].appendChild(generatedLift)
  }
}
