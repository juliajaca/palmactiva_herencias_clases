/* ************************
@title Herencias
@version 0.1
@author Julia
************************** */

//CLASE PADRE FINCA RUSTICA
class FincaRustica {
  //constructor
  constructor(
    localidad,
    provincia,
    superficie,
    precio,
    disponibilidad,
    refCatastral
  ) {
    this.localidad = localidad;
    this.provincia = provincia;
    this.superficie = superficie;
    this.precio = precio;
    this.disponibilidad = disponibilidad.toLowerCase();
    this.refCatastral = refCatastral;
  }

  //METODOS
  comprobarDisponibilidad() {
    switch (
      this.disponibilidad //no pongo los break porque con el return ya se sale del switch
    ) {
      case "disponible":
        return "La finca está disponible";
      case "reservada":
        return "La finca está reservada";
      case "vendida":
        return "La finca está vendida";
      default:
        return "No se conoce la disponibilidad";
    }
  }
}
// *********************************************************************
// CLASE FINCA AGRICOLA; ES HIJA DE FINCA RUSTICA
class FincaAgricola extends FincaRustica {
  //Constructor
  constructor(
    localidad,
    provincia,
    superficie,
    precio,
    disponibilidad,
    refCatastral,
    secano,
    regadio,
    frutales,
    frutalesCitricos,
    olivares,
    cultivoActual
  ) {
    super(
      localidad,
      provincia,
      superficie,
      precio,
      disponibilidad,
      refCatastral
    );
    this.secano = secano;
    this.regadio = regadio;
    this.frutales = frutales;
    this.frutalesCitricos = frutalesCitricos;
    this.olivares = olivares;
    this.cultivoActual = cultivoActual;
  }
  //METODOS
  mostrarCultivosPotenciales() {
    let mensaje = "En esta finca agrícola puedes cultivar:\n";
    this.secano ? (mensaje += "- secano  \n") : "";
    this.regadio ? (mensaje += "- regadio  \n") : "";
    this.frutales ? (mensaje += "- frutales no cítricos  \n") : "";
    this.frutalesCitricos ? (mensaje += "- frutales cítricos \n ") : "";
    this.olivares ? (mensaje += "- olivares  \n") : "";
    return mensaje;
  }

  mostrarCultivosActuales() {
    let mensaje = "Actualmente hay en la finca: \n";
    for (let cultivo of this.cultivoActual) {
      mensaje += "- " + cultivo + "\n";
    }
    return mensaje;
  }
}

/*  CLASE FINCA CINEGETICA HIJA DE FINCA RUSTICA*/
class FincaCinegetica extends FincaRustica {
  //Constructor
  constructor(
    localidad,
    provincia,
    superficie,
    precio,
    disponibilidad,
    refCatastral,
    planTecnicoCaza,
    planOrdenacionForestal,
    vegetacion,
    cazaMayor,
    cazaMenor
  ) {
    super(
      localidad,
      provincia,
      superficie,
      precio,
      disponibilidad,
      refCatastral
    );
    this.planTecnicoCaza = planTecnicoCaza;
    this.planOrdenacionForestal = planOrdenacionForestal;
    this.vegetacion = vegetacion;
    this.cazaMayor = cazaMayor;
    this.cazaMenor = cazaMenor;
  }

  //METODOS
  mostrarDocumentosFinca() {
    if (this.planOrdenacionForestal && this.planTecnicoCaza) {
      return "La finca tiene toda la documentación actualizada";
    } else if (this.planOrdenacionForestal) {
      return "La finca tiene el plan de ordenación forestal";
    } else if ((this, this.planTecnicoCaza)) {
      return "La finca tiene el plan técnico de caza";
    } else {
      return "La finca no tiene ni plan técnico de caza ni plan de ordenación forestal";
    }
  }

  buscarCazaMayor() {
    let array = [];
    for (var i in this.cazaMayor) {
      if (this.cazaMayor[i]) {
        array.push(i);
      }
    }
    return array;
  }

  leerCazaMayor() {
    let arrayCaza = this.buscarCazaMayor();
    if (arrayCaza.length > 0) {
      var mensaje = "En la finca se puede practicar la caza mayor en:\n";
      for (let animal of arrayCaza) {
        mensaje += `- ${animal}\n`;
      }
    } else {
      var mensaje = "No hay caza mayor en esta finca";
    }
    return mensaje;
  }
}

// INSTANCIA DE FINCA AGRICOLA
var fincaElEjido = new FincaAgricola(
  "El Ejido",
  "Almería",
  400,
  1000000,
  "ReserVada",
  undefined,
  true,
  true,
  true,
  false,
  true,
  ["limoneros", "naranjos"]
);

// PRUEBAS CON LOS METODOS DE FINCA AGRICOLA
console.log(fincaElEjido);
console.log(fincaElEjido.mostrarCultivosPotenciales());
console.log(fincaElEjido.comprobarDisponibilidad());
console.log(fincaElEjido.mostrarCultivosActuales());

// INSTANCIA DE FINCA CINEGETICA
var fincaHornachuelos = new FincaCinegetica(
  "Hornachuelos",
  "Córdoba",
  776,
  5500000,
  "disponible",
  "76HYID8996HZZ",
  true,
  true,
  ["pino", "encina", "alcornoque", "eucalipto"],
  {
    jabali: false,
    corzo: false,
    ciervo: false,
    venado: true,
    gamo: true,
    muflon: false,
  },
  {
    conejo: false,
    codorniz: false,
    liebre: false,
    tortola: false,
    perdiz: false,
    faisan: false,
  }
);

// PRUEBAS CON LOS METODOS DE FINCA CINEGETICA
console.log(fincaHornachuelos);
console.log(fincaHornachuelos.comprobarDisponibilidad());
console.log(fincaHornachuelos.mostrarDocumentosFinca());
console.log(fincaHornachuelos.leerCazaMayor());
