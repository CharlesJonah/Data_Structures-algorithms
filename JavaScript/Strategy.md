## Thought Process and approach for Technical Interviews:

  * __R__ - Repeat the Question and Ask Questions, what are some constraints on the input set? Ask for clarifications if you do not understand the problem.
  * __E__ - Examples - Go to white board and draw out example of how the program is suppose to take input and return output. Be specific and create example that are large and not a special case.
  * __A__ - Approaches - State a Brute Force way, let them know you know the easiest way and are not stuck on thinking even the easiest approach. Have many approaches and give thought process of each(state space and time complexity and tradeoffs).
  * __C__ - Code - "Breadth-First Coding" - Write out steps to solution first, then Implement the details. Get a whiteboard and get good writing neatly on whiteboard, leave room for edits and pseudocode things I can't figure out right now. Modularize helper functions to make my code cleaner.
  * __T__ - Test - Have small examples with edge cases
  * __O__ - Optimize - Can I use data stuctures or known algorithm search/sorts to optimize my solution.

### Strategies

Keep a mental list of general strategies you can turn to. Here are a few:    

  1. Bucketizing with a hash: If the input set is bounded, try organizing it into a hash.
      * Ex: Sort an array of 100,000 integers that are all in the range 1-100
  2. Dynamic programming, or "divide and conquer": Divide into smaller and smaller but equal subproblems.
      * Ex: See [this solution][dynamic-programming-ex] for a Google interview question.
  3. Look for useful mathematical properties.
      * Sometimes you have individual values when really what you care about is their sums.
      * Ex: For an array of integers 1 - 100 where all elements appear once except one that appears twice, find the repeat.
  4. [Amortized analysis][amortized-analysis]: it's ok to do something memory- or space-intensive if you can prove that this cost comes with a greater payoff.
      * Ex: Implement a queue using two stacks.
  5. Keep a stack or a queue on the side to track values as your algorithm goes through the problem.
  6. Keep two pointers for the same iteration.
      * Ex: Reverse a string in place (ie. using no more memory space than the length of the string).
  7. Perform an operation twice.
      * Ex: Reverse the word order of a string, but not the letters within the words.
  8. Sort the input.
      * Ex: Finding anagrams.
  9. Approach the problem from the other end.
      * Ex: see [this solution][pirates-ex] for a Fog Creek interview question.
  10. Use binary numbers instead of decimal numbers.
      * Ex: see the famous [Bad King][bad-king-ex] problem.
  11. For efficiency, use binary search instead of incrementation. Esp. good for implementing math operators.
      * Ex: Implement division without using "/", in less than O(n) time.

  [amortized-analysis]: http://en.wikipedia.org/wiki/Amortized_analysis
  [dynamic-programming-ex]: http://www.careercup.com/question?id=19286747
  [pirates-ex]: http://www.techinterview.org/post/526325766/pirates
  [bad-king-ex]: http://www.techinterview.org/post/526313890/bad-king


  Reference:  
  - [FullStack][Reacto]
  - [Interview Cake][Interview_cake]


  [Reacto]: [https://www.interviewcake.com/coding-interview-tips]
  [Interview_cake]: https://www.interviewcake.com/coding-interview-tips
