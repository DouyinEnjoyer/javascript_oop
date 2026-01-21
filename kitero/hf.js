function tanyer(szinezek,meretaranyokmegadottsagok)
{
    this.szin = szinezek
    this.meret = meretaranyokmegadottsagok
}
tanyer.prototype.elmagyarazatokattartalmazojegyzekfunkcioaprototipusban = function ()
{
    console.log(this.szin + this.meret)
}
const tanyerelso = new tanyer("halványkvarc", "nem tul nagyobb mint egy pohár")
tanyerelso.elmagyarazatokattartalmazojegyzekfunkcioaprototipusban()
console.log(tanyerelso)

function aprot(szin)
{
    tanyer.call(this, szin, "apro")
}

Object.setPrototypeOf(aprot.prototype, tanyer.prototype)
const tanyerketto = new aprot("melankonikusmadzsenta")
tanyerketto.elmagyarazatokattartalmazojegyzekfunkcioaprototipusban()
console.log(tanyerketto)
function gigat(szin)
{
    tanyer.call(this, szin, "giga")
}
Object.setPrototypeOf(gigat.prototype, tanyer.prototype)

const tanyerharom = new gigat("billenytűzetzöld")
tanyerharom.elmagyarazatokattartalmazojegyzekfunkcioaprototipusban()
console.log(tanyerharom)

//////////////////////////////////////////////////////////////////////////////////////////

class tanyerdeosztalyszintaktis 
{
    constructor(szin,meret)
    {
        this.szin = szin
        this.meret = szin
    }
    elmege()
    {
        console.log(this.szin + this.meret)
    }
}
const elso = new tanyerdeosztalyszintaktis("átlátszofehér", "méretes")
console.log(elso)

class ktanyerdeosztalyos extends tanyerdeosztalyszintaktis {
  constructor(szin) {
    super(szin, "aprodeosztaly")
  }
}
const masodik = new ktanyerdeosztalyos("majdnem zöld")
console.log(masodik)

class nagytanyermer extends tanyerdeosztalyszintaktis {
  constructor(szin) {
    super(szin, "orbitalisan nagy")
  }
}
const harmadik = new nagytanyermer("mélységszine")
console.log(harmadik)
