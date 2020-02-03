import React,{Component} from 'react';
import  sortBy from 'lodash/sortBy';
class PeopleList0 extends Component{

     constructor(props){
         super(props);
         this.state ={
          //  step one : show list
           people: [
                { name: "Zyle", _id: 11}, 
                { name: "Susan", _id:22},
                {name:"Ted",_id:7}
            ]
        }

            this.sortBy1 = this.sortBy1.bind(this)    ;
            this.passBy = this.passBy.bind(this);
            /* step 2 sort by id 
               people:  sortBy([
                { name: "Kyle", _id: 2}, 
                { name: "Susan", _id: 1}
            ], 'name')*/
         }
     
   

  sortBy1(event) {

      var     people1 =[];
    if (event.target.value === '_id')
        {
         people1= this.state.people.sort((a,b)=>(a._id - b._id));
           this.setState({people:people1});
        }
        console.log('invoked');
    }
    passBy(event){
       // alert('in pass by');
        
        var     people1 =[];
        if (event.target.value === 'name'){
       // people: sortBy(this.state.people, this.state.people.name) ;
              // alert('in pass by1');
             this.setState({people: sortBy(this.state.people, 'name')}  );
            }
            if(event.target.value === 'id')
            {
              //  alert('in pass by2');
            this.setState({people:sortBy(this.state.people, '_id')});
            }
        this.setState.people=people1 ;   
    }

     render(){
       /*step1:
        var peopleAll = this.state.people.map((person)=>((<span>{person._id}</span>)))
       return(
            
        <div>
             PeopleList
             <ul>
             <li>{peopleAll}</li>

             </ul>      

       </div>)*/

       /*Step2 */
        var peopleAll = this.state.people.map( (person, index) => {
            return (<div><li key={person.index}>
                <span>{person.name}</span> <span></span>
                <span>{person._id}</span> 
           
            </li>
            
             </div>
           
            );  
       
        })

      /* return(
        <div>
        PeopleList
        <ul>
        <li>{peopleAll}</li>

        </ul> </div>*/

        return <div>
           
          
            <ul>{peopleAll}</ul>
            <br></br>
            <div><i>By Lodash sortBy</i></div>
             <button value = 'name' onClick={this.passBy }>Sort By name</button> 
             <button value = 'id' onClick={this.passBy }>Sort By Id</button> 
             <br></br>
             <br></br>
             <div><i>by array sort </i></div>
             
           <button value='_id' onClick={this.sortBy1}> Sort By Id </button>
        </div>;


            
       
     }



}

export default PeopleList0;