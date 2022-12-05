import '../assets/estilos/cont.css'

function Cont() {
    return ( 
        <div>
                <p class="form-register">
                    <h4>Formulario Registro</h4>
                    <h4>Nombre:</h4>
                    <input class="controls" type="text" name="nombres" id="nombres" placeholder="Nombre del alumno"></input>
                    <h4>Apellido:</h4>
                    <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Apellido del alumno"></input>
                    <h4>Correo:</h4>
                    <input class="controls" type="email" name="correo" id="correo" placeholder="Correo institucional"></input>
                    <h4>Materia</h4>
                    <input class="controls" type="text" name="correo" id="correo" placeholder="Materia a cargar"></input>
                    <h4>Fecha de inicio de cuatrimestre:</h4>
                    <input type="date" name="birthday"></input>
                    <h4>Telefono:</h4>
                    <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
                    <h4>Color favorito:</h4>
                    <input type="color" name="favcolor"></input>
                    <h4>Hombre:</h4>
                    <input type="checkbox" name="vehicle1" value="Bike"></input>
                    <h4>Mujer:</h4>
                    <input type="checkbox" name="vehicle2" value="Car"></input>
                    <input class="botons" type="submit" value="Registrar"></input>
                    <input class ="botons" type="reset"></input>
                </p>
        </div>
    );
}

export default Cont;