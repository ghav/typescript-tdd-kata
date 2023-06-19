
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.
// Example:
// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
export default function fizzBuzz (num: number): string[] {
    let answers = []
    for (let i = 1; i <= num; i++) {
        if(i % 3 == 0 && i % 5 == 0){
            // answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
            answers.push("FizzBuzz");
        }
        else if(i % 3 == 0){
            // answer[i] == "Fizz" if i is divisible by 3.
            answers.push("Fizz");
        }
        else if(i % 5 == 0){
            // answer[i] == "Buzz" if i is divisible by 5.
            answers.push("Buzz");
        }
        else{
            // answer[i] == i if non of the above conditions are true.
            answers.push(i.toString());
        }
      }
    return answers;
}