/**
 * 
 * Problem Description
 * Total Marks: 25 marks
 * 
 * 
 * Avenger Steven is trying to decode the secret number from a list of binary 
 * search trees (BSTs). The list of BSTs contains the information needed to decode 
 * the secret number. Each BST in the list has a magic number which is the maximum 
 * value in the BST, and can be obtained by traversing the individual BSTs. 
 * 
 * However, not all magic numbers are valid. It appears that only magic numbers 
 * from height-balanced BSTs are valid. To obtain the secret number, he needs to 
 * obtain the sum of all valid magic numbers.
 * 
 * The height of a BST is defined as the largest number of edges from the root 
 * to the most distant leaf node. This means that a leaf node will have a height 
 * of 0, while null (i.e. a non-existent node) will have a height of -1.
 * 
 * A BST is height-balanced when the heights of the left and right subtrees differ
 * by not more than 1.
 * 
 * For all the questions, you may assume that only BSTs are inputted, and not
 * any other tree structure.
 * 
 */

// Definitions

const left_subtree_one = list(1, list(0, null, null), null);
const right_subtree_one = list(3, null, list(4, null, null));
const tree_one = list(2, left_subtree_one, right_subtree_one);

const left_subtree_two = list(1, null, null);
const right_subtree_two = list(3, null, list(4, null, list(5, null, null)));
const tree_two = list(2, left_subtree_two, right_subtree_two);

const tree_three = null;

const tree_list = list(tree_one, tree_two, tree_three);

/**
 * 
 * Question 1 [3 marks]
 * 
 * To simplify matters, we will define a tree is a list of three elements.
 * The elements are the value, left subtree and right subtree respectively.
 * 
 * Define three functions to obtain the value, left subtree and right subtree
 * of a given tree.
 * 
 * Name them as get_value, get_left_subtree and get_right_subtree.
 * 
 * 
 */
 
function get_value(tree) {
    // SOLUTION HERE
}

function get_left_subtree(tree) {
    // SOLUTION HERE
}

function get_right_subtree(tree) {
    // SOLUTION HERE
}
 
 
// Test Cases
// get_value(tree_one); // returns 2
// get_value(get_left_subtree(tree_one)); // returns 1
// get_value(get_right_subtree(tree_three)); // returns null
 
/**
 * 
 * Question 2 [5 marks]
 * 
 * Write a function called compute that returns the height of the given BST.
 * 
 * 
 */
 
function compute(tree) {
    // SOLUTION HERE
}


// Test Cases
// compute(tree_one); // returns 2
// compute(tree_two); // returns 3
// compute(tree_three); // returns -1
 
/**
 * 
 * Question 3 [5 marks]
 * 
 * Write a function called is_balanced that returns a boolean.
 * This function returns true if the BST is balanced and false otherwise.
 * 
 * 
 */
 
function is_balanced(tree) {
    // SOLUTION HERE
}
 
// Test Cases
// is_balanced(tree_one); // returns true
// is_balanced(tree_two); // returns false
// is_balanced(tree_three); // returns true

 
 /**
  * 
  * Question 4 [5 marks]
  * 
  * Write a function process_list that returns a list containing only the valid
  * BSTs (i.e. height-balanced BSTs).
  * 
  * 
  */
  
function process_list(list) {
    // SOLUTION HERE
}

// Test Cases
// display_list(process_list(tree_list));

/*
    displays list(
                list(2, 
                    list(1, list(0, null, null), null), 
                    list(3, null, list(4, null, null))),
                null)
*/
  
/**
 * 
 * Question 5 [7 marks]
 * 
 * 
 * Given the list of BSTs, we need to find the maximum value only in height-balanced 
 * BSTs, and compute the total of these maximum values.
 * 
 * Note that the maximum value in an empty BST is defined to be 0.
 * 
 * Write a function called solve that will return the secret number.
 * 
 * 
 */

 
function solve(list) {
    // SOLUTION HERE
}

// Test Cases
// solve(tree_list); // returns 4
// solve(list(tree_two)); // returns 0
// solve(list(tree_three)); // returns 0



