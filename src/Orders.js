import React from 'react'
import Order from '../../components/Order/Order';
import axios  from '../../hoc/axios-order';
class Orders extends React.Component{
    state={
        orders:[],
        loading:true
    }
    componentDidMount(){
        axios.get('/order.json').
        then(response=>{
            const orderResp=[];
            for(let key in response.data){
                orderResp.push({
                    ...response.data[key],
                    id:key
                })

            }
            console.log(response);
            this.setState({loading:false,orders:orderResp});
        }).catch(e=>{
            console.log(e);
            this.setState({loading:false});
        })
    }
    render(){
        return(
            <div style={{margin:'60px',padding:'10px'}}>
                {this.state.orders.map(order=>{
                    return(<Order key={order.id} ingredient={order.ingredient} price={order.price}/>)
                })}
            </div>
        )
    }
}

export default Orders;