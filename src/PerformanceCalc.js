
const PerformanceCalculator=(runs,balls)=>{
      // Write the Logic here
      let average = 0;
      if (balls > 0) {
            average = (runs/balls);
            
            if (runs > 30 && balls < 15) {
                  average += (0.01 * average); // Additional 1% for scoring more than 30 runs in less than 15 balls
                }
            
            if (runs > 50 && balls < 20) {
                  average += (0.1 * average); // Additional 10% for scoring more than 50 runs in less than 20 balls
                }
            
            if (runs > 100 && balls < 50) {
                  average += (0.2 * average); // Additional 20% for scoring more than 100 runs in less than 50 balls
                }
             
            }
            
            
            return average;
      }
      

//console.log(PerformanceCalculator(109, 17))
module.exports={PerformanceCalculator}
