//demerit calculator
function calculateDemeritPoints(speed) {
    const speedLimit = 70; //allowed speed limit
    const kmPerDemeritPoint = 5;//this is km for 1 demerit point
    const pointsPerKmOverLimit = Math.floor((speed - speedLimit) / kmPerDemeritPoint);//calculating the number of demerit points from the speed abov the limit
    
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const totalPoints = pointsPerKmOverLimit;
        console.log("Points:", totalPoints); //show the number of demerit points
        
        if (totalPoints > 12) {//
            console.log("License suspended");
        }
    }
}
