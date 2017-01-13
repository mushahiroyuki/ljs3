let x = 0, y = 10, z;
z = (x++, y++);
console.log(z); // 10

x = 0, y = 10
z = x++, y++;
console.log(z); // 0
