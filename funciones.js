// Velocidad (v = d / t)
function velocidad(distancia, tiempo) {
    if (distancia < 0 || tiempo <= 0) throw new Error('Distancia debe ser no negativa y tiempo positivo.');
    return distancia / tiempo;
}

// Aceleración (a = Δv / Δt)
function aceleracion(velocidadInicial, velocidadFinal, tiempo) {
    if (tiempo <= 0) throw new Error('Tiempo debe ser positivo.');
    return (velocidadFinal - velocidadInicial) / tiempo;
}

// Fuerza (F = m · a)
function fuerza(masa, aceleracion) {
    if (masa < 0) throw new Error('Masa debe ser no negativa.');
    return masa * aceleracion;
}

// Trabajo (W = F · d · cos(θ)) θ en grados
function trabajo(fuerza, distancia, angulo) {
    if (distancia < 0) throw new Error('Distancia debe ser no negativa.');
    const rad = angulo * Math.PI / 180;
    return fuerza * distancia * Math.cos(rad);
}

// Energía Cinética (K = ½ · m · v²)
function energiaCinetica(masa, velocidad) {
    if (masa < 0) throw new Error('Masa debe ser no negativa.');
    return 0.5 * masa * Math.pow(velocidad, 2);
}

// Energía Potencial Gravitatoria (U = m · g · h)
function energiaPotencialGravitatoria(masa, gravedad, altura) {
    if (masa < 0 || gravedad < 0 || altura < 0) throw new Error('Masa, gravedad y altura deben ser no negativas.');
    return masa * gravedad * altura;
}

// Densidad (ρ = m / V)
function densidad(masa, volumen) {
    if (volumen <= 0) throw new Error('Volumen debe ser positivo.');
    return masa / volumen;
}

// Presión (P = F / A)
function presion(fuerza, area) {
    if (area <= 0) throw new Error('Área debe ser positiva.');
    return fuerza / area;
}

// Carga Eléctrica (q = I · t)
function cargaElectrica(corriente, tiempo) {
    if (corriente < 0 || tiempo < 0) throw new Error('Corriente y tiempo deben ser no negativos.');
    return corriente * tiempo;
}

// Ley de Ohm (V = I · R)
function leyDeOhm(corriente, resistencia) {
    if (corriente < 0 || resistencia < 0) throw new Error('Corriente y resistencia deben ser no negativas.');
    return corriente * resistencia;
}

// Mostrar formulario basado en la selección
function mostrarFormulario() {
    const seleccion = document.getElementById('calculoSeleccionado').value;
    const formulario = document.getElementById('formulario');
    formulario.innerHTML = ''; // Limpiar formulario anterior

    switch (seleccion) {
        case 'velocidad':
            formulario.innerHTML = `
                <label for="distancia">Distancia (m):</label>
                <input type="number" id="distancia" step="any" min="0" required>
                <label for="tiempo">Tiempo (s):</label>
                <input type="number" id="tiempo" step="any" min="0" required>
                <button type="button" onclick="calcular('velocidad')">Calcular Velocidad</button>
            `;
            break;
        case 'aceleracion':
            formulario.innerHTML = `
                <label for="velInicial">Velocidad Inicial (m/s):</label>
                <input type="number" id="velInicial" step="any" required>
                <label for="velFinal">Velocidad Final (m/s):</label>
                <input type="number" id="velFinal" step="any" required>
                <label for="tiempoAceleracion">Tiempo (s):</label>
                <input type="number" id="tiempoAceleracion" step="any" min="0" required>
                <button type="button" onclick="calcular('aceleracion')">Calcular Aceleración</button>
            `;
            break;
        case 'fuerza':
            formulario.innerHTML = `
                <label for="masaFuerza">Masa (kg):</label>
                <input type="number" id="masaFuerza" step="any" min="0" required>
                <label for="aceleracionFuerza">Aceleración (m/s²):</label>
                <input type="number" id="aceleracionFuerza" step="any" required>
                <button type="button" onclick="calcular('fuerza')">Calcular Fuerza</button>
            `;
            break;
        case 'trabajo':
            formulario.innerHTML = `
                <label for="fuerzaTrabajo">Fuerza (N):</label>
                <input type="number" id="fuerzaTrabajo" step="any" required>
                <label for="distanciaTrabajo">Distancia (m):</label>
                <input type="number" id="distanciaTrabajo" step="any" min="0" required>
                <label for="anguloTrabajo">Ángulo θ (grados):</label>
                <input type="number" id="anguloTrabajo" step="any" required>
                <button type="button" onclick="calcular('trabajo')">Calcular Trabajo</button>
            `;
            break;
        case 'energiacinetica':
            formulario.innerHTML = `
                <label for="masaEnergiaCinetica">Masa (kg):</label>
                <input type="number" id="masaEnergiaCinetica" step="any" min="0" required>
                <label for="velocidadEnergiaCinetica">Velocidad (m/s):</label>
                <input type="number" id="velocidadEnergiaCinetica" step="any" required>
                <button type="button" onclick="calcular('energiacinetica')">Calcular Energía Cinética</button>
            `;
            break;
        case 'energiapotencialgravitatoria':
            formulario.innerHTML = `
                <label for="masaEnergiaPotencial">Masa (kg):</label>
                <input type="number" id="masaEnergiaPotencial" step="any" min="0" required>
                <label for="gravedadEnergiaPotencial">Gravedad (m/s²):</label>
                <input type="number" id="gravedadEnergiaPotencial" step="any" min="0" value="9.8" required>
                <label for="alturaEnergiaPotencial">Altura (m):</label>
                <input type="number" id="alturaEnergiaPotencial" step="any" min="0" required>
                <button type="button" onclick="calcular('energiapotencialgravitatoria')">Calcular Energía Potencial</button>
            `;
            break;
        case 'densidad':
            formulario.innerHTML = `
                <label for="masaDensidad">Masa (kg):</label>
                <input type="number" id="masaDensidad" step="any" min="0" required>
                <label for="volumenDensidad">Volumen (m³):</label>
                <input type="number" id="volumenDensidad" step="any" min="0" required>
                <button type="button" onclick="calcular('densidad')">Calcular Densidad</button>
            `;
            break;
        case 'presion':
            formulario.innerHTML = `
                <label for="fuerzaPresion">Fuerza (N):</label>
                <input type="number" id="fuerzaPresion" step="any" required>
                <label for="areaPresion">Área (m²):</label>
                <input type="number" id="areaPresion" step="any" min="0" required>
                <button type="button" onclick="calcular('presion')">Calcular Presión</button>
            `;
            break;
        case 'cargaelectrica':
            formulario.innerHTML = `
                <label for="corrienteCarga">Corriente (A):</label>
                <input type="number" id="corrienteCarga" step="any" min="0" required>
                <label for="tiempoCarga">Tiempo (s):</label>
                <input type="number" id="tiempoCarga" step="any" min="0" required>
                <button type="button" onclick="calcular('cargaelectrica')">Calcular Carga Eléctrica</button>
            `;
            break;
        case 'leyDeOhm':
            formulario.innerHTML = `
                <label for="corrienteOhm">Corriente (A):</label>
                <input type="number" id="corrienteOhm" step="any" min="0" required>
                <label for="resistenciaOhm">Resistencia (Ω):</label>
                <input type="number" id="resistenciaOhm" step="any" min="0" required>
                <button type="button" onclick="calcular('leyDeOhm')">Calcular Voltaje</button>
            `;
            break;
        default:
            formulario.innerHTML = ''; // Clear the form if no valid selection
    }
}

