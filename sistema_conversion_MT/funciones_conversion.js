function convertTemperature(){
    const tempInput = document.getElementById('temp-input').value;
    const fromUnit = document.getElementById('temp-from').value;
    const toUnit = document.getElementById('temp-to').value;
    let tempInCelsius;
    let result;
    
    // Si temp-from es "celsius"
    if (fromUnit === "celsius") {
        // El valor ya está en celsius
        tempInCelsius = parseFloat(tempInput);
        
        // Ahora convertir según el temp-to
        if (toUnit === "celsius") {
            // Celsius a Celsius 
            result = tempInCelsius;
        } else if (toUnit === "fahrenheit") {
            // Celsius a Fahrenheit: (C × 9/5) + 32
            result = (tempInCelsius * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            // Celsius a Kelvin: C + 273.15
            result = tempInCelsius + 273.15;
        }
    }

    // Si temp-from es "fahrenheit"
    else if (fromUnit === "fahrenheit") {
        //Fahrenheit a Celsius
        tempInCelsius = (parseFloat(tempInput) - 32) * 5/9;

        // Ahora convertir según el temp-to
        if (toUnit === "celsius") {
            // Fahrenheit a Celsius
            result = tempInCelsius;
        } else if (toUnit === "fahrenheit") {
            // Fahrenheit a Fahrenheit 
            result = parseFloat(tempInput);
        } else if (toUnit === "kelvin") {
            // Fahrenheit a Kelvin
            result = (tempInCelsius + 273.15);
        }
    }

    // Si temp-from es "kelvin"
    else if (fromUnit === "kelvin") {
        // Convertir Kelvin a Celsius: K - 273.15
        tempInCelsius = parseFloat(tempInput) - 273.15;
        // Ahora convertir según el temp-to
        if (toUnit === "celsius") {
            // Kelvin a Celsius: K - 273.15
            result = tempInCelsius;
        } else if (toUnit === "fahrenheit") {
            // Kelvin a Fahrenheit: (K - 273.15) × 9/5 + 32
            result = (tempInCelsius * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            // Kelvin a Kelvin
            result = parseFloat(tempInput);
        }
    }

    // Mostrar el resultado en el campo correspondiente
    document.getElementById('temp-result').value = result;
}

function convertDistance(){
    const distanceInput = document.getElementById('distance-input').value;
    const fromUnit = document.getElementById('distance-from').value;
    const toUnit = document.getElementById('distance-to').value;
    let distanceInMeters;
    let result;

    // Si distance-from es "metros" (caso base)
    if (fromUnit === "metros") {
        // El valor ya está en metros
        distanceInMeters = parseFloat(distanceInput);
        
        // Ahora convertir según el distance-to
        if (toUnit === "metros") {
            result = distanceInMeters;
        } else if (toUnit === "kilometros") {
            // Metros a Kilómetros: m / 1000
            result = distanceInMeters / 1000;
        } else if (toUnit === "millas") {
            // Metros a Millas: m / 1609.34
            result = distanceInMeters / 1609.34;
        } else if (toUnit === "pies") {
            // Metros a Pies: m * 3.28084
            result = distanceInMeters * 3.28084;
        } else if (toUnit === "pulgadas") {
            // Metros a Pulgadas: m * 39.3701
            result = distanceInMeters * 39.3701;
        }
    }
    
    // Si distance-from es "kilometros"
    else if (fromUnit === "kilometros") {
        // Kilómetros a Metros: km * 1000
        distanceInMeters = parseFloat(distanceInput) * 1000;
        
        if (toUnit === "metros") {
            result = distanceInMeters;
        } else if (toUnit === "kilometros") {
            result = parseFloat(distanceInput);
        } else if (toUnit === "millas") {
            result = distanceInMeters / 1609.34;
        } else if (toUnit === "pies") {
            result = distanceInMeters * 3.28084;
        } else if (toUnit === "pulgadas") {
            result = distanceInMeters * 39.3701;
        }
    }
    
    // Si distance-from es "millas"
    else if (fromUnit === "millas") {
        // Millas a Metros: millas * 1609.34
        distanceInMeters = parseFloat(distanceInput) * 1609.34;
        
        if (toUnit === "metros") {
            result = distanceInMeters;
        } else if (toUnit === "kilometros") {
            result = distanceInMeters / 1000;
        } else if (toUnit === "millas") {
            result = parseFloat(distanceInput);
        } else if (toUnit === "pies") {
            result = distanceInMeters * 3.28084;
        } else if (toUnit === "pulgadas") {
            result = distanceInMeters * 39.3701;
        }
    }
    
    // Si distance-from es "pies"
    else if (fromUnit === "pies") {
        // Pies a Metros: pies / 3.28084
        distanceInMeters = parseFloat(distanceInput) / 3.28084;
        
        if (toUnit === "metros") {
            result = distanceInMeters;
        } else if (toUnit === "kilometros") {
            result = distanceInMeters / 1000;
        } else if (toUnit === "millas") {
            result = distanceInMeters / 1609.34;
        } else if (toUnit === "pies") {
            result = parseFloat(distanceInput);
        } else if (toUnit === "pulgadas") {
            result = distanceInMeters * 39.3701;
        }
    }
    
    // Si distance-from es "pulgadas"
    else if (fromUnit === "pulgadas") {
        // Pulgadas a Metros: pulgadas / 39.3701
        distanceInMeters = parseFloat(distanceInput) / 39.3701;
        
        if (toUnit === "metros") {
            result = distanceInMeters;
        } else if (toUnit === "kilometros") {
            result = distanceInMeters / 1000;
        } else if (toUnit === "millas") {
            result = distanceInMeters / 1609.34;
        } else if (toUnit === "pies") {
            result = distanceInMeters * 3.28084;
        } else if (toUnit === "pulgadas") {
            result = parseFloat(distanceInput);
        }
    }

    // Mostrar el resultado
    document.getElementById('distance-result').value = result;
}

function convertTime(){
    const timeInput = document.getElementById('time-input').value;
    const fromUnit = document.getElementById('time-from').value;
    const toUnit = document.getElementById('time-to').value;
    let timeInSeconds;
    let result;

    // Si time-from es "segundos" (caso base)
    if (fromUnit === "segundos") {
        // El valor ya está en segundos
        timeInSeconds = parseFloat(timeInput);
        
        if (toUnit === "segundos") {
            result = timeInSeconds;
        } else if (toUnit === "horas") {
            // Segundos a Horas: s / 3600
            result = timeInSeconds / 3600;
        } else if (toUnit === "dias") {
            // Segundos a Días: s / 86400
            result = timeInSeconds / 86400;
        } else if (toUnit === "años") {
            // Segundos a Años: s / 31536000
            result = timeInSeconds / 31536000;
        }
    }
    
    // Si time-from es "horas"
    else if (fromUnit === "horas") {
        // Horas a Segundos: h * 3600
        timeInSeconds = parseFloat(timeInput) * 3600;
        
        if (toUnit === "segundos") {
            result = timeInSeconds;
        } else if (toUnit === "horas") {
            result = parseFloat(timeInput);
        } else if (toUnit === "dias") {
            result = timeInSeconds / 86400;
        } else if (toUnit === "años") {
            result = timeInSeconds / 31536000;
        }
    }
    
    // Si time-from es "dias"
    else if (fromUnit === "dias") {
        // Días a Segundos: d * 86400
        timeInSeconds = parseFloat(timeInput) * 86400;
        
        if (toUnit === "segundos") {
            result = timeInSeconds;
        } else if (toUnit === "horas") {
            result = timeInSeconds / 3600;
        } else if (toUnit === "dias") {
            result = parseFloat(timeInput);
        } else if (toUnit === "años") {
            result = timeInSeconds / 31536000;
        }
    }
    
    // Si time-from es "años"
    else if (fromUnit === "años") {
        // Años a Segundos: años * 31536000
        timeInSeconds = parseFloat(timeInput) * 31536000;
        
        if (toUnit === "segundos") {
            result = timeInSeconds;
        } else if (toUnit === "horas") {
            result = timeInSeconds / 3600;
        } else if (toUnit === "dias") {
            result = timeInSeconds / 86400;
        } else if (toUnit === "años") {
            result = parseFloat(timeInput);
        }
    }

    // Mostrar el resultado
    document.getElementById('time-result').value = result;
}

function convertCurrency(){
    const currencyInput = document.getElementById('currency-input').value;
    const fromUnit = document.getElementById('currency-from').value;
    const toUnit = document.getElementById('currency-to').value;
    let currencyInUSD;
    let result;

    // Si currency-from es "USD" (caso base)
    if (fromUnit === "USD") {
        // El valor ya está en USD
        currencyInUSD = parseFloat(currencyInput);
        
        if (toUnit === "USD") {
            result = currencyInUSD;
        } else if (toUnit === "MXN") {
            // USD a MXN: USD * 18 (tipo de cambio aproximado)
            result = currencyInUSD * 18;
        } else if (toUnit === "EUR") {
            // USD a EUR: USD * 0.85 (tipo de cambio aproximado)
            result = currencyInUSD * 0.85;
        }
    }
    
    // Si currency-from es "MXN"
    else if (fromUnit === "MXN") {
        // MXN a USD: MXN / 18
        currencyInUSD = parseFloat(currencyInput) / 18;
        
        if (toUnit === "USD") {
            result = currencyInUSD;
        } else if (toUnit === "MXN") {
            result = parseFloat(currencyInput);
        } else if (toUnit === "EUR") {
            result = currencyInUSD * 0.85;
        }
    }
    
    // Si currency-from es "EUR"
    else if (fromUnit === "EUR") {
        // EUR a USD: EUR / 0.85
        currencyInUSD = parseFloat(currencyInput) / 0.85;
        
        if (toUnit === "USD") {
            result = currencyInUSD;
        } else if (toUnit === "MXN") {
            result = currencyInUSD * 18;
        } else if (toUnit === "EUR") {
            result = parseFloat(currencyInput);
        }
    }

    // Mostrar el resultado
    document.getElementById('currency-result').value = result;
}