function processName() {

    // read value of name from the input field
    let name = document.getElementById("name").value;

    // show it with "ALL CAPS" using toUpperCase()
    document.getElementById("upperCase").innerHTML = `With upper case letters: ${name.toUpperCase()}` ;

    // show it with  "all small letters" using toLowerCase()
    document.getElementById("lowerCase").innerHTML = `With lower case letters: ${name.toLowerCase()}`;

    //tell how many characters are there (length, includes also all spaces)
    document.getElementById("length").innerHTML = `Character count: ${name.length}`;

    //tell, whether the input string contains the word 'muumi'
    let containsMuumi = name.includes("muumi");
    if (containsMuumi == true) {
        document.getElementById("contains").innerHTML = `Contains the text muumi.`;
    } else {
        document.getElementById("contains").innerHTML = `Doesn't contain the text muumi.`;
    }

    // tell the first character using charAt()
    document.getElementById("firstCharacter").innerHTML = `First character: ${name.charAt(0)}`;

    // tell which ones are the first three characters using substring().
    let firstThreeCharacters = name.substring(0, 3);
    document.getElementById("manyCharacters").innerHTML = `First three characters: ${firstThreeCharacters}`;
}