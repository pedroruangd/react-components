import React,  { ReactDOM } from 'react'
import './style.css'
import Switch from '@mui/material/Switch';

export default class Form extends React.Component {

    constructor (props) {

        console.log('Construtor - inicialização')

        super(props)

        this.state = {
            counter: 0,
            isToggleOn: true,
        }

        this.handleClick = this.handleClick.bind(this)
        
        this.increment = () => this.setState({ counter: this.state.counter + 1})

        this.decrement = () => this.setState({ counter: this.state.counter - 1})

    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    componentDidMount(){
        console.log('Componente montado')
    }

    componentDidUpdate(){
        console.log('Componente atualizado')
    }

    render() {
        console.log('Render - exibição')
        const label = { inputProps: { 'aria-label': 'Switch demo' } }

        return <div className='Form'>
                <p>
                    <button onClick={this.increment } >Aumentar</button>
                    <button onClick={this.decrement } >Diminuir</button>
                    <input value={this.state.counter} />

                </p>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn? 'Ligado' : 'Desligado'}
                </button>
                <Switch  onClick={this.handleClick} {...label} checked={this.state.isToggleOn? true : false} />

        </div>
    }

}