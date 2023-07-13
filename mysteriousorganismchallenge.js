// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, dnaArr) => {
  return {
  specimenNum: number,
  dna: dnaArr,
  mutate() {
    let randNumber = Math.floor(Math.random() * 15) // generates a random number between 0 and 14
    let randBase = dnaArr[randNumber]; // selects a random base from the Dna array
    let diffBase = returnRandBase(); // generated a random base to mutate the previous one
    while (randBase === diffBase) { // prevents the assignment of the same base
      diffBase = returnRandBase();
      continue;
      } dnaArr[randNumber] = diffBase;
      return dnaArr;
    },
  compareDna(number, pAequorStrand) {
      currentStrand = this.dna;
      comparingStrand = pAequorStrand;
      let commonBases = [];
      for (let i=0; i<15; i++) { // cycles through both arrays to find common bases
        if(currentStrand[i] === comparingStrand[i]) {
          commonBases.push(currentStrand[i]);
        } else continue;
      }
      let percentage = ((commonBases.length/15) * 100).toFixed(2); //converts commonBases array in percentage
      return `Specimen ${this.specimenNum} and specimen ${number} have ${percentage}% DNA in common.`;
    },
  willLikelySurvive() {
      let cOrGBase = [];
      for (let i=0; i<15; i++) { // cycles through the array to find all C and G bases and pushes them in an array
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cOrGBase.push(this.dna[i]);
        }
      }
      let percentage = ((cOrGBase.length/15)*100).toFixed(2);
      if (percentage >= 60) {
        return true;
      } else return false;
    }
  } 
}

const specimensOfPAequor = number => {
  let instancesOfPAequor = []; //array to contain the multiple specimens
  let instanceOfPAequor = []; //array to contain a single specimen
  for (let i=1; i<=number; i++) { //creates the requested number of specimens as per the function parameter
    let newStrand = mockUpStrand();
    instanceOfPAequor = pAequorFactory(i, newStrand);
    instancesOfPAequor.push(instanceOfPAequor.specimenNum);
    instancesOfPAequor.push(instanceOfPAequor.dna);
  }
  return instancesOfPAequor;
}
