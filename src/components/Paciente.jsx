

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {mascota, propietario, email, alta, sintomas, id} = paciente
  
  const handleEliminar = () => {
    const confirmation = confirm('Desea eliminar el paciente?')
    if(confirmation){
      eliminarPaciente(id)
    }
  }
  return (
    <div className="mb-3 mx-3 bg-white shadow-md px-5 py-10 rounded-xl">
        
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
      <span className="font-normal normal-case">
        {mascota}
      </span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
      <span className="font-normal normal-case">
        {propietario}
      </span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
      <span className="font-normal normal-case">
        {email}
      </span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {""}
      <span className="font-normal normal-case">
        {alta}
      </span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {""}
      <span className="font-normal normal-case">
        {sintomas}
      </span>
    </p>
    <div className="flex justify-between mt-10">
      <input 
        type="button" 
        value="Editar"
        onClick={()=>setPaciente(paciente)} 
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md" />
      <input 
        type="button" 
        value="Eliminar" 
        onClick={handleEliminar}
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"/>
    </div>

  </div>
  )
}

export default Paciente