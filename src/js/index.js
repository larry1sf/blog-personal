let contador = 0;
const btn_add_log = document.getElementById('add-log');
const table_body = document.getElementById('body-table');
const btn_close_all = document.getElementById(`btn-close-all`);

function add_log() {
    const conta = document.querySelectorAll('#body-table tr');

    contador++;


    const linea = document.createElement('tr');
    linea.innerHTML = `
     <tr>

                                <td class='ps-2'>
                                    <label for="actividad-${contador}" class="form-label">
                                        <input type="text" title="recibir registro" name="recibir-registro"
                                            class="p-1 form-control" id="actividad-${contador}" placeholder="Actividad">
                                    </label>
                                </td>

                                <td>
                                    <label for="hora-registro-${contador}" class="form-label">
                                        <input type="time" title="hora de registro" name="hora-registro"
                                            class="p-1 form-control" id="hora-registro-${contador}">
                                    </label>
                                </td>

                                <td>
                                    <label for="hora-finalizacion-${contador}" class="form-label">
                                        <input type="time" title="hora de finalizacion" placeholder="00/00"
                                            name="hora-finalizacion" class="p-1 form-control" id="hora-finalizacion-${contador}">
                                    </label>
                                </td>

                                <td class="pe-0 pe-lg-2 ">   
                                    <div class="form-check form-switch d-inline-block ms-0 ms-lg-3 col-3 w-50" >
                                        <label for="checkeo-${contador}" title="checkeo" class="form-check-label ">
                                            <input type="checkbox" role="switch" name="checkeo" class="form-check-input"
                                                id="checkeo-${contador}">
                                        </label>
                                    </div>
                                    <div data-bs-theme="dark" class=' d-inline-block position-relative end-0 me-0 me-lg-2 col-2 '>
                                        <button id="btn-close-${contador}" title="btn-close" type="button"
                                            class="btn-close"></button>
                                    </div>
                                </td>
                                

</tr>`;
    // console.log(linea);
    table_body.append(linea);



    btn_close_all.addEventListener('click', () => {
        table_body.innerHTML = '';
    });

    const btn_close = document.querySelectorAll(`#body-table button`);
    btn_close[contador - 1].addEventListener('click', () => {
        linea.remove();
        contador--;
    });
    // console.log(contador);
    ;
    // console.log(btn_close[contador - 1]);
}



btn_add_log.addEventListener('click', add_log);
add_log();