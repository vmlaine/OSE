let nutRepository = {
    nutCount: 0
};

var squirrel = {        
    add : function(nuts) {
        nutRepository.nutCount = nutRepository.nutCount + nuts;
        
    },
    deposit: function() { 
        let addNuts = document.getElementById("nuts").value;
        let nutsToAdd = parseInt(addNuts);

        this.add(nutsToAdd);
        document.getElementById("result").innerHTML = "My total nut count is " + nutRepository.nutCount;
    }
    
};