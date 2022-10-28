
////////////////////////////////////////////////////////////
// LIST PROCESSING
////////////////////////////////////////////////////////////

function all_different(nums) {
    if (is_null(nums)) {
        return true;
    } else {
        let head_is_unique = is_null(member(head(nums), tail(nums)));
        return head_is_unique && all_different(tail(nums));
    }
}

// all_different(list(1,2,3,0));

function count_pairs(x) {
    let pairs = null;
    function check(y) {
        if (!is_pair(y)) {
            return undefined;
        } else if (!is_null(member(y, pairs))) {
            return undefined;
        } else {
            pairs = pair(y, pairs);
            check(head(y));
            check(tail(y));
        }
    }
    check(x);
    return length(pairs);
}
// count_pairs(list(1,2,3)); 


////////////////////////////////////////////////////////////
// TREE PROCESSING
////////////////////////////////////////////////////////////


function scale_tree(tree , factor) {
    return map(
            sub_tree =>
                ! is_list(sub_tree)
                    ? factor * sub_tree
                    : scale_tree(sub_tree , factor),
            tree);
}


function map_tree(f, tree) {
    return map(
            sub_tree =>
                ! is_list(sub_tree)
                    ? f(sub_tree)
                    : map_tree(f, sub_tree),
            tree);
}



function count_data_items(tree) {
    return is_null(tree)
        ? 0
        : ( is_list(head(tree))
            ? count_data_items(head(tree))
            : 1 )
            +
            count_data_items(tail(tree));
}

function accumulate_tree(f1, f2, initial, tree) {
    return is_null(tree)
        ? initial
        : f2( is_list(head(tree))
            ? accumulate_tree(f1, f2, initial, head(tree))
            : f1(head(tree)),
                accumulate_tree(f1, f2, initial, tail(tree)));
}

////////////////////////////////////////////////////////////
// MERGE SORT (LIST)
////////////////////////////////////////////////////////////

function take(xs, n) {
    function iterate(i, new_list) {
        return i >= n
                ? new_list
                : iterate(
                    i + 1, 
                    append(new_list, list(list_ref(xs, i))));
    }
    return iterate(0, null);
}

// drop the first n elements from list, return rest
function drop(xs, n) {
    function iterate(i, new_list) {
        return i >= n
                ? new_list
                : iterate(
                    i + 1,
                    tail(new_list));
    }
    return iterate(0, xs);
}

// function merge(xs, ys) {
//     if (is_null(xs)) {
//         return ys;
//     } else if (is_null(ys)) {
//         return xs;
//     } else {
//         const x = head(xs);
//         const y = head(ys);
//         return (x < y)
//             ? pair(x, merge(tail(xs), ys))
//             : pair(y, merge(xs, tail(ys)));
//     }
// }

function middle(number) {
    return math_floor((number) / 2);
}

// function merge_sort(xs) {
//     if (is_null(xs) || is_null(tail(xs))) {
//         return xs;
//     } else {
//         const mid = middle(length(xs));
//         return merge(
//                 merge_sort(take(xs , mid)),
//                 merge_sort(drop(xs, mid )));
//     }
// }

////////////////////////////////////////////////////////////
// DESTRUCTIVE LIST PROCESSING
////////////////////////////////////////////////////////////

function d_map(fun, xs) {
    if (!is_null(xs)) {
        set_head(xs, fun(head(xs)));
        d_map(fun, tail(xs));
    } else { }
}


function d_append(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else {
        set_tail(xs, d_append(tail(xs), ys));
        return xs;
    }
}

////////////////////////////////////////////////////////////
// ARRAY PROCESSING
////////////////////////////////////////////////////////////

function equal_array(A, B) {
    if (!is_array(A) || !is_array(B)) {
        return false;
    } else if (array_length(A) !== array_length(B)) {
        return false;
    } else {
        let is_equal = true;
        const len = array_length(A);
        for (let i = 0; is_equal && i < len; i = i + 1) {
            if (is_array(A[i]) || is_array(B[i])) {
                is_equal = equal_array(A[i], B[i]);
            } else {
                is_equal = equal(A[i], B[i]);
            }
        }
        return is_equal;
    }
}
// const A = [1,2];
// const B = A;
// equal_array(A, B);

