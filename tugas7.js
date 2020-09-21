var tinggiBadan = [180,168,179,175,164,155,158,168,170,166]
for(var i=0; i < tinggiBadan.length ;i++){
	console.log("Pengulangan array dengan for biasa ",tinggiBadan[i])
}

for(let i of tinggiBadan){
	console.log("Pengulangan array dengan for - of ",(i))
}