/*Импорты библиотек строки 2-4*/
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Items from "../components/Items";


/*Импорт изображения*/

import Categories from "../components/Categories";
import Header from "../components/Header";
import ShowFullItem from "../components/ShowFullItem";
import Footer from "../components/Footer";



class Catalog extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Бифштекс из мраморной говядины',
          img: 'bif.jpg',
          desc: 'Рубленная говядина со свининой, яйцом куриным и специями.Подается с обжареным картофелем, розмарином, чесноком, помидорами "Черри"',
          category: 'hot',
          price: '450₽'
        },

        {
          id: 2,
          title: 'Бефстроганов с пюре',
          img: 'b.jpg',
          desc: 'Обжареная говядина с луком и грибами тушеная в сливках, подается с картофельным пюре, черри, сливочным маслом, соленым огурцом, оливковым маслом и зеленью',
          category: 'hot',
          price: '530₽'
        },

        {
          id: 3,
          title: 'Оджахури из телятины',
          img: 'od.jpg',
          desc: 'Обжареные овощи лука, перца болгарского, томатов, с ароматными кусочками говядины, специй и чеснока.',
          category: 'hot',
          price: '490₽'
        },

        {
          id: 4,
          title: 'Треска с овощами',
          img: 'treska.jpg',
          desc: 'Филе трески, морковь, цукини, картофель, розмарин, специи, сливки, лайм, помидоры "Черри", микс зел',
          category: 'hot',
          price: '490₽'
        },

        {
          id: 5,
          title: 'Чашушули',
          img: 'chahka.jpg',
          desc: 'Тушеные овощи в томате со специями ( сельдерей, перец болгарский, репчатый лук ) с кусочками говядины.Подается с зеленым маслом и кинзой',
          category: 'hot',
          price: '430₽'
        },

        {
          id: 6,
          title: 'Куриная грудка гриль с булгуром и овощами',
          img: 'kura.jpg',
          desc: 'Т Куриная грудка гриль маринованная в специях.Подается с отварным булгуром, морковью, луком, томатами, базиликом и оливковым маслом.',
          category: 'hot',
          price: '370₽'
        },

        {
          id: 7,
          title: 'Каре ягненка',
          img: 'ягненок.jpg',
          desc: ' Корейка ягненка обжаривается на мангале. Гарнируется блюдо соусом томатным "Сацебели", салатом из краснокочанной капусты и маринованый лук в лимоном соке',
          category: 'barbecue',
          price: '670₽'
        },

        {
          id: 8,
          title: 'Свиные ребра с ткемали',
          img: 'свинья.jpg',
          desc: 'Свиные ребра маринованные в соусе "Ткемали" обжариваются на гриле. Гарнируется блюдо соусом томатным "Сацебели", салатом из краснокочанной капусты и маринованый лук в лимоном соке',
          category: 'barbecue',
          price: '470₽'
        },

        {
          id: 9,
          title: 'Стейк из свинины на кости',
          img: 'стейк.jpg',
          desc: 'Свинина на кости обжаривается на мангале. Гарнируется блюдо соусом томатным "Сацебели", салатом из краснокочанной капусты и маринованый лук в лимоном соке',
          category: 'barbecue',
          price: '510₽'
        },

        {
          id: 10,
          title: 'Шашлык из свиной шеи',
          img: 'шаш1.jpg',
          desc: 'Свиная шея, лук репчатый, лимон, специи. Гарнируется блюдо соусом томатным "Сацебели", салатом из краснокочанной капусты и маринованый лук в лимоном соке',
          category: 'barbecue',
          price: '450₽'
        },

        {
          id: 11,
          title: 'Шашлык из курицы',
          img: 'шаш2.jpg',
          desc: 'Куриное филе бедра, лук репчатый, лимон, специи. Гарнируется блюдо соусом томатным "Сацебели", салатом из краснокочанной капусты и маринованый лук в лимоном соке',
          category: 'barbecue',
          price: '370₽'
        },

        {
          id: 12,
          title: 'Шашлык из ягненка',
          img: 'шаш3.jpg',
          desc: 'Свиные ребра маринованные в соусе "Ткемали" обжариваются на гриле. Гарнируется блюдо соусом томатным "Сацебели", салатом из краснокочанной капусты и маринованый лук в лимоном соке',
          category: 'barbecue',
          price: '590₽'
        },

        {
          id: 13,
          title: 'Морковный торт',
          img: 'морковник.jpg',
          desc: 'Яйцо куриное, сахарный песок, масло растительное, мука пшеничная, разрыхлитель, сода, специи, соль, морковь, грецкий орех, сыр креметто, сливки 33%, сахарная пудра, лимон, орех миндаль лепестки',
          category: 'desserts',
          price: '250₽'
        },

        {
          id: 14,
          title: 'Медовик',
          img: 'медовик.jpg',
          desc: 'Мед, масло сливочное, сахарный песок, сода, яйцо куриное, мука пшеничная, молоко, крахмал, халва',
          category: 'desserts',
          price: '250₽'
        },

        {
          id: 15,
          title: 'Чизкейк классический',
          img: 'чизкейк.jpg',
          desc: 'Печенье молочное, масло сливочное, сыр креметто, сливки 33%, сахарный песок',
          category: 'desserts',
          price: '250₽'
        },

        {
          id: 16,
          title: 'Чизкейк манго',
          img: 'чизманго.jpg',
          desc: 'Печенье молочное, масло сливочное, сыр креметто, сливки 33%, сахарный песок, фруктовое пюре, желатин, яйцо куриное',
          category: 'desserts',
          price: '290₽'
        },

        {
          id: 17,
          title: 'Сырники',
          img: 'сырники.jpg',
          desc: 'Творог, яйцо куриное, сахар, мука, сметана, сахарная пудра, мята',
          category: 'desserts',
          price: '230₽'
        },

        {
          id: 18,
          title: 'Наполеон',
          img: 'наполеон.jpg',
          desc: 'Тесто слоеное, молоко, яйцо куриное, сахарный песок, крахмал, ванилин, масло сливочное, молоко сгущеное, мороженое, сливки растительные',
          category: 'desserts',
          price: '250₽'
        },

        {
          id: 19,
          title: 'Хинкали "Аджапсандал"',
          img: 'хинкали.jpg',
          desc: 'Хинкали с тушеными томатами, перцем, баклажанами, сельдереем',
          category: 'khinkali',
          price: '69₽'
        },

        {
          id: 20,
          title: 'Хинкали с бараниной',
          img: 'хинкали.jpg',
          desc: 'Хинкали с фаршем из мяса баранины с зеленью и специями (слегка острые)',
          category: 'khinkali',
          price: '79₽'
        },

        {
          id: 21,
          title: 'Хинкали с сыром',
          img: 'хинкали.jpg',
          desc: 'Хинкали с двумя видами сыра: сулугуни и имеритинский с добавлением зелени',
          category: 'khinkali',
          price: '69₽'
        },

       
      ],

      //Создаю новую состояние 
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this) 
    this.deleteOrder = this.deleteOrder.bind(this) 
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <>
    
     

          
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Categories  chooseCategory={this.chooseCategory}/>
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd = {this.addToOrder}/>

          {this.state.showFullItem && <ShowFullItem onAdd = {this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} /> }

          <Footer />
      </>
    )
  }

    //Метод
    onShowItem(item) {
      this.setState({fullItem: item})
      this.setState({showFullItem: !this.state.showFullItem})
    }


    chooseCategory(category) {

      if(category === 'all'){
        this.setState({currentItems: this.state.items })
        return
      }
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      })
    }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })
    
  }
}

export default Catalog;
