import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class folderDropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (

        <div  className="dropdown" style = {{textAlign: 'center',width:"40px", marginRight: 30, marginTop: 1}} >
         <div className="button" class="btn btn-default dropdown-toggle" onClick={this.showDropdownMenu} > Folders </div>

          { this.state.displayMenu ? (
            <ul class="list-group" style = {{listStyleType: "none"}}>
             <li><a class="dropdown-item list-group-item-action" href="/home" style = {{marginLeft: 0}}>Create file</a></li>
             <li><a href="/home" class="dropdown-item list-group-item-action">Create folder</a></li>
           
            </ul>
            ):
            (
              null
            )
          }

       </div>

    );
  }
}

export default folderDropdown;