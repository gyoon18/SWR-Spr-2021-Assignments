/* myMean */
export const myMean = (array: number[]): number => {
    var average = array.reduce((a1,a2,_,b) => a1 + a2/b.length,0);
    return average;
  }
  // testing purposes
  const numArray: number[] = [1, 2, 3, 4, 5, 6];
  console.log(myMean(numArray)); // expected: 3.5

/* getPrimes */
export const getPrimes = (array: number[]): number[] => {
    return array.filter(x => 
        {for (var i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) return false;
        }
        return true;
        });
  };
  // testing purposes
  const primeArray: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(getPrimes(primeArray)); //expected: [2, 3, 5, 7]

/* partition */
/* export const partition = (
    array: number[],
    belongToGroup1: (element: number) => boolean
  ): { group1: number[]; group2: number[] } => {
    TODO
  }; */

/* makeSentences */
/* type Doggo = any;

export const makeSentences = (array: Doggo[]): string[] => {
  TODO
}; */
