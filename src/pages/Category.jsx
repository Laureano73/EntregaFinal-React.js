import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'


function Category({productos}) {

    const [productosFiltrados, setProductosFiltrados] = useState([])
    const {categoryId} = useParams()
    const categoryIdString=categoryId.category

    useEffect(() => {
        const result = productos.filter((producto) => producto.category === categoryId)
        setProductosFiltrados(result)

    },[categoryId,productos])

    return (
        <>
            <ItemListContainer products={productosFiltrados}/>
        </>
    )
}

export default Category