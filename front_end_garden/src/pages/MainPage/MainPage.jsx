import { useEffect, useRef } from "react";
import CatalogBlock from "../../components/CatalogBlock/CatalogBlock"
import SaleGetBlock from "../../components/SaleGetBlock/SaleGetBlock"
import SalesBlock from "../../components/SalesBlock/SalesBlock"
import TitleBlock from "../../components/TitleBlock/TitleBlock"

function MainPage(){

    useEffect(()=>{
        document.title = 'MainPage'
    }, [])

    const salesBlockRef = useRef();
        
    const scrollToSalesBlock = () => {
        salesBlockRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return(
        <div>
            <TitleBlock scrollToSalesBlock={scrollToSalesBlock}/>
            <CatalogBlock />
            <SaleGetBlock />
            <SalesBlock ref={salesBlockRef} />
        </div>
    )
}

export default MainPage
