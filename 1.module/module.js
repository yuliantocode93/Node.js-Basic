function helloWorld(world) {
  return `Hello ${world}`; // Hello Dunia
}

const PI = 3.14;

const mahasiswa = {
  nama: "Yuli",
  umur: 30,
  cetakMHS() {
    return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
  },
};

class Person {
  constructor() {
    console.log("Object Person telah dibuat!!");
  }
}

module.exports = { helloWorld, PI, mahasiswa, Person };