function enum_array(a, b) {
    const arr = [];
    const len = b - a + 1;
    let num = a;
    for (let i = 0; i < len; i = i + 1) {
        arr[i] = num;
        num = num + 1;
    }
    return arr;
    // returns [] if a > b
}


function map_array(f, arr) {
    const len = array_length(arr);
    function iter(i) {
        if (i < len) {
            arr[i] = f(arr[i]);
            iter(i + 1);
        }
    }
    iter(0);
}

// const seq = [3, 1, 5];
// map_array(x => 2 * x, seq);
// seq;

function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

function reverse_array(A) {
    const len = array_length(A);
    const half_len = math_floor(len / 2);
    for (let i = 0; i < half_len; i = i + 1) {
        swap(A, i, len - 1 - i);
    }
}


function copy_array(A) {
    const len = array_length(A);
    const B = [];
    for (let i = 0; i < len; i = i + 1) {
        B[i] = A[i];
    }
    return B;
}


function array_to_list(A) {
    const len = array_length(A);
    let L = null;
    for (let i = len - 1; i >= 0; i = i - 1) {
        L = pair(A[i], L);
    }
    return L;
}

function list_to_array(L) {
    const A = [];
    let i = 0;
    for (let p = L; !is_null(p); p = tail(p)) {
        A[i] = head(p);
        i = i + 1;
    }
    return A;
}


function digits_to_string(digits) {
    const len = array_length(digits);
    let str = "";
    for (let i = 0; i < len; i = i + 1) {
        str = str + stringify(digits[i]);
    }
    return str;
}
// const D = [8, 3, 9, 2, 8, 1];
// digits_to_string(D);  // returns "839281"

////////////////////////////////////////////////////////////
// MATRIX (ARRAYS)
////////////////////////////////////////////////////////////

function zero_matrix(rows, cols) {
    const M = [];
    for (let r = 0; r < rows; r = r + 1) {
        M[r] = [];
        for (let c = 0; c < cols; c = c + 1) {
            M[r][c] = 0;
        }
    }
    return M;
}


function matrix_multiply_nxn(n, A, B) {
    const M = [];
    for (let r = 0; r < n; r = r + 1) {
        M[r] = [];
        for (let c = 0; c < n; c = c + 1) {
            M[r][c] = 0;
            for (let k = 0; k < n; k = k + 1) {
                M[r][c] = M[r][c] + A[r][k] * B[k][c];
            }
        }
    }
    return M;
}

function rotate_matrix(M) {
    const n = array_length(M); // M is assumed n x n
    function swap(r1, c1, r2, c2) {
        const temp = M[r1][c1];
        M[r1][c1] = M[r2][c2];
        M[r2][c2] = temp;
    }
    // Do a matrix transpose first.
    transpose_matrix(M);
    
    // Then reverse each row.
    const half_n = math_floor(n / 2);
    for (let r = 0; r < n; r = r + 1) {
        for (let c = 0; c < half_n; c = c + 1) {
            swap(r, c, r, n - c - 1);
        }
    }
}

function transpose_matrix(M) {
    const n = array_length(M); // M is assumed n x n
    function swap(r1, c1, r2, c2) {
        const temp = M[r1][c1];
        M[r1][c1] = M[r2][c2];
        M[r2][c2] = temp;
    }
    for (let r = 0; r < n; r = r + 1) {
        for (let c = r + 1; c < n; c = c + 1) {
            swap(r, c, c, r);
        }
    }
}

const mat = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
rotate_matrix(mat);
mat;

////////////////////////////////////////////////////////////
// BINARY SEARCH (ARRAYS)
////////////////////////////////////////////////////////////

// binary search using recursion
function binary_search(A, v) {
    function search(low, high) {
        if (low > high) {
            return false;
        } else {
            const mid = math_floor((low + high) / 2);
            return (v === A[mid]) ||
                    (v < A[mid]
                    ? search(low, mid - 1)
                    : search(mid + 1, high));
        }
    }
    return search(0, array_length(A) - 1);
}

// binary search using loop
// function binary_search(A, v) {
//     let low = 0;
//     let high = array_length(A) - 1;
//     while (low <= high) {
//         const mid = math_floor((low + high) / 2 );
//         if (v === A[mid]) {
//             break;
//         } else if (v < A[mid]) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return (low <= high);
// }

