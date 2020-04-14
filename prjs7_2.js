
let computer_parts = [
    ["Monitors", "LCD Screens", "Vibrant Colors"],
    ["Motherboards", "Fast"],
    ["Chips", "Pentium", "Very Fast"],
    ["Hard Drives", "100-500 GB", "Fast Reading"],
    ["DVD-ROMs", "Burn CDs", "Burn DVDs", "Listen to both!"],
    ["Cases", "All Sizes", "Choice of Colors"],
    ["Power Supplies", "We can get one for any computer!"]
];

document.write("<h1>Computer Parts</h1>");

for (let i = 0; i < computer_parts.length; i++) {

      for (let j = 0; j < computer_parts[i].length; j++) {
          if ( j === 0 ) {
              document.write("<strong>"+computer_parts[i][j]+": </strong>");
          }
          else if (j === computer_parts[i].length - 1){
              document.write(computer_parts[i][j]+"<br>");
          }
          else {
              document.write(computer_parts[i][j]+", ");
          }
      }

}