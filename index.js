const cuaca = require('./lib/cuaca')

cuaca('baturaja',32).then((hsl)=> {
    console.log(`*Keakuratan data berasal dari bmkg.go.id!\n${hsl}`)
    if(hsl.status==='no') return console.log(`sepertinya daerah kakak salah ketik deh, coba periksa nama daerah d bawah ini (Bukan angka ya!)\n\n${hsl.result}\n\nContoh:\ncuaca 0 Aceh Barat`)
    if(hsl.status==='ok'){
        console.log(`*Keakuratan data berasal dari bmkg.go.id!\n${hsl}`)
    }
})