////////////////////////////////////////////////////////////
// MERGE SORT (ARRAYS)
////////////////////////////////////////////////////////////

function merge_sort(A) {
    merge_sort_helper(A, 0, array_length(A) - 1);
}
function merge_sort_helper(A, low, high) {
    if (low < high) {
        const mid = math_floor((low + high) / 2);
        merge_sort_helper(A, low, mid);
        merge_sort_helper(A, mid + 1, high);
        merge(A, low, mid, high);
    }
}

function merge(A, low, mid, high) {
    const B = []; // temporary array
    let left = low;
    let right = mid + 1;
    let Bidx = 0;
    while (left <= mid && right <= high) {
        if (A[left] <= A[right]) {
            B[Bidx] = A[left];
            left = left + 1;
        } else {
            B[Bidx] = A[right];
            right = right + 1;
        }
        Bidx = Bidx + 1;
    }
    while (left <= mid) {
        B[Bidx] = A[left];
        Bidx = Bidx + 1;
        left = left + 1;
    }
    while (right <= high) {
        B[Bidx] = A[right];
        Bidx = Bidx + 1;
        right = right + 1;
    }
    for (let k = 0; k < high - low + 1; k = k + 1) {
        A[low + k] = B[k];
    }
}

// const arr = [2, 4, 1, 2, 3, 5, 7,6, 5];
// merge_sort(arr);
// arr;

////////////////////////////////////////////////////////////
// MEMOISATION (2-DIMENSION)
////////////////////////////////////////////////////////////


const mem = [];
function read(n, k) {
    return mem[n] === undefined
        ? undefined
        : mem[n][k];
}
function write(n, k, value) {
    if (mem[n] === undefined) {
    mem[n] = [];
    }
    mem[n][k] = value;
}

// n-choose-k with memoisation
function mchoose(n, k) {
    if (read(n, k) !== undefined) {
        return read(n, k);
    } else {
        const result = k > n ? 0
                : k === 0 || k === n ? 1
                : mchoose(n - 1, k) +
                  mchoose(n - 1, k - 1);
        write(n, k, result);
        return result;
    }
}


////////////////////////////////////////////////////////////
// SUBSETS, PERMUTATIONS
////////////////////////////////////////////////////////////

function permutations(s) {
    return is_null(s)
            ? list(null)
            : accumulate(append, null,
                        map(x => map(p => pair(x, p),
                        permutations(remove(x, s))),
                        s));
}

function subsets(xs) {
    return accumulate(
                (x, ss) => append(ss, map(s => pair(x, s), ss)),
                list(null),
                xs);
}

// function subsets(xs) {
//     if (is_null(xs)) {
//         return list(null);
//     } else {
//         const subsets_rest = subsets(tail(xs));
//         const x = head(xs);
//         const has_x = map(s => pair(x, s), subsets_rest);
//         return append(subsets_rest, has_x);
//     }
// }

function remove_duplicates(lst) {
    // returns a set (list of distinct objects)
    return is_null(lst)
        ? null
        : pair(
            head(lst),
            remove_duplicates(
                filter(x => !equal(x, head(lst)), tail(lst))));
}

// remove_duplicates(list(1,1,2,3,4,5,6,6)); // returns list(1,2,3,4,5,6)

// function remove_duplicates(lst) {
//     return accumulate(
//             (x, xs) =>
//                 is_null(member(x, xs))
//                     ? pair(x, xs)
//                     : xs,
//             null,
//             lst);
// }






////////////////////////////////////////////////////////////
// BAE TREE
////////////////////////////////////////////////////////////

function build_BAE_tree(bae_list) {
    let next_token = bae_list;

    function build_tree() {
        if (equal(head(next_token), "(")) {
            next_token = tail(next_token);
            let left_tree = build_tree();
            let op = head(next_token);
            next_token = tail(next_token);
            let right_tree = build_tree();
            next_token = tail(next_token); // skip over ")"
            return list(left_tree, op, right_tree);
        } else { // token is a number
            let token = head(next_token);
            next_token = tail(next_token);
            return token;
        }
    }

    return build_tree();
}






