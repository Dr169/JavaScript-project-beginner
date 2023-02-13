import countriesData from './countries.json' assert {type:"json"}
const countriesSelect = document.getElementById("countries")
let options = ""
const allCountriesName = countriesData.map(country=>{
    return country.name.common
    })
allCountriesName.sort().map(name=>{
    options += `<option value=${name.replaceAll(" ", "-")}>${name}</option>`
})
countriesSelect.innerHTML = options
countriesSelect.onchange = getCountry;
const defaultContry = countriesData.filter(country=>(country.name.common==="United States"))
document.getElementById("flag").src = defaultContry[0].flags.svg
document.getElementById("country-name").innerHTML = defaultContry[0].name.common + " (" + defaultContry[0].region + ")"
let defaultContryPopulation = defaultContry[0].population.toString()
let slicedPopulation = ""
while (defaultContryPopulation.length != 0){
    if (defaultContryPopulation.length > 3){
        slicedPopulation = "," + defaultContryPopulation.slice(defaultContryPopulation.length-3,defaultContryPopulation.length) + slicedPopulation
        defaultContryPopulation = defaultContryPopulation.slice(0,defaultContryPopulation.length-3)
    }
    else if (defaultContryPopulation.length <= 3){
        slicedPopulation = defaultContryPopulation + slicedPopulation
        defaultContryPopulation = ""
    }
}
document.getElementById("country-population").innerHTML = slicedPopulation
let defaultContryArea = defaultContry[0].area.toString()
let slicedArea = ""
while (defaultContryArea.length != 0){
    if (defaultContryArea.length > 3){
        slicedArea = "," + defaultContryArea.slice(defaultContryArea.length-3,defaultContryArea.length) + slicedArea
        defaultContryArea = defaultContryArea.slice(0,defaultContryArea.length-3)
    }
    else if (defaultContryArea.length <= 3){
        slicedArea = defaultContryArea + slicedArea
        defaultContryArea = ""
    }
}
document.getElementById("country-area").innerHTML = slicedArea + "(km<sup>2</sup>)"
document.getElementById("country-map").href = defaultContry[0].maps.googleMaps
let sumAll = 0
const allCountriesPopulations = countriesData.map(country=>{
    sumAll += country.population
    return sumAll})
const ctx = document.getElementById('myChart');
let newChart;
function creatChart(country){
    if (newChart != undefined){
    newChart.destroy()
    }
    newChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: [ country[0].name.common, "Avrage population"],
    datasets: [{
        backgroundColor:["black","gray"],
        label: '# population',
        data: [country[0].population, sumAll/250],
        borderWidth: 3,
    }]
    },
    options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
    }
});
}
creatChart(defaultContry)
function getCountry (event){
    const singleContry = countriesData.filter(country=>(country.name.common===event.target.value.replaceAll("-", " ")))
    document.getElementById("flag").src = singleContry[0].flags.svg
    document.getElementById("country-name").innerHTML = singleContry[0].name.common + " (" + singleContry[0].region + ")"
    let ContryPopulation = singleContry[0].population.toString()
    let slicedPopulation = ""
    while (ContryPopulation.length != 0){
        if (ContryPopulation.length > 3){
            slicedPopulation = "," + ContryPopulation.slice(ContryPopulation.length-3,ContryPopulation.length) + slicedPopulation
            ContryPopulation = ContryPopulation.slice(0,ContryPopulation.length-3)
        }
        else if (ContryPopulation.length <= 3){
            slicedPopulation = ContryPopulation + slicedPopulation
            ContryPopulation = ""
        }
    }
    document.getElementById("country-population").innerHTML = slicedPopulation
    let singleContryArea = singleContry[0].area.toString()
    let slicedArea = ""
    while (singleContryArea.length != 0){
        if (singleContryArea.length > 3){
            slicedArea = "," + singleContryArea.slice(singleContryArea.length-3,singleContryArea.length) + slicedArea
            singleContryArea = singleContryArea.slice(0,defaultContryArea.length-3)
        }
        else if (defaultContryArea.length <= 3){
            slicedArea = singleContryArea + slicedArea
            singleContryArea = ""
        }
    }
    document.getElementById("country-area").innerHTML = slicedArea + "(km<sup>2</sup>)"
    document.getElementById("country-map").href = singleContry[0].maps.googleMaps
    creatChart(singleContry)

}