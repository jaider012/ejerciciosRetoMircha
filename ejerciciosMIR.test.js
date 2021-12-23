const {nuemerodecaracteres, recortados,DestringaArray,  repitaX} = require('./ejerciciosMIR.js')

test ('el número de caracteres de una cadena de texto', ()=>{
    const result = nuemerodecaracteres('hola mundo')
    expect(result).toBe(10)

})
test ('el número de caracteres de una cadena de texto', ()=>{
    const result12 = nuemerodecaracteres(Object)
    expect(result12).toBe("not string")
})
test ('te devuelva el texto recortado según el número de caracteres', ()=>{
    const result = recortados('hola mundo', 4)
    expect(result).toBe("hola")

})
test ('que pasa si le  paso un objto a la pregunta', ()=>{
    const result = recortados(Object, 4)
    expect(result).toBe('not string')

})
test ('que pasa si le  paso un array a la pregunta', ()=>{
    const result = recortados(Array, 4)
    expect(result).toBe('not string')

})

test ('función que dada una String te devuelva un Array de textos separados por cierto caracter', ()=>{
    const result = DestringaArray('hola que tal', " ")
    expect(result).toStrictEqual(['hola', 'que', 'tal'])

})

test ('repita un texto X veces', ()=>{
    const result = repitaX('Hola Mundo', 3)
    expect(result).toBe("Hola Mundo Hola Mundo Hola Mundo ")
})