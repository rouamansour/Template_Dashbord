// import React,{Component} from 'react';
// //import {Table} from 'react-bootstrap';
// import {Button,ButtonToolbar} from 'react-bootstrap';
// //import {AddRequest} from './AddRequest';

// export class Request extends Component{

//     constructor(props){
//         super(props);
//         this.state={demds:[], addModalShow:false}
//     }

//     refreshList(){
//         fetch(process.env.REACT_APP_API+'Request')
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({demds:data});
//         });
//     }

//     componentDidMount(){
//         this.refreshList();
//     }

//     // componentDidUpdate(){
//     //     this.refreshList();
//     // }

//     render(){
//         const {demds}=this.state;
//         let addModalClose=()=>this.setState({addModalShow:false});
//         return(
//             <div >
//                 <div className="mt-4" striped bordered hover size="sm">
//                     <div>
//                         <tr>
//                             <th>Number</th>
//                             <th>Comment</th>
//                             <th>Title</th>
//                             <th>Deadline</th>
//                             <th>Type request</th>
//                             <th>Options</th>
//                         </tr>
//                     </div>
//                     <div>
//                         {demds.map(dep=>
//                             <tr key={dep.requestId}>
//                                 <td>{dep.number}</td>
//                                 <td>{dep.comment}</td>
//                                 <td>{dep.title}</td>
//                                 <td>{dep.deadline}</td>
//                                 <td>{dep.typeRequestTypeId}</td>
//                                 <td>Edit /Delete</td>
//                             </tr>)}
//                     </div>

//                 </div>
//                 {/* <ButtonToolbar>
//                     <Button variant='primary'
//                     onClick={()=>this.setState({addModalShow:true})}>
//                     Add Request</Button>

//                     <AddRequest show={this.state.addModalShow}
//                     onHide={addModalClose}/>
//                 </ButtonToolbar> */}
//             </div>
//         )
//     }
// }