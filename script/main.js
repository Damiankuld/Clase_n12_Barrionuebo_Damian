/******************Clase_N8_Barrionuebo_Damián******************/

//Declaracion de productos y costos
const motherboard = [
    {producto: "MSI", valor: 7500},
    {producto: "Asrock", valor: 9500},
    {producto: "EVGA", valor: 5000},
    {producto: "Asus", valor: 11500},
];
const memoryRam = [
    {producto: "ddr3", valor: 6500},
    {producto: "ddr4", valor: 7500},
];
const storage = [
    {producto: "Disco sólido", valor: 5000},
    {producto: "Disco duro", valor: 5500},
];
const fanCooler = [
    {producto: "80mm",valor: 500},
    {producto: "120mm", valor: 600},
];
const tarjetaGrafica = [
    {producto: "NVIDIA", valor: 65000},
    {producto: "AMD", valor: 80000},
];

//variables
let costoMother=0;
let costoMemory=0;
let costoStorage=0;
let costoFanCooler=0;
let costoGrafica=0;
let mother=$("#mother").val();
let memory=$("#memory").val();
let storagE=$("#storage").val();
let fancooler=$("#fanCooler").val();
let grafica=$("#grafica").val();
let img = new Image();


//Capturando elementos del DOM
const eventoBoton = $("#boton");

motherSelect=()=>{
    mother=$("#mother").val();
    //mother puede ser: MSI, Asrock, EVGA, Asus
    switch (mother) {
        case "MSI":
            buscarCosto('#costoMother', tarjetaGrafica[0].valor, '#imgMother', `<img src="css/MSI-Logo.webp">`);
            break;
        case "Asrock":
            buscarCosto("#costoMother",motherboard[1].valor,`#imgMother`,`<img src="css/ASRock-Logo.png">`);
            break;
        case "EVGA":
            buscarCosto("#costoMother",motherboard[2].valor,`#imgMother`,`<img src="css/evga.png">`);
            break;
        case "Asus":
            buscarCosto("#costoMother",motherboard[3].valor,`#imgMother`,`<img src="css/Asus-Logo.png">`);
            break;
        default:
            costoMother = 0;
            break;       
    }
    costo=$("#costoMother").val();
}
memoryRamSelect=()=>{
    memory=$("#memory").val();
    //memory puede ser: ddr3, ddr4
    switch (memory) {
        case "ddr3":
            buscarCosto("#costoMemory",memoryRam[0].valor,`#imgMemory`,`<img src="css/hyper X.png">`);
            break;
        case "ddr4":
            buscarCosto("#costoMemory",memoryRam[1].valor,`#imgMemory`,`<img src="css/corsair.png">`);
        default:
            costoMemory=0;
            break;
    }
    costo=$("#costoMemory").val();
}
storageSelect=()=>{
    storagE=$("#storage").val();
    //storage puede ser: Disco solido, Disco duro
    switch (storagE) {
        case "Disco solido":
            buscarCosto("#costoStorage", storage[0].valor,`#imgStorage`,`<img src="css/ssd.png">`);
            break;
        case "Disco duro": 
            buscarCosto("#costoStorage", storage[1].valor,`#imgStorage`,`<img src="css/hdd.png">`);
        default:
            costoStorage=0;
            break;
    }
    costo=$("#costoStorage").val();
}
fanSelect=()=>{
    fancooler=$("#fanCooler").val();
    //fanCooler puede ser: 80mm, 120mm
    switch (fancooler){
        case "80mm":
            buscarCosto("#costoFanCooler", fanCooler[0].valor,`#imgFan`,`<img src="css/fancooler.jpg">`);
            break;
        case "120mm":
            buscarCosto("#costoFanCooler", fanCooler[1].valor,`#imgFan`,`<img src="css/fancooler.jpg">`);
        default:
            costoFanCooler=0;
            break;
    }
    costo=$("#costoFanCooler").val();
}
tarjetaGraficaSelect=()=>{
    grafica=$("#grafica").val();
    //storage puede ser: NVIDIA, AMD
    switch (grafica){
        case "NVIDIA":
            buscarCosto("#costoGrafica", tarjetaGrafica[0].valor,`#imgGrafica`,`<img src="css/nvidia.png">`);
            break;
        case "AMD":
            buscarCosto("#costoGrafica", tarjetaGrafica[1].valor,`#imgGrafica`,`<img src="css/amd.webp">`);
            break;
        default:
            costoGrafica=0;
            break;
    }
    costo=$("#costoGrafica").val();
}

//buscar costo de producto
const buscarCosto=(costo, item, imgID, imgSrc)=>{
    $(costo).text(item);
    $(costo).val(item);
    $(imgID).empty().append(imgSrc);
}

eventoBoton.on("click", () => {
    //Identificar si la casilla se encuentra vacia de:
    //mother
    if (mother === "") {
        costoMother = 0;
    }else{
        costoMother=parseInt($("#costoMother").val());
        console.log(costoMother)
    }
    //memory
    if (memory === ""){
        costoMemory = 0;
    }else{
        costoMemory=parseInt($("#costoMemory").val());
    }
    //storage
    if (storagE === ""){
        costoStorage = 0;
    }else{
        costoStorage=parseInt($("#costoStorage").val());
    }
    //fanCooler
    if (fancooler === ""){
        costoFanCooler = 0;
    }else{
        costoFanCooler=parseInt($("#costoFanCooler").val());
    }
    //Tarjeta Grafica
    if (grafica === ""){
        costoGrafica = 0;
    }else{
        costoGrafica=parseInt($("#costoGrafica").val());
    }
    let total=$(`#total`);
    total.text(`$ ${costoMother+costoMemory+costoStorage+costoFanCooler+costoGrafica}`);
});

