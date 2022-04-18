import {useState, useEffect} from 'react'

import { Error } from './Error'

const Formulario = ({setPacientes, paciente, setPaciente}) => {
  const [mascota, setMascota] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    //Compruebo si el objeto esta vacio
    if(Object.keys(paciente).length>0){
      setMascota(paciente.mascota)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }

  },[paciente])

  const generarId = () =>{
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    //Validacion formulario
    if([mascota, propietario, email, alta, sintomas].includes('')){
      setError(true)
      return
    }
    setError(false)
    //Objeto paciente
    const objPaciente = {
      mascota, 
      propietario, 
      email, 
      alta, 
      sintomas, 
    }
    if(paciente.id){
      //Editando registro
      objPaciente.id = paciente.id
      setPacientes((prevPacientes) => {
        const pacientesActualizados = prevPacientes.map(pacienteState => pacienteState.id == paciente.id ? objPaciente : pacienteState)
        return pacientesActualizados
      })
      setPaciente({})
    }else{
      //Nuevo registro
      objPaciente.id = generarId()
      setPacientes((prevPacientes) => {
        return [...prevPacientes, objPaciente]
      })
    }
    
    //Reiniciar formulario
    setMascota('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')

  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      
      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      
        <form
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-3"
          onSubmit={handleSubmit}
          >
          {error && <Error><p>Todos los campos son obligatorios.</p></Error>}
          <div className="mb-5">
            <label 
              htmlFor="nombreMascota"
              className="block text-gray-700 uppercase font-bold ">
                Nombre Mascota
            </label>
            <input 
              id="nombreMascota"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
              value={mascota}
              onChange={(e)=> setMascota(e.target.value)}
              />
          </div>


          <div className='mb-5'>
            <label 
              htmlFor="nombrePropetario"
              className="block text-gray-700 uppercase font-bold ">
                Nombre Propietario
            </label>
            <input 
              id="nombrePropetario"
              type="text"
              placeholder="Nombre del propetario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
              value={propietario}
              onChange={(e)=> setPropietario(e.target.value)}
              />
          </div>

          
          <div className='mb-5'>
            <label 
              htmlFor="email"
              className="block text-gray-700 uppercase font-bold ">
                Email
            </label>
            <input 
              id="email"
              type="email"
              placeholder="example@email.com"
              className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              />
          </div>

          <div className='mb-5'>
            <label 
              htmlFor="alta"
              className="block text-gray-700 uppercase font-bold ">
                Alta
            </label>
            <input 
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
              value={alta}
              onChange={(e)=> setAlta(e.target.value)}
              />
          </div>

          <div className='mb-5'>
            <label 
              htmlFor="sintomas"
              className="block text-gray-700 uppercase font-bold ">
                Sintomas
            </label>
            <textarea 
              id="sintomas"
              placeholder='Describe los sintomas'
              className='border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md'
              value={sintomas}
              onChange={(e)=> setSintomas(e.target.value)}
              />
          </div>

          <input 
            type="submit" 
            value={paciente.id ? 'Editar Paciente' : 'Agregar paciente'}
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" />
        </form>
      
    </div>
  )
}

export default Formulario
Formulario