import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Dropdown extends React.Component {
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
        <div  className="dropdown-menu-left" style = {{textAlign: 'center',width:"40px", marginRight: 32, marginTop: 1}} >
         <div className="button" class="btn btn-default dropdown-toggle" onClick={this.showDropdownMenu} > {this.props.title} </div>

          { this.state.displayMenu && (this.props.content === "none") ? (

            <ul class="list-group" style = {{listStyleType: "none"}}>
             <li><a class="dropdown-item list-group-item-action" href="/home" style = {{marginLeft: 0}}>Create file</a></li>
             <li><a href="/home" class="dropdown-item list-group-item-action">Create folder</a></li>
           
            </ul>
            ):
            (
              <ul>
              {this.state.displayMenu ? this.props.content.map(item => (<li key = {item} class="dropdown-item list-group-item-action" > {item}</li>)) : null}
              </ul>
            )
          }

       </div>

    );
  }
}

export default Dropdown;
