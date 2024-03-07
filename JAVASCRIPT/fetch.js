 let ipIniziale= 101
 let fetchButton = document.getElementById('fetchButton')

 async function getCv(ip, rete = 2){
    let res = await fetch('http://192.168.' + rete + '.'+ ip + ':5500/cv.json')
    let cv = await res.json()
    return cv
}

async function handleButtonClick(){
    fetchButton.disabled = true
    try{
        let cv = await getCv(ipIniziale)
        console.log(cv)
    }catch(error){
        console.error(e)
    }
    ipIniziale++
    fetchButton.disabled = false
}
   
getCv()