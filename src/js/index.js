let contador = 0;

let c = 0;
const reformat_hors = (e = "") => {
    let dif_hors = e.split(':');
    let hors12 = parseInt(dif_hors[0]);
    if (hors12 > 12) {
        hors12 -= 12;
        return `${hors12}:${dif_hors[1]} pm`;
    }
    return `${e} pm`;
};

const btn_add_log = document.getElementById('add-log');
const table_body = document.getElementById('body-table');
const btn_close_all = document.getElementById(`btn-close-all`);
const btn_enviar = document.getElementById('form-logs').addEventListener('submit', (event) => {
    event.preventDefault();
    const form_dt = new FormData(event.target);
    const form = {};

    form_dt.forEach((value, key) => {
        if (key === 'hora-registro') { form[key] = reformat_hors(value); }
        else if (key === 'hora-finalizacion') { form[key] = reformat_hors(value); }
        else { form[key] = value; }

    });

    console.log(form);
});
// const conta = document.querySelectorAll('#body-table tr');

function add_log() {
    contador = table_body.querySelectorAll('tr').length + 1;

    const linea = document.createElement('tr');
    linea.innerHTML = `
     

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
                                

`;
    // console.log(linea);
    table_body.append(linea);



    btn_close_all.addEventListener('click', () => {
        table_body.innerHTML = '';
    });

    const btn_close = document.querySelectorAll(`#body-table button`);
    btn_close.forEach((el) => {
        el.addEventListener('click', () => {
            linea.remove();
            contador--;
        });
    });
    ;
}


btn_add_log.addEventListener('click', add_log);

add_log();