// Add a data object here:
let inventoryData = {
    sum: 0
};

// Add an application object here:
let inventoryCounterApp = {
    add: function (count) {
        inventoryData.sum = inventoryData.sum + count;
    },
    counter: function () {
        let input = document.getElementById("count").value;
        let addCount = parseInt(input);

        this.add(addCount);
        document.getElementById("result").innerHTML = "Total inventory count: " + inventoryData.sum;
    }
}

