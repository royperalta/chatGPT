import {firefox} from 'playwright'

async function abrir(){
    let contenido = `DOS SUJETOS QUE TRANSPORTABAN VEINTINUEVE SACOS CONTENIENDO HOJA DE COCA DE MANERA ILEGAL FUERON DETENIDOS POR LOS EFECTIVOS POLICIALES DE LA COMISARIA DE SANTO TOMAS – CUTERVO. 
    Personal Policial de la Comisaria de Santo Tomas – Cutervo del Frente Policial Cajamarca, tras realizar acciones de inteligencia operativa, Obtuvieron información sobre el comercio ilegal de hoja de coca, por tal motivo montaron un operativo policial a la altura del Sector la Chamana don de intervinieron un vehículo motorizado modelo CANTER de placa M2U-763, conducido por Diomedes AREVALO FERNANDEZ (29), acompañado del Sr. Lucidoro SANTOS DELGADO (55).
    Al momento en que el personal realizo el registro vehicular constataron en el interior del mencionado vehículo; veintinueve 29 sacos de polietileno, conteniendo en su interior hoja de coca en estado natural con un peso de MIL CIENTO OCHENTA Y NUEVE - 1189 kilogramos; refiriendo los intervenidos que los sacos de coca tenían como destino a la región San Martín, Nueva Cajamarca, Rioja, Soritor y Moyobamba y a la vez indicaron NO TENER GUÍA DE TRANSPORTE Y NINGÚN PREMISO Y/O AUTORIZACIÓN POR PARTE DE ENACO.
    Motivo por el cual, los veintinueve sacos con hoja de coca, los dos sujetos y el vehículo intervenido fueron conducidos a la Dependencia Policial para continuar con las diligencias correspondientes de acuerdo a ley.`
    const content = contenido.replace(/\n/g, " ");
    const browser = await firefox.launch({
        headless: false, // Establece headless en false para mostrar la interfaz gráfica del navegador
        //channel: 'chrome', // Establece el canal en "chrome" para usar la configuración específica de Chrome
        args: [
            '--disable-blink-features=AutomationControlled',
            '--disable-extensions',
            '--disable-popup-blocking',
            '--disable-notifications',
            '--disable-background-networking',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-breakpad',
            '--disable-component-extensions-with-background-pages',
            '--disable-features=TranslateUI',
            '--disable-ipc-flooding-protection',
            '--disable-renderer-backgrounding',
            '--disable-sync',
            '--disable-translate',
            '--disable-web-security',
            '--ignore-certificate-errors',
            '--lang=en-US,en',
            '--mute-audio',
            '--no-default-browser-check',
            '--no-first-run',
            '--no-pings',
            '--no-sandbox',
            '--no-zygote',
            '--start-maximized',
            '--disable-setuid-sandbox',
            '--disable-gpu'
          ], // Establece los argumentos adicionales de línea de comandos para maximizar la ventana del navegador al iniciarse
        downloadsPath: '/path/to/downloads', // Establece la ruta de la carpeta de descargas personalizada
        ignoreHTTPSErrors: true, // Ignora los errores de seguridad HTTPS
        defaultViewport: { width: 1280, height: 720 }, // Establece las dimensiones de la ventana del navegador
        timeout: 10000 // Establece un tiempo de espera global en milisegundos para todas las solicitudes del navegador
    })
    const context = await browser.newContext();
    const page = await context.newPage();   
    await page.goto("https://chat.openai.com/")
    await page.click("[class='btn relative btn-primary']")
    
    await page.click("[data-provider='google']")
    await page.type("[type='email']","roynodejs@gmail.com")
    await page.click("[data-idom-class='nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b']")
    await page.waitForTimeout(5000)
    await page.type("[type='password']","@System64.com")
    await page.waitForTimeout(1000)
    await page.click("[data-idom-class='nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b']")
    await page.click('[class="btn relative btn-neutral ml-auto"]')
    await page.waitForTimeout(1000)
    await page.click('[class="btn relative btn-neutral ml-auto"]')
    await page.waitForTimeout(1000)
    await page.click('[class="btn relative btn-primary ml-auto"]')
    await page.waitForTimeout(1000)
    await page.type('[data-id="root"]',`Actua como un redactor de noticias y redacta una noticia a partir de esta información, muéstrame la información en un json con su titulo y su contenido, la información es la siguiente: ${content}`)
    await page.click('[class="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40"]')
    //await page.click('input[type="checkbox"]')
    const arrayDeP = await page.$$('p'); // Obtener un array de todas las etiquetas "p" en la página
    const primeraEtiquetaP = arrayDeP[0]; // Acceder a la primera etiqueta "p" en el array
    const segundaEtiquetaP = arrayDeP[1]; //
    await page.waitForTimeout(60000)
    const pTextContent = await primeraEtiquetaP.textContent(); // Obtener el texto dentro de la etiqueta "p"
    console.log(pTextContent);
    const json = JSON.parse(pTextContent)
    console.log(json)
    console.log("------------------------------------------------------------------------")
    const sTextContent = await segundaEtiquetaP.textContent();
    console.log(sTextContent)
}
abrir()