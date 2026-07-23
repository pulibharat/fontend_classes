const arr = ["John", "Jane", "Jim", "Jill"];

for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase();
}
// for each 
arr.forEach((name, index) => {
    arr[index] = name.toLowerCase();
});