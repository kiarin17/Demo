import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //Массив с категориями 
           categories: [
            {
                key: 'all',
                name: 'Всё'
            },

            {
                key: 'hot',
                name: 'Горячие блюда'
            },

            {
                key: 'barbecue',
                name: 'Мангал'
            },

            {
                key: 'desserts',
                name: 'Десерты'
            },

            {
                key: 'khinkali',
                name: 'Хинкали'
            }
            
           ]
        }
    }
  render() {
    return (
        //вывод категорий
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)} >{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories