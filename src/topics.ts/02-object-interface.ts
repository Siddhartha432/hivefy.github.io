const skills: string[] = ['Bash','Counter','Healing'];
 
interface Character{
    nombre: string;
    hp: number;
    skills: string[];
    hometown?: string;
}
const strider: Character = {
    nombre: 'Strider1',
hp: 100,
skills:['Bash','Counter'],
};
strider.hometown = 'Ticoman';
console.table(strider);
export{};