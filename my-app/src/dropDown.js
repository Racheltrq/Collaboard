import React from 'react';
import './css/dropDown.css'
import CreateFile from "./createFile";
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
        <div  className="dropdown-menu-left" id = 'dropDownMenuLeft'>
            <div className="button" class="btn btn-default dropdown-toggle" onClick={this.showDropdownMenu} > {this.props.title} </div>

            { this.state.displayMenu && (this.props.content === "none") ? (

            <div class="list-group" id = 'listGroup'>
                <a href = "/createFile" class="dropdown-item list-group-item-action">Create File</a>
                <a href="/createFolder" class="dropdown-item list-group-item-action">Create folder</a>

            </div>
            ):
            (
            <div>
            {this.state.displayMenu ? this.props.content.map(item => (<a key = {item} class="dropdown-item list-group-item-action" > {item}</a>)) : null}
            </div>
            )
            }

        </div>

    );
  }
}

export default Dropdown;
