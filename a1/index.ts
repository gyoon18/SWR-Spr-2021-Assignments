/* myMean */
export const myMean = (array: number[]): number => {
    var average = array.reduce((a1,a2,_,b) => a1 + a2/b.length,0);
    return average;
  }

/* getPrimes */
export const getPrimes = (array: number[]): number[] => {
    return array.filter(x => 
        {for (var i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) return false;
        }
        return true;
        });
  };

/* partition */
 export const partition = (
    array: number[],
    belongToGroup1: (element: number) => boolean
  ): { group1: number[]; group2: number[] } => {
    let group1:number[] = [];
    let group2:number[] = [];
    array.map(val => belongToGroup1(val) ? group1.push(val) : group2.push(val));
    return {group1, group2};
  };

/* makeSentences */
 type Doggo = {name: string, age: number, breed: string};
  
 export const makeSentences = (array: Doggo[]): string[] => {
    let temp: string[] = [];
    array.map(doggo => temp.push(doggo.name + ' is ' + doggo.age.toFixed() + " years old, and is a " + doggo.breed));
    return temp;
};
