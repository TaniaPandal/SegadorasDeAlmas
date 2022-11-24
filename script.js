function shuffle(array){
    var currentIndex = array.length,
    randomIndex;
    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]]=[
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}
    function spin(){
        Wheel.play();
        const box = document.getElementById("box");
        const element = document.getElementById("mainbox");
        let selectedItem="";

        let Murdered = shuffle([1890, 2250, 2610]);
        let Zodiac = shuffle([1850,2210,2570]);
        let Cannibal = shuffle([1770,2130,2490]);
        let Eaten = shuffle([1810,2170,2530]);
        let Bomblast = shuffle([1750,2110,2470]);
        let Beaten = shuffle([1570,1930,2290]);
        
        let results = shuffle([
            Murdered[0],
            Zodiac[0],
            Cannibal[0],
            Eaten[0],
            Bomblast[0],
            Beaten[0],
        ]);
        if(Murdered.includes(results[0])) selectedItem = "Murdered";
        if(Zodiac.includes(results[0])) selectedItem = "Zodiac";
        if(Cannibal.includes(results[0])) selectedItem = "Cannibal";
        if(Eaten.includes(results[0])) selectedItem = "Eaten";
        if(Bomblast.includes(results[0])) selectedItem = "Bomblast";
        if(Beaten.includes(results[0])) selectedItem = "Beaten";
        

        box.style.setProperty("transition", "all ease 5s");
        box.style.transform = "rotate(" + results[0] + "deg)";
        element.classList.remove("animate");
        setTimeout(function(){
            element.classlist.add("animate");
        },5000);
        setTimeout(function(){
            noblesacrifice.play();
            Swal.fire({
            title: 'Sarificed!',
            text: 'Murdered...!',
            imageUrl: 'asset/Killed coder.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
            },5500)

    
        setTimeout(function(){
            box.style.setProperty("transition","initial");
            box.style.transform = "rotate(90deg)";
        },6000);
    }