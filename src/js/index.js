let contador = 0

function reformat_hors(e = "" | null) {
  const dif_hors = e.split(":")

  let hors12 = parseInt(dif_hors[0])
  if (hors12 > 12) {
    hors12 -= 12

    return `${hors12}:${dif_hors[1]} pm`
  } else {
    return `${e} am`
  }
}

const btn_add_log = document.getElementById("add-log")
const table_body = document.getElementById("body-table")
const btn_close_all = document.getElementById(`btn-close-all`)

const btn_enviar = document
  .getElementById("form-logs")
  .addEventListener("submit", (event) => {
    event.preventDefault()
    const form_dt = new FormData(event.target)
    const form = {}
    const form_res = []
    // let cuenta_registros = 0

    form_dt.forEach((value, key) => {
      const x = reformat_hors(value)
      // form_res.push(form)
      const h = key.startsWith("h")
        ? (form[key] = x)
        : (form[key] = value)
      // const r = key.endsWith(contador)
      //   ?
      // cuenta_registros++
    })
    console.log(form)

    // form_res.push(form)
  })

function add_log() {
  contador = table_body.querySelectorAll("tr").length + 1

  const linea = document.createElement("tr")
  linea.innerHTML = `
                                <td class='ps-2 '>
                                    <label for="actividad-${contador} floatingInput" class="form-label">
                                        <input required type="text" title="recibir registro" name="actividad-registro-${contador}"
                                            class="p-1 form-control" id="actividad-${contador} floatingInput" placeholder="Trabajo...">
                                    </label>
                                </td>

                                <td>
                                    <label for="hora-registro-${contador}" class="form-label">
                                        <input required type="time" title="hora de registro" name="hora-registro-${contador}"
                                            class="p-1 form-control" id="hora-registro-${contador}">
                                    </label>
                                </td>

                                <td>
                                    <label for="hora-finalizacion-${contador}" class="form-label">
                                        <input required type="time" title="hora de finalizacion" placeholder="00/00"
                                            name="hora-finalizacion-${contador}" class="p-1 form-control" id="hora-finalizacion-${contador}">
                                    </label>
                                </td>

                                <td class="pe-0 pe-lg-2 ">   
                                    <div class="form-check form-switch d-inline-block ms-0 ms-lg-3 col-3 w-50" >
                                        <label for="checkeo-${contador}" title="checkeo" class="form-check-label ">
                                            <input type="checkbox" role="switch" name="checkeo-${contador}" class="form-check-input"
                                                id="checkeo-${contador}">
                                        </label>
                                    </div>
                                    <div data-bs-theme="dark" class=' d-inline-block position-relative end-0 me-0 me-lg-2 col-2 '>
                                        <button id="btn-close-${contador}" title="btn-close" type="button"
                                            class="btn-close"></button>
                                    </div>
                                </td>
                                

`
  table_body.append(linea)

  const btn_close = document
    .getElementById(`btn-close-${contador}`)
    .addEventListener("click", function () {
      contador--
      linea.remove()
    })

  // arreglado para que deje un input reiniciado.
  btn_close_all.addEventListener("click", function () {
    const x = document.createElement("tr")
    table_body.innerHTML = ""
    x.innerHTML = `
                                <td class='ps-2 '>
                                    <label for="actividad-1 floatingInput" class="form-label">
                                        <input required type="text" title="recibir registro" name="actividad-registro-1"
                                            class="p-1 form-control" id="actividad-1 floatingInput" placeholder="Trabajo...">
                                    </label>
                                </td>

                                <td>
                                    <label for="hora-registro-1" class="form-label">
                                        <input required type="time" title="hora de registro" name="hora-registro-1"
                                            class="p-1 form-control" id="hora-registro-1">
                                    </label>
                                </td>

                                <td>
                                    <label for="hora-finalizacion-1" class="form-label">
                                        <input required type="time" title="hora de finalizacion" placeholder="00/00"
                                            name="hora-finalizacion-1" class="p-1 form-control" id="hora-finalizacion-1">
                                    </label>
                                </td>

                                <td class="pe-0 pe-lg-2 ">   
                                    <div class="form-check form-switch d-inline-block ms-0 ms-lg-3 col-3 w-50" >
                                        <label for="checkeo-1" title="checkeo" class="form-check-label ">
                                            <input type="checkbox" role="switch" name="checkeo-1" class="form-check-input"
                                                id="checkeo-1">
                                        </label>
                                    </div>
                                    <div data-bs-theme="dark" class=' d-inline-block position-relative end-0 me-0 me-lg-2 col-2 '>
                                        <button id="btn-close-1" title="btn-close" type="button"
                                            class="btn-close"></button>
                                    </div>
                                </td>
                                

`
    table_body.append(x)
  })
}
btn_add_log.addEventListener("click", add_log)

add_log()
