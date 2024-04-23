// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    const takeOff= document.getElementById("takeoff");
    const spacesShuttleHeight= document.getElementById("spaceShuttleHeight");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground= document.getElementById("shuttleBackground");
    const rocket= document.getElementById("rocket");
    const landing= document.getElementById("landing");
    const missionAbort= document.getElementById("missionAbort");
    const up= document.getElementById('up');
    const down= document.getElementById('down');
    const right= document.getElementById('right');
    const left= document.getElementById('left');
    rocket.style.position= "absolute";
    rocket.style.bottom= '0px';
    rocket.style.left= '0px';
    takeOff.addEventListener('click', () => {
        const confirmed = confirm('Are you sure the shuttle is ready for takeoff?');
        if(confirmed){
            flightStatus.innerHTML = 'Shuttle in flight';
            spacesShuttleHeight.innerHTML = 10000;
            shuttleBackground.style.backgroundColor= "blue";
            rocket.style.bottom = "10px";
            rocket.style.left= "10px";
        };
    });
    landing.addEventListener('click', () => {
        alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed';
        shuttleBackground.style.backgroundColor= "green";
        spacesShuttleHeight.innerHTML = 0;
        rocket.style.bottom= '0px';
        rocket.style.left= '0px';
        
    });
    missionAbort.addEventListener('click', () => {
    const confirmed= confirm('Confirm that you want to aborth the mission.');
    if(confirmed){
        flightStatus.innerHTML = 'Mission aborted';
        shuttleBackground.style.backgroundColor= "green";
        spacesShuttleHeight.innerHTML= 0;
        rocket.style.bottom= '0px';
        rocket.style.left= '0px';
    };
});
up.addEventListener('click', () => {
      let currentBottom = parseInt(rocket.style.bottom);
      currentBottom += 10;
      rocket.style.bottom = currentBottom + 'px';
      spacesShuttleHeight.innerHTML =parseInt(spacesShuttleHeight.innerHTML) + 10000;
});
down.addEventListener('click', () => {
    let currentBottom = parseInt(rocket.style.bottom);
    currentBottom -= 10;
    rocket.style.bottom = currentBottom + 'px';
    spacesShuttleHeight.innerHTML =parseInt(spacesShuttleHeight.innerHTML) - 10000;
});
right.addEventListener('click', () => {
    let currentLeft = parseInt(rocket.style.left);
    currentLeft += 10;
    rocket.style.left = currentLeft + 'px';
});
left.addEventListener('click', () => {
    let currentLeft = parseInt(rocket.style.left);
    currentLeft -= 10;
    rocket.style.left = currentLeft + 'px';
});
});
