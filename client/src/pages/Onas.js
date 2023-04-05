/*Импорты библиотек строки 2-4*/
import Header from "../components/Header";
import Footer from "../components/Footer";

/*Импорт изображения*/
import G from '../images/G.png'


export default function Onas() {
    
    return (
        <>

          {/*Шапка сайта */}
         <Header />
         
         
         <body>
        <div>
            <img className="g" src={G} />
        </div>
        
        <Footer />
         </body>
        
        
         
       
        </>
    )
}