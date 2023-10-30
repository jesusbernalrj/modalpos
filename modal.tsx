
const modal = () => {
  return (
    <div
           className="modal fade show d-flex justify-content-center align-items-center"
           style={{
             position: 'fixed',
             top: 0,
             left: 0,
             right: 0,
             width: '100%',
             height: '100%',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             backgroundColor: 'rgba(0, 0, 0, 0.5)',
             zIndex: 9999,
           }}
        >
          <div className="modal-dialog d-flex justify-content-center align-items-center " style={{width: '100%'}}>
            <div className="modal-content "     style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
      backgroundColor: "white",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "5px",
      overflow: "hidden",
    }}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Empleados
                </h5>
                <button
                  type="button"
                  className="btn-close"
                 
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" style={{ padding: '20px', maxHeight: '70vh', overflowY: 'auto' }}>
              <div className="flex" aria-label="modal">
    <main className="flex-grow  ">
      <div className="d-flex gap-3 bg-light">
       <div className="dropdown ">
  <button className="btn  dropdown-toggle text-left align-middle font-medium text-muted-foreground" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Columna
  </button>
  <ul className="dropdown-menu  buscador-search " aria-labelledby="dropdownMenuButton2">
    <li className="dropdown-item text-left align-middle font-medium text-muted-foreground cursor-pointer"></li>    
  </ul>
</div>
<div className="dropdown ">
  <button className="btn  dropdown-toggle text-left align-middle font-medium text-muted-foreground" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Filtrado
  </button>
  <ul className="dropdown-menu buscador-search " aria-labelledby="dropdownMenuButton2">
  <select className="form-select mb-3 ">
       <option value='name'>Nombre</option>
       <option value='email'>Email</option>
       <option value='rfc'>RFC</option>
       <option value='telefono'>Telefono</option>
    </select>
    <input className='form-control' placeholder='buscar Empleado...'  aria-label="filtrado"/>
  </ul>
</div>

</div>
<div className="w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              <div className="dropdown">           
                Nombre
             
                </div>
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Email
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Telefono
              </th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ">
              RFC
              </th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ">
              Ciudad
              </th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ">
              Rol
              </th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ">
                
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0" />
            </tr>
          </thead>
     
          <tbody className="[&_tr:last-child]:border-0">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <td className="d-flex  gap-2 p-4 align-middle [&:has([role=checkbox])]:pr-0">
              <div className="circle-input-clientes ">
           
              <div className="circle-clientes-empleado">
          <div className="initials-empleados">CA</div>
        </div>
        </div>
              Carlos
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                carlos@hotmail.com 
              </td>
           
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 ">
                6699298762
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 ">
                789456123
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 ">
                Mazatlan
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 ">
              Pendiente
              </td>
              <td className="">
  <div className="dropstart">
           
                
                <button
  className=" btn dropdown-toggle" // Add the Bootstrap button and dropdown classes
  type="button"
  id="dropdownMenuButton"
  data-bs-toggle="dropdown" // Add Bootstrap data attribute for dropdown
  aria-expanded="false"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <circle cx={12} cy={12} r={1} />
    <circle cx={12} cy={5} r={1} />
    <circle cx={12} cy={19} r={1} />
  </svg>
</button>

<ul className="dropdown-menu dropdown-menu-end " aria-labelledby="dropdownMenuButton">

  <li><a className="dropdown-item custom-text-color text-muted-foreground sizes-links" href="#" >  Editar</a></li> 
  <li><a className="dropdown-item custom-text-color text-muted-foreground sizes-links" href="#" >Delete</a></li>
</ul>
                </div>
              </td>
            </tr>
           </tbody>
        
         
        </table>

      </div>
    </main>
 
  </div>

              </div>

            </div>
          </div>
        </div>
  )
}

export default modal