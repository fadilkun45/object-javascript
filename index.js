// object
let objbiasa = {nama : 'faldi', umur : 18, cita2: 'front end engineer dan network engineer', istri : 'Elaina' }

console.error("contoh object");
console.log(objbiasa);

// penambahan object
objbiasa['tes'] = "ini isi baru";

console.error("penambahan object");
console.log(objbiasa);

// penghapusan object
delete objbiasa['tes'];

console.error("penghapusan object")
console.log(objbiasa);

// obeject tapi isi nya function
let objfunt = { funct1 : function(){
    return "embe" ;
    }, funct2 : function(a,b,c){
        return a + b + c; 
    }
}

// memangil function
console.error("memangil function di object");
console.log(objfunt.funct1());

// memangil function yang mengeluarkan output dari argument
console.error("memangil function yang ada argument nya di object");
console.log(objfunt.funct2(2, 2, 2));
