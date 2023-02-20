/*Импорты библиотек строки 2-4*/
import Header from "../components/Header";

/*Импорт изображения*/
import G from '../images/G.png'


export default function Onas() {
    
    return (
        <>

          {/*Шапка сайта */}
         <Header />
         
         
         <body>
            <img src={G} className="foto" />
         </body>
         
       
        </>
    )
}