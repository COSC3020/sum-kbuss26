/* Keifer Buss
 * COSC-3020-01 
 * Last modified Jan 24 2024
 * Help received: None */

function sum(a) {
    /* The issue with the program is that it counts the first array value twice:
     * once in the sum declaration and once in the loop iteration. While there are multiple
     * ways to fix this, I ultimately decided to change the declaration of the sum variable
     * to be 0 so that the sum can return 0 in the theoretical event of an empty list entered as an argument. */
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
