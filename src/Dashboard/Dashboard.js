import React from 'react';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state={ };
    }

    render() {
        return(
            <>
           <div className="chat">
               <table className="table table-striped">
                   <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>DOJ</th>
                            <th>Action</th>
                        </tr>
                   </thead>
                   <tbody>
                       {/* {
                   list.map( (data, index) => {
                    return (
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.department}</td>
                            <td>{data.email}</td>
                            <td>{data.doj}</td>
                            <button type="button" className="clear" onClick={this.remove.bind(this, data.id)} >Delete</button>
                        </tr>
                    )
                   })} */}
                   </tbody>
               </table>
            </div>
            </>
        )
    }
}

export default Dashboard;