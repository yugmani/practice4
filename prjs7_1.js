
const computer_parts = ["Monitors", "Motherboards", "Chips", "Hard Drives", "DVD ROMs", "Cases", "Power Supplies"]

document.write("<h1>Computer Parts</h1>"); 

for (let i=0; i<computer_parts.length; i++) {
    if (i === 0) {
        document.write("<ul>")
    };
    
    document.write(
       
        "<li>"+ computer_parts[i] + "</li>"
        );

    if (i === computer_parts.length-1) {
        document.write("<ul>")
    };
}