// Función para calcular y mostrar el resultado
function calcular(tipo) {
    let resultado;
    try {
        switch (tipo) {
            case 'velocidad':
                const d = parseFloat(document.getElementById('distancia').value);
                const t = parseFloat(document.getElementById('tiempo').value);
                resultado = velocidad(d, t);
                break;
            case 'aceleracion':
                const vi = parseFloat(document.getElementById('velInicial').value);
                const vf = parseFloat(document.getElementById('velFinal').value);
                const ta = parseFloat(document.getElementById('tiempoAceleracion').value);
                resultado = aceleracion(vi, vf, ta);
                break;
            case 'fuerza':
                const m = parseFloat(document.getElementById('masaFuerza').value);
                const a = parseFloat(document.getElementById('aceleracionFuerza').value);
                resultado = fuerza(m, a);
                break;
            case 'trabajo':
                const f = parseFloat(document.getElementById('fuerzaTrabajo').value);
                const dTrabajo = parseFloat(document.getElementById('distanciaTrabajo').value);
                const angulo = parseFloat(document.getElementById('anguloTrabajo').value);
                resultado = trabajo(f, dTrabajo, angulo);
                break;
            case 'energiacinetica':
                const masaCinetica = parseFloat(document.getElementById('masaEnergiaCinetica').value);
                const velCinetica = parseFloat(document.getElementById('velocidadEnergiaCinetica').value);
                resultado = energiaCinetica(masaCinetica, velCinetica);
                break;
            case 'energiapotencialgravitatoria':
                const masaPotencial = parseFloat(document.getElementById('masaEnergiaPotencial').value);
                const gravedad = parseFloat(document.getElementById('gravedadEnergiaPotencial').value);
                const altura = parseFloat(document.getElementById('alturaEnergiaPotencial').value);
                resultado = energiaPotencialGravitatoria(masaPotencial, gravedad, altura);
                break;
            case 'densidad':
                const masaDensidad = parseFloat(document.getElementById('masaDensidad').value);
                const volumen = parseFloat(document.getElementById('volumenDensidad').value);
                resultado = densidad(masaDensidad, volumen);
                break;
            case 'presion':
                const fuerzaPresion = parseFloat(document.getElementById('fuerzaPresion').value);
                const area = parseFloat(document.getElementById('areaPresion').value);
                resultado = presion(fuerzaPresion, area);
                break;
            case 'cargaelectrica':
                const corriente = parseFloat(document.getElementById('corrienteCarga').value);
                const tiempo = parseFloat(document.getElementById('tiempoCarga').value);
                resultado = cargaElectrica(corriente, tiempo);
                break;
            case 'leyDeOhm':
                const corrienteOhm = parseFloat(document.getElementById('corrienteOhm').value);
                const resistencia = parseFloat(document.getElementById('resistenciaOhm').value);
                resultado = leyDeOhm(corrienteOhm, resistencia);
                break;
            default:
                throw new Error('Tipo de cálculo no válido.');
        }
        document.getElementById('resultado').textContent = `Resultado: ${resultado.toFixed(4)}`;
    } catch (error) {
        document.getElementById('resultado').textContent = error.message;
    }
}