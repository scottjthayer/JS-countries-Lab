class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "usa.png");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "mexico.png");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], "algeria.png")
let egypt = new Country("Egypt", "Modern Standard Arabic", "Salaam aleikum", ["red", "black", "white"], "egypt.png")

function DisplayColors(Country) {
    document.getElementById("Color1").style.backgroundColor = Country.colors[0];
    document.getElementById("Color2").style.backgroundColor = Country.colors[1];
    document.getElementById("Color3").style.backgroundColor = Country.colors[2];
}

function SwitchCountry() {
    //saves dropdown selection as input
    let input = document.getElementById("CountryList").value;
    let country;
    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Egypt") {
        country = egypt;
    }
    //change displays and text
    DisplayColors(country);
    document.getElementById("CountryName").innerText = `${country.name}`;
    document.getElementById("OfficialLanguage").innerText = `${country.lang}`;
    document.getElementById("HelloWorld").innerText = `${country.greeting}`;
    document.getElementById("flag").src = `${country.flag}`
}
