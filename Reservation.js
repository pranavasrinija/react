import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddReservation} from './AddReservation';


export class Reservation extends Component{

    constructor(props){
        super(props);
        this.state={Res:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Reservation')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Res:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    delete(Id){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Reservation/'+Id,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {Res}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                   
                    <tbody>
                    {Res.map(Res => <tr key={Res.Id}>
                        <td>{Res.Id}</td>
                        <td>{Res.Name}</td>
                        <td>{Res.Email}</td>
                        <td>{Res.PhoneNumber}</td>
                        <td>{Res.Address}</td>
                        <td>{Res.IdProof}</td>
                        <td>
                        <ButtonToolbar>
                            <Button className="mr-2" variant="info"
                            onClick={()=>this.setState({editModalShow:true,
                                        id:Res.Id,Name:Res.Name,Email:Res.Email,PhoneNumber:Res.PhoneNumber,Address:Res.Address,IdProof:Res.IdProof})}>
                                    Edit
                            </Button>

                            <Button className="mr-2" variant="danger"
                            onClick={()=>this.delete(Res.Id)}>
                                    Delete
                            </Button>
                        </ButtonToolbar>

                        </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Reservation </Button>

                    <AddReservation show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Reservation;