interface AudioPlayer{
    audioVolumen: number;
    songDuration: number;
    song: string;
    details:Details;
}
interface Details{
    author: string;
    year: number; 
}
const audioPlayer: AudioPlayer={
 audioVolumen: 90,
    songDuration: 59,
    song: 'Seek and destroy',
    details: {
        author: 'Metallica',
        year: 2005,
    }
}
const song = 'new song';
const {  song:anotherSong, songDuration:durarion, details} = audioPlayer;
const{author}= details;

//console.log('name song:',anotherSong);
//console.log('Author:',author);

//const dbz: string[]=['Goku','Vegueta','Trunks'];
const [p1,p2,trunks]: string[]=['Goku','Vegueta','Trunks'];
//console.log('Tercer personaje: ',dbz[3]||'EL personaje no existe'); Si no existe un persona en 
//la posicion donde se esta buscando en el arreglo, entonces regresara la cadena despues de los dos ||
console.error('Personaje 3:',trunks);
export{};