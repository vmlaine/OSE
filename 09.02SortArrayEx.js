let array = ["Milk", "Bread", "Juice", "Eggs", "Butter", "Salt", "Oranges", "Apples"];

function sortArray() {
    array.sort();
    array.reverse();
    
    for (var i=0; i<array.length; i++) {
    console.log(array[i]);
    }
}