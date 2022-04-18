import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      {
        pacientes && pacientes.length ? 
        (<>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">
            Administra tus {""}
            <span 
              className="text-indigo-600 font-bold">
                Pacientes y Citas
            </span>
          </p>
        </>) 
        : 
        (<>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 text-center mb-10">
              Agrega pacientes {""}
              <span 
                className="text-indigo-600 font-bold">
                  y apareceran en el litado inferior.
              </span>
            </p>
        </>)

      }
    <div className="md:h-[69vh] overflow-y-auto">
      {pacientes.map(paciente => (
        <Paciente 
          paciente={paciente} 
          key={paciente.id}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      ))}
      
    </div>
      

    </div>
  )
}

export default ListadoPacientes
