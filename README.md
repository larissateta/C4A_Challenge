# C4A_Challenge

## UI Photo Gallery Challenge.

This challenge involved creating a responsive photo gallery using HTML, CSS and Javascript if needed using the figma design provided, ensuring that everything is almost the same as the figma design.

### Setup Instructions
1. Clone this repository to your local machine.
``` 
https://github.com/larissateta/C4A_Challenge.git
```
3. Click on the Gallery folder.
4. Run the HTML file in it.


---
## Coding Challenge 1: Array Manipulation

This challenge involved determining if there exists a contiguous
subarray within an array that sums up to a given target, to return true if such a subarray exists,
otherwise to return false.

#### Example:
- Input: arr = [4, 2, 7, 1, 9, 5], target = 17
- Output: true
- Explanation: The subarray [7, 1, 9] sums up to 17, which is equal to the target.

- Constraints:
  - The array will contain between 1 and 100,000 elements.
  - The elements in the array and the target sum will be between -1,000,000,000 and 1,000,000,000.
- Expected Time Complexity: O(n), where n is the length of the array.
- Expected Space Complexity: O(1)
### Approach

I used a function called checkSubArraySum. The checkSubArraySum function takes an array of integers (arr) and a target sum as input. It initializes two pointers, start and end, to keep track of the current subarray being considered.
- The function iterates through the array using the end pointer. At each iteration, it adds the current element (arr[end]) to the currentSum variable.
- Then, it checks if the currentSum is greater than the target sum. If it is, it subtracts the elements at the start pointer from the currentSum and increments the start pointer until the currentSum is less than or equal to the target sum.
- If the currentSum is equal to the target sum at any point, the function returns true, indicating that a subarray with the target sum exists.
- If the loop completes without finding a subarray with the target sum, the function returns false.


---
## Coding Challenge 2: String Transformation
This challenge involved transforming a string based on the following rules:
- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform
both operations in the order specified above


#### Example: 
- Input: "Hamburger"
- Output: "regrubmaH"
- Explanation: The length of the string is 9, which is divisible by 3 but not by 5 or 15.
Therefore, the string is reversed, resulting in "regrubmaH".
  
#### Example: 
- Input: "Pizza"
- Output: "80 105 122 122 97"
- Explanation: The length of the string is 5, which is divisible by 5 but not by 3 or 15.
Therefore, each character is replaced by its ASCII code, resulting in "80 105 122 122 97".


### Approach

I used the StringTransform function. The StringTransform function takes a string as input and performs transformations based on the length of the string. It first checks if the length is divisible by 3, 5, or 15 using the modulus operator (%).
- If the length is divisible by 3, the string is reversed using the split(), reverse(), and join() array methods. 
- If the length is divisible by 5, each character is replaced with its ASCII code using the charCodeAt() method and joined together with spaces using the map() and join() methods.
- If the length is divisible by 15 (i.e., divisible by both 3 and 5), the string is first reversed, and then each character is replaced with its ASCII code, following the specified order of operations.

The transformed string is returned as the output.
