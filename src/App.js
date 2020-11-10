// import { select } from 'antd'
import React,{Component} from 'react'

export default class APP extends Component{

    // state = {
    //     count:0
    // }

    increment = ()=>{
        let {value} = this.refs.selectNumber
        this.props.store.dispatch({type:'increment',data:value*1})
        // let {count} = this.state
        // this.setState({count:count+value*1})
    }

    decrement = ()=>{
        let {value} = this.refs.selectNumber
        this.props.store.dispatch({type:'decrement',data:value*1})
        // let {count} = this.state
        // this.setState({count:count-value*1})
    }

    incrementIfOdd = ()=>{
        let {value} = this.refs.selectNumber
        let count = this.props.store.getState()
        if (count % 2 === 1){
            this.props.store.dispatch({type:'increment',data:value*1})
        }
        // let {count} = this.state
        // if (value % 2 === 1){
        //     this.setState({count:count+value*1})
        // }
    }

    incrementIfAsync = ()=>{
        let {value} = this.refs.selectNumber
        // let {count} = this.state
        setTimeout(()=>{
            this.props.store.dispatch({type:'increment',data:value*1})
        },1000)
    }

    render(){
        // let {count} = this.state
        let count = this.props.store.getState()
        return (
            <div>
                <h3>当前计算为{count}</h3>
                <select ref="selectNumber">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementIfAsync}>increment async</button>&nbsp;
            </div>
        );
    }
}