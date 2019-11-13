function wordCount(arrayOfStrings) {
    // Create Object For Key-Value Pairs
  var countResultantObject = {};

  // Loop Through Array Using Filter To Get Number Of Individual Elements
  for (i = 0; i < array.length; i++) {
    var elementNumber = array.filter(function(element) {return element == array[i]});
    countResultantObject[array[i]] = elementNumber.length;
  }
  // Return Results
  console.log("wordCount Results:");
  console.log(countResultantObject);
}

wordCount(['a', 'b', 'a', 'c', 'b']);
wordCount(['c', 'b', 'a']);
wordCount(['c', 'c', 'c', 'c']);
console.log("\n");



module.exports = wordCount;