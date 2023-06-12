
interface IHeader {
  title: string;
  key: string;
}

interface IProps {
  title: string;
  header: IHeader[];
  data: IDataTable[];
  onSelect: ( item : IDataTable, action : string ) => void;
}

export const CrudTable = ( { title, data, header, onSelect } : IProps ) => {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center gap-4 px-4 py-8"
    >
      <h1 className="text-3xl font-bold font-serif text-center">{ title }</h1>
      <article
        className="relative overflow-x-auto shadow-md sm:rounded-lg"
      >
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-700 text-gray-400 p-12">
            <tr>
              {
                header.map( ( { title, key } ) => (
                  <th className="p-4 text-base font-semibold" key={ key }>{ title }</th>
                ) )
              }
              <th className="p-4 text-base font-semibold"> Acciones </th>
            </tr>
          </thead>
          <tbody>
            {
              data.map( ( item, index ) => (
                <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600" key={ index } >
                  <td className="px-6 py-4 font-semibold text-white">{ index + 1 }</td>
                  {
                    header.map( ( { key } ) => (
                      ( key!=='id' ) && <td className="px-6 py-4 font-semibold text-white" key={ key }>{ item[ key ] }</td>
                    ) )
                  }
                  <td className="px-6 py-4 flex justify-center gap-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={ () => onSelect( item, 'edit' ) }
                    >
                      Editar
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={ () => onSelect( item, 'delete' ) }
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ) )
            }
          </tbody>
        </table>
                
      </article>
    </div>
  )
}
