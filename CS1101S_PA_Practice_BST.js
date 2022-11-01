/**
 * 
 * Problem Description
 * Total Marks: 25 marks
 * 
 * 
 * Steven is working on a project involving binary search trees (BSTs). He has a list
 * of BSTs to process, but he only needs height-balanced BSTs.
 * 
 * The height of a BST is defined as the largest number of edges from the root to the 
 * most distant leaf node. This means that a root node will have a height of 0, while
 * null (i.e. a non-existent node) will have a height of -1.
 * 
 * A BST is height-balanced when the heights of the left and right subtrees differ by
 * not more than 1.
 * 
 * For all the questions, you may assume that only BSTs are inputted.
 * 
 */

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
 * Question 1 [6 marks]
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
    return is_null(tree) ? null : list_ref(tree, 0);
}

function get_left_subtree(tree) {
    return is_null(tree) ? null : list_ref(tree, 1);
}

function get_right_subtree(tree) {
    return is_null(tree) ? null : list_ref(tree, 2);
}
 
 
// Test Cases
// get_value(tree_one); // returns 2
// get_value(get_left_subtree(tree_one)); // returns 1
// get_value(get_right_subtree(tree_three)); // returns null
 
/**
 * 
 * Question 2 [4 marks]
 * 
 * Write a function called compute that returns the height of the given input tree.
 * 
 * 
 */
 
function compute(tree) {
    if (is_null(tree)) {
        return -1;
    }
    return 1 + math_max(compute(get_left_subtree(tree)), compute(get_right_subtree(tree)));
}


// Test Cases
// compute(tree_one); // returns 2
// compute(tree_two); // returns 3
// compute(tree_three); // returns -1
 
/**
 * 
 * Question 3 [4 marks]
 * 
 * Write a function called is_balanced that returns a boolean.
 * This function returns true if the input tree is balanced and false otherwise.
 * 
 * 
 */
 
function is_balanced(tree) {
    if (is_null(tree)) {
        return true;
    }
    return math_abs(compute(get_left_subtree(tree)) - compute(get_right_subtree(tree))) <= 1
            && is_balanced(get_left_subtree(tree))
            && is_balanced(get_right_subtree(tree));
}
 
// Test Cases
// is_balanced(tree_one); // returns true
// is_balanced(tree_two); // returns false
// is_balanced(tree_three); // returns true

 
 /**
  * 
  * Question 4 [4 marks]
  * 
  * Write a function process_list that returns a list containing balanced BSTs.
  * 
  * 
  */
  
function process_list(list) {
    if (is_null(list)) {
        return null;
    }
    return filter(bst => is_balanced(bst), list);
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
 * Well done! Now that you have a function that allows Steven to obtain only balanced BSTs,
 * he can finally move on to the next step of his project!
 * 
 * Given the list of all BSTs, he wants to obtain the maximum value only in balanced BSTs,
 * and compute the total of these maximum values.
 * 
 * Note that the maximum value in an empty BST is defined to be 0.
 * 
 * Write a function called solve that will return the above total.
 * 
 * 
 */
 
 
function get_max_value(tree) {
    if (is_null(tree)) {
        return 0;
    }
    if (is_null(get_right_subtree(tree))) {
        return get_value(tree);
    }
    return get_max_value(get_right_subtree(tree));
}
 
function solve(list) {
    if (is_null(list)) {
        return 0;
    }
    const filtered_list = process_list(list);
    if (is_null(filtered_list)) {
        return 0;
    }
    return get_max_value(head(filtered_list)) + solve(tail(filtered_list));
}

// Test Cases
// solve(tree_list); // returns 4
// solve(list(tree_two)); // returns 0
// solve(list(tree_three)); // returns 0



