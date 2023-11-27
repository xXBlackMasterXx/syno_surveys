const lang = document.querySelector('html').getAttribute('lang').substring(0, 2);

// Tu lista de coches
let car_list_EN = [
    {
        "Brand": "Alfa Romeo",
        "Model": "Stelvio",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "Tonale",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "Giulietta",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "Giulia",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "MiTo",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "4C",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "147",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "159",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "Spider",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "156",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "GT",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A3",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q3",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q3 Sportback",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q2",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A4",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A1",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A6",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A5",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q5",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q4 e-tron",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "e-tron",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q5 Sportback",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q4 Sportback e-tron",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "e-tron Sportback",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q8",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A7",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "e-tron GT",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q7",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "TT",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A8",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "R8",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X1",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "3-Series",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "1-Series",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X5",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X3",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "5-Series",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X2",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "2-Series Active Tourer",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "4-Series",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "iX3",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "2-Series Gran Coupe",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "i4",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X4",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "2-Series Gran Tourer",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "iX1",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "iX",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "Z4",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "2-Series",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "8-Series",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "7-Series",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "i3",
        "Powertrain": [
            "PHEV",
            "BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X6",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "6-Series GT",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "3-Series GT",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X7",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "XM",
        "Powertrain": [
            "PHEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "i7",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "i8",
        "Powertrain": [
            "PHEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "i5",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "6-Series",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "iX2",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "5-Series GT",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C3",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "Berlingo",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C3 Aircross",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C5 Aircross",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "Jumpy",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "Jumper",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C4 Picasso",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C4",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C1",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C5 X",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C4 Cactus",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C4 X",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C-Elysee",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C-Zero",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "E-Mehari",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "Nemo",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C4 Aircross",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C3 Picasso",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C2",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Sandero",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Duster",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Dokker",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Jogger",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Logan",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Lodgy",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Spring",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Tiggo5X",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Tiggo 7",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Tiggo3X",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Refine S2",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Tiggo5",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Refine S3",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Tiggo3",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "DR",
        "Model": "QQ",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Tiggo9",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "DS",
        "Model": "DS7 Crossback",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "DS",
        "Model": "DS3 Crossback",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "DS",
        "Model": "DS4",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "DS",
        "Model": "DS9",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "DS",
        "Model": "DS3",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "DS",
        "Model": "DS5",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "500",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Ducato",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "500X",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Tipo",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Doblo",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Talento",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Panda",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Fiorino",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Scudo",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "500L",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "600",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "124",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Triton",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Punto",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Ulysse",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Multipla",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Sedici",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Bravo",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Stilo",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Freemont",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Strada",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Transit Custom",
        "Powertrain": [
            "ICE",
            "PHEV",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Focus",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Fiesta",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Transit",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Puma",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Escape",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Ranger",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Transit Connect",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Ecosport",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Transit Courier",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Mustang Mach-E",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Fusion",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "S-Max",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Mustang",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Figo",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Galaxy",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "C-Max",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Explorer",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Edge",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Bronco",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "GT",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "F-150",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "B-Max",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "F-250/350 Super Duty",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "Fit",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "CR-V",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "Civic",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "Vezel",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "e",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "C-CUV",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "NSX",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "e:NS1",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Tucson",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Kona",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "i20",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "i10",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "i30",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Bayon",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Ioniq 5",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "IONIQ",
        "Powertrain": [
            "PHEV",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Santa Fe",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "ix20",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Ioniq 6",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Starex",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "i40",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "H350",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Nexo",
        "Powertrain": [
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Avante",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Genesis/G80",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Sonata",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Porter",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Iveco",
        "Model": "Daily",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Compass",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Renegade",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Wrangler",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Gladiator",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Grand Cherokee",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Avenger",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Cherokee",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Sportage",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Ceed",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Stonic",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Morning",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Niro",
        "Powertrain": [
            "PHEV",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Rio",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Xceed",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "EV6",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Sorento",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Venga",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Optima",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Soul",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Stinger",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "EV9",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Carens",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Cee'd",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Bongo",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Lancia",
        "Model": "Ypsilon",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Lancia",
        "Model": "Lybra",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Lancia",
        "Model": "Phedra",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Lancia",
        "Model": "Thesis",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Range Rover Evoque",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Discovery Sport",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Range Rover Sport",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Range Rover Velar",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Defender",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Range Rover",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Discovery",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Lynk&Co",
        "Model": "01",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "CX-5",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "CX-30",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "Demio",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "CX-3",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "Axela",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "Roadster",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "2",
        "Powertrain": [
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "Atenza",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "MX-30",
        "Powertrain": [
            "PHEV",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "Premacy",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "A-Class",
        "Powertrain": [
            "ICE",
            "PHEV",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "CLA",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "C-Class",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "Sprinter",
        "Powertrain": [
            "ICE",
            "PHEV",
            "BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "Vito",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLA",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLC",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLE",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "E-Class",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLC Coupe",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "B-Class",
        "Powertrain": [
            "ICE",
            "PHEV",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLB",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQA",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "Citan",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQC",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQB",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLE Coupe",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQE",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "C-Class Coupe",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "E-Class Coupe",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "S-Class",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "G-Class",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "CLS",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "X-Class",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQS",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "AMG GT-4",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLS",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQE SUV",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQS SUV",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "SLK",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "AMG GT",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "AMG SL",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GL-Class",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "S-Class Coupe",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "ML-Class",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "SL",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "Vario",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "Unimog",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLK",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "SLS",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "CLE",
        "Powertrain": [
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "AMG ONE",
        "Powertrain": [
            "PHEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "CL",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "R-Class",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "SLR",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "MG",
        "Model": "ZS",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "MG",
        "Model": "4",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "MG",
        "Model": "GS",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "MG",
        "Model": "Marvel R",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "MG",
        "Model": "Ei5",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "MG",
        "Model": "3",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mini",
        "Model": "Mini",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Mini",
        "Model": "Countryman",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mini",
        "Model": "Clubman",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Mirage",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Eclipse Cross",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Outlander",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "RVR",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Triton",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "ASX",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Colt",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Pajero",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Lancer",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Qashqai",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Micra",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Juke",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "X-Trail",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Leaf",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "NV400",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Navara",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "NV300",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Townstar",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "NV200",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "NV250",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Ariya",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Atlas",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "GT-R",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Fairlady Z",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Pulsar",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "March",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Fairlady Z Roadster",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Note",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Titan",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Interstar",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Corsa",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Astra",
        "Powertrain": [
            "ICE",
            "PHEV",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Crossland X",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Grandland X",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Combo",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Vivaro",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Mokka",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Movano",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Insignia",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Adam",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Karl",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Zafira Tourer",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Cascada",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Bolt",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "208",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "2008",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "308",
        "Powertrain": [
            "ICE",
            "PHEV",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "3008",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "Partner",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "5008",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "Expert",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "Boxer",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "508",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "108",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "408",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "iOn",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "301",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "Bipper",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Taycan",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "911",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Macan",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Panamera",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Cayenne",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Boxster",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Cayenne Coupe",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Cayman",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "918 Spyder",
        "Powertrain": [
            "PHEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Clio",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Captur",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Master",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Kangoo",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Trafic",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Scenic",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Megane",
        "Powertrain": [
            "ICE",
            "PHEV",
            "BEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Kadjar",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Arkana",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Twingo",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Express",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Austral",
        "Powertrain": [
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Zoe",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Espace",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Talisman",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Koleos",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Alaskan",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Taliant",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Fluence",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "EZoom",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Modus",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Arona",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Ibiza",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Leon",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Ateca",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Tarraco",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Alhambra",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Mii",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Toledo",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Octavia",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Karoq",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Kodiaq",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Superb",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Fabia",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Kamiq",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Scala",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Enyaq",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Citigo",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Enyaq Coupe",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Rapid Spaceback",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Rapid",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Roomster",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Yeti",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Smart",
        "Model": "Fortwo",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Smart",
        "Model": "Forfour",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Smart",
        "Model": "#1",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Smart",
        "Model": "Roadster",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Vitara",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Swift",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "SX4 S-Cross",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Ignis",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "S-Cross",
        "Powertrain": [
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Jimny Wide",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Swace",
        "Powertrain": [
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Celerio",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Baleno",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Across",
        "Powertrain": [
            "PHEV"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Escudo",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Tesla",
        "Model": "Model Y",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Tesla",
        "Model": "Model 3",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Tesla",
        "Model": "Model S",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Tesla",
        "Model": "Model X",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Tesla",
        "Model": "Roadster",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Yaris",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Corolla",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "C-HR",
        "Powertrain": [
            "ICE",
            "PHEV",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "RAV4",
        "Powertrain": [
            "ICE",
            "PHEV",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Aygo",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Yaris Cross",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Hilux",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Proace City",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Proace",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Land Cruiser Prado",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Auris",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Corolla Cross",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Prius",
        "Powertrain": [
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Camry",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Prius Alpha",
        "Powertrain": [
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "bZ4X",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Highlander",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "86",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Supra",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Mirai",
        "Powertrain": [
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Verso",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Avensis",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Land Cruiser 300",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Sienna",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Tundra",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Land Cruiser",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Hiace",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "iQ",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Tacoma",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Corsa",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Vivaro",
        "Powertrain": [
            "ICE",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Mokka",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Crossland X",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Grandland X",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Combo",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Astra",
        "Powertrain": [
            "ICE",
            "PHEV",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Movano",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Insignia",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Adam",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Karl",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Zafira Tourer",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Commodore",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Golf",
        "Powertrain": [
            "ICE",
            "PHEV",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Tiguan",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Polo",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "T-Roc",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Caddy",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Transporter",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "T-Cross",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Passat",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Crafter",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Touran",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "ID.3",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "ID.4",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Taigo",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Arteon",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Golf Sportsvan",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "up!",
        "Powertrain": [
            "ICE",
            "BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "ID.5",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Amarok",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Sharan",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "ID Buzz",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Touareg",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "ID.7",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "New Beetle",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Golf Plus",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Jetta",
        "Powertrain": [
            "ICE",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Multivan",
        "Powertrain": [
            "ICE",
            "PHEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Lupo",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Passat CC",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Scirocco",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "XC40",
        "Powertrain": [
            "ICE",
            "PHEV",
            "BEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "XC60",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "V60",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "XC90",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "V40",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "V90",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "C40",
        "Powertrain": [
            "BEV"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "S60",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "S90",
        "Powertrain": [
            "ICE",
            "PHEV",
            "Other (HEV, FCEV)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "V70",
        "Powertrain": [
            "ICE"
        ]
    },
    {
        "Brand": "None of the above",
        "Model": "None of the above",
        "Powertrain": [
            "ICE", "PHEV", "BEV", "Other (HEV, FCEV)"
        ]
    }
];

let car_list_FI = [
    {
        "Brand": "Alfa Romeo",
        "Model": "Stelvio",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "Tonale",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "Giulietta",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "Giulia",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "MiTo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "4C",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "147",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "159",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "Spider",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "156",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Alfa Romeo",
        "Model": "GT",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A3",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q3",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q3 Sportback",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q2",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A4",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A1",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A6",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A5",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q5",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q4 e-tron",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "e-tron",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q5 Sportback",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q4 Sportback e-tron",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "e-tron Sportback",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q8",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A7",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "e-tron GT",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "Q7",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "TT",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "A8",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Audi",
        "Model": "R8",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X1",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "3-Series",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "1-Series",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X5",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X3",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "5-Series",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X2",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "2-Series Active Tourer",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "4-Series",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "iX3",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "2-Series Gran Coupe",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "i4",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X4",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "2-Series Gran Tourer",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "iX1",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "iX",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "Z4",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "2-Series",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "8-Series",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "7-Series",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "i3",
        "Powertrain": [
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X6",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "6-Series GT",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "3-Series GT",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "X7",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "XM",
        "Powertrain": [
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "i7",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "i8",
        "Powertrain": [
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "i5",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "6-Series",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "iX2",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "BMW",
        "Model": "5-Series GT",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C3",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "Berlingo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C3 Aircross",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C5 Aircross",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "Jumpy",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "Jumper",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C4 Picasso",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C4",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C1",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C5 X",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C4 Cactus",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C4 X",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C-Elysee",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C-Zero",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "E-Mehari",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "Nemo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C4 Aircross",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C3 Picasso",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Citroen",
        "Model": "C2",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Sandero",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Duster",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Dokker",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Jogger",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Logan",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Lodgy",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Dacia",
        "Model": "Spring",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Tiggo5X",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Tiggo 7",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Tiggo3X",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Refine S2",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Tiggo5",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Refine S3",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Tiggo3",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "DR",
        "Model": "QQ",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "DR",
        "Model": "Tiggo9",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "DS",
        "Model": "DS7 Crossback",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "DS",
        "Model": "DS3 Crossback",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "DS",
        "Model": "DS4",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "DS",
        "Model": "DS9",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "DS",
        "Model": "DS3",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "DS",
        "Model": "DS5",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "500",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Ducato",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "500X",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Tipo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Doblo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Talento",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Panda",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Fiorino",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Scudo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "500L",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "600",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "124",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Triton",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Punto",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Ulysse",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Multipla",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Sedici",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Bravo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Stilo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Freemont",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Fiat",
        "Model": "Strada",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Transit Custom",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Focus",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Fiesta",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Transit",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Puma",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Escape",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Ranger",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Transit Connect",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Ecosport",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Transit Courier",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Mustang Mach-E",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Fusion",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "S-Max",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Mustang",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Figo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Galaxy",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "C-Max",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Explorer",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Edge",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "Bronco",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "GT",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "F-150",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "B-Max",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Ford",
        "Model": "F-250/350 Super Duty",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "Fit",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "CR-V",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "Civic",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "Vezel",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "e",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "C-CUV",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "NSX",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Honda",
        "Model": "e:NS1",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Tucson",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Kona",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "i20",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "i10",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "i30",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Bayon",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Ioniq 5",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "IONIQ",
        "Powertrain": [
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Santa Fe",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "ix20",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Ioniq 6",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Starex",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "i40",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "H350",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Nexo",
        "Powertrain": [
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Avante",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Genesis/G80",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Sonata",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Hyundai",
        "Model": "Porter",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Iveco",
        "Model": "Daily",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Compass",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Renegade",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Wrangler",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Gladiator",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Grand Cherokee",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Avenger",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Jeep",
        "Model": "Cherokee",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Sportage",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Ceed",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Stonic",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Morning",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Niro",
        "Powertrain": [
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Rio",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Xceed",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "EV6",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Sorento",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Venga",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Optima",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Soul",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Stinger",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "EV9",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Carens",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Cee'd",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Kia",
        "Model": "Bongo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Lancia",
        "Model": "Ypsilon",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Lancia",
        "Model": "Lybra",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Lancia",
        "Model": "Phedra",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Lancia",
        "Model": "Thesis",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Range Rover Evoque",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Discovery Sport",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Range Rover Sport",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Range Rover Velar",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Defender",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Range Rover",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Land Rover",
        "Model": "Discovery",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Lynk&Co",
        "Model": "01",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "CX-5",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "CX-30",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "Demio",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "CX-3",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "Axela",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "Roadster",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "2",
        "Powertrain": [
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "Atenza",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "MX-30",
        "Powertrain": [
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mazda",
        "Model": "Premacy",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "A-Class",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "CLA",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "C-Class",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "Sprinter",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "Vito",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLA",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLC",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLE",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "E-Class",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLC Coupe",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "B-Class",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLB",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQA",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "Citan",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQC",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQB",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLE Coupe",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQE",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "C-Class Coupe",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "E-Class Coupe",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "S-Class",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "G-Class",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "CLS",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "X-Class",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQS",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "AMG GT-4",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLS",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQE SUV",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "EQS SUV",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "SLK",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "AMG GT",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "AMG SL",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GL-Class",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "S-Class Coupe",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "ML-Class",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "SL",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "Vario",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "Unimog",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "GLK",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "SLS",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "CLE",
        "Powertrain": [
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "AMG ONE",
        "Powertrain": [
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "CL",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "R-Class",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mercedes-Benz",
        "Model": "SLR",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "MG",
        "Model": "ZS",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "MG",
        "Model": "4",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "MG",
        "Model": "GS",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "MG",
        "Model": "Marvel R",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "MG",
        "Model": "Ei5",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "MG",
        "Model": "3",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mini",
        "Model": "Mini",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Mini",
        "Model": "Countryman",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mini",
        "Model": "Clubman",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Mirage",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Eclipse Cross",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Outlander",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "RVR",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Triton",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "ASX",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Colt",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Pajero",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Mitsubishi",
        "Model": "Lancer",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Qashqai",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Micra",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Juke",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "X-Trail",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Leaf",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "NV400",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Navara",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "NV300",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Townstar",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "NV200",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "NV250",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Ariya",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Atlas",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "GT-R",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Fairlady Z",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Pulsar",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "March",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Fairlady Z Roadster",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Note",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Titan",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Nissan",
        "Model": "Interstar",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Corsa",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Astra",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Crossland X",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Grandland X",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Combo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Vivaro",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Mokka",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Movano",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Insignia",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Adam",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Karl",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Zafira Tourer",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Cascada",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Opel",
        "Model": "Bolt",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "208",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "2008",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "308",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "3008",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "Partner",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "5008",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "Expert",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "Boxer",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "508",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "108",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "408",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "iOn",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "301",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Peugeot",
        "Model": "Bipper",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Taycan",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "911",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Macan",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Panamera",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Cayenne",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Boxster",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Cayenne Coupe",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "Cayman",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Porsche",
        "Model": "918 Spyder",
        "Powertrain": [
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Clio",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Captur",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Master",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Kangoo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Trafic",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Scenic",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Megane",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Kadjar",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Arkana",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Twingo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Express",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Austral",
        "Powertrain": [
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Zoe",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Espace",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Talisman",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Koleos",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Alaskan",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Taliant",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Fluence",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "EZoom",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Renault",
        "Model": "Modus",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Arona",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Ibiza",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Leon",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Ateca",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Tarraco",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Alhambra",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Mii",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "SEAT",
        "Model": "Toledo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Octavia",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Karoq",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Kodiaq",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Superb",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Fabia",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Kamiq",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Scala",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Enyaq",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Citigo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Enyaq Coupe",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Rapid Spaceback",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Rapid",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Roomster",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Skoda",
        "Model": "Yeti",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Smart",
        "Model": "Fortwo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Smart",
        "Model": "Forfour",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Smart",
        "Model": "#1",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Smart",
        "Model": "Roadster",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Vitara",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Swift",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "SX4 S-Cross",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Ignis",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "S-Cross",
        "Powertrain": [
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Jimny Wide",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Swace",
        "Powertrain": [
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Celerio",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Baleno",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Across",
        "Powertrain": [
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "Suzuki",
        "Model": "Escudo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Tesla",
        "Model": "Model Y",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Tesla",
        "Model": "Model 3",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Tesla",
        "Model": "Model S",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Tesla",
        "Model": "Model X",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Tesla",
        "Model": "Roadster",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Yaris",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Corolla",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "C-HR",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "RAV4",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Aygo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Yaris Cross",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Hilux",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Proace City",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Proace",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Land Cruiser Prado",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Auris",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Corolla Cross",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Prius",
        "Powertrain": [
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Camry",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Prius Alpha",
        "Powertrain": [
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "bZ4X",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Highlander",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "86",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Supra",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Mirai",
        "Powertrain": [
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Verso",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Avensis",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Land Cruiser 300",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Sienna",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Tundra",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Land Cruiser",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Hiace",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "iQ",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Toyota",
        "Model": "Tacoma",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Corsa",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Vivaro",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Mokka",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Crossland X",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Grandland X",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Combo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Astra",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Movano",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Insignia",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Adam",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Karl",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Zafira Tourer",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Vauxhall",
        "Model": "Commodore",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Golf",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Tiguan",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Polo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "T-Roc",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Caddy",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Transporter",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "T-Cross",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Passat",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Crafter",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Touran",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "ID.3",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "ID.4",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Taigo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Arteon",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Golf Sportsvan",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "up!",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "ID.5",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Amarok",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Sharan",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "ID Buzz",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Touareg",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "ID.7",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "New Beetle",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Golf Plus",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Jetta",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Multivan",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Lupo",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Passat CC",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Volkswagen",
        "Model": "Scirocco",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "XC40",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Täyssähköauto – BEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "XC60",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "V60",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "XC90",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "V40",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "V90",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "C40",
        "Powertrain": [
            "Täyssähköauto – BEV"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "S60",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "S90",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE",
            "Ladattava (plug-in) hybridi – PHEV",
            "Muu (kevythybridi, vety)"
        ]
    },
    {
        "Brand": "Volvo",
        "Model": "V70",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE"
        ]
    },
    {
        "Brand": "Ei mikään yllä olevista",
        "Model": "Ei mikään yllä olevista",
        "Powertrain": [
            "Polttomoottori (bensiini, diesel, kaasu) – ICE", "Ladattava (plug-in) hybridi – PHEV", "Täyssähköauto – BEV", "Muu (kevythybridi, vety)"
        ]
    }
];

const car_list = lang == "fi" ? car_list_FI: car_list_EN;

// Get the text fields for the brand, model, and powertrain
let car_brand = document.querySelector("#p_Q10_1");
let car_model = document.querySelector("#p_Q10_2");
let car_powertrain = document.querySelector("#p_Q10_3");

// Ocultar las entradas de texto
car_brand.classList.add("d-none");
car_model.classList.add("d-none");
car_powertrain.classList.add("d-none");

// Crear dropdowns para Brand, Model y Powertrain con clases de Bootstrap
let brandDropdown = document.createElement("select");
brandDropdown.classList.add("form-control");

let modelDropdown = document.createElement("select");
modelDropdown.classList.add("form-control");

let powertrainDropdown = document.createElement("select");
powertrainDropdown.classList.add("form-control");

// Asignar identificadores a los dropdowns
brandDropdown.id = "brandDropdown";
modelDropdown.id = "modelDropdown";
powertrainDropdown.id = "powertrainDropdown";

// Añadir una opción por defecto a cada dropdown
function addDefaultOption(select) {
    let defaultOption = document.createElement("option");
    defaultOption.text = `Select an ${select.id.replace("Dropdown", "")}`;
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.add(defaultOption);
}

addDefaultOption(brandDropdown);
addDefaultOption(modelDropdown);
addDefaultOption(powertrainDropdown);

// Función para actualizar el dropdown de Model cuando cambia la marca
function updateModelOptions(selectedBrand) {
    // Limpiar las opciones actuales
    modelDropdown.innerHTML = "";
    addDefaultOption(modelDropdown);

    // Limpiar el valor del campo de entrada
    car_model.value = "";

    // Obtener modelos únicos para la marca seleccionada
    const uniqueModels = Array.from(new Set(car_list.filter(car => car.Brand === selectedBrand).map(car => car.Model)));

    // Agregar las opciones al dropdown de Model
    uniqueModels.forEach(model => {
        let option = document.createElement("option");
        option.text = model;
        modelDropdown.add(option);
    });

    // Llamar a la función para actualizar las opciones de Powertrain cuando cambia Model
    updatePowertrainOptions();
}

// Función para actualizar el dropdown de Powertrain cuando cambia el modelo
function updatePowertrainOptions() {
    // Limpiar las opciones actuales
    powertrainDropdown.innerHTML = "";
    addDefaultOption(powertrainDropdown);

    // Limpiar el valor del campo de entrada
    car_powertrain.value = "";

    // Obtener la marca y modelo seleccionados
    const selectedBrand = brandDropdown.value;
    const selectedModel = modelDropdown.value;

    // Obtener powertrains únicos para la marca y modelo seleccionados
    const uniquePowertrains = Array.from(new Set(car_list.filter(car => car.Brand === selectedBrand && car.Model === selectedModel).map(car => car.Powertrain).flat()));

    // Agregar las opciones al dropdown de Powertrain
    uniquePowertrains.forEach(powertrain => {
        let option = document.createElement("option");
        option.text = powertrain;
        powertrainDropdown.add(option);
    });
}


// Asignar eventos de cambio a los dropdowns de Brand y Model
car_brand.insertAdjacentElement("afterend", brandDropdown);
car_model.insertAdjacentElement("afterend", modelDropdown);
car_powertrain.insertAdjacentElement("afterend", powertrainDropdown);

brandDropdown.addEventListener("change", function () {
    const selectedBrand = brandDropdown.value;
    updateModelOptions(selectedBrand);
    car_brand.value = selectedBrand;
});

modelDropdown.addEventListener("change", function () {
    updatePowertrainOptions();
    car_model.value = modelDropdown.value;
});

powertrainDropdown.addEventListener("change", function () {
    car_powertrain.value = powertrainDropdown.value;
});

// Inicializar el dropdown de Brand con todas las marcas únicas
const uniqueBrands = Array.from(new Set(car_list.map(car => car.Brand)));

uniqueBrands.forEach(brand => {
    let option = document.createElement("option");
    option.text = brand;
    brandDropdown.add(option);
});

// Inicializar el dropdown de Model con todos los modelos únicos
const uniqueModels = Array.from(new Set(car_list.map(car => car.Model)));

uniqueModels.forEach(model => {
    let option = document.createElement("option");
    option.text = model;
    modelDropdown.add(option);
});

// Inicializar el dropdown de Powertrain con todos los powertrains únicos
const uniquePowertrains = Array.from(new Set(car_list.map(car => car.Powertrain).flat()));

uniquePowertrains.forEach(powertrain => {
    let option = document.createElement("option");
    option.text = powertrain;
    powertrainDropdown.add(option);
});