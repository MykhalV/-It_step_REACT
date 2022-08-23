import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import UUID
import { v4 as uuidv4 } from "uuid";

// Import components
import Header from "./Componets/Header/Header";
import ContactList from "./Componets/ContactList/ContactList";
import Sidebar from "./Componets/Sidebar/Sidebar";

class App extends React.Component {
  state = {
    ContactListArr: [
      {
        id: uuidv4(),
        name: "Alexander Ver",
        status: "Work",
        phone: "+1-800-600-9898",
        email: "alex@email.com",
        gender: "men",
        avatar: "51",
        favorite: false,
      },
      {
        id: uuidv4(),
        name: "Eva Anderson",
        status: "Private",
        phone: "097-123-56-75",
        email: "eva@email.com",
        gender: "women",
        avatar: "49",
        favorite: true,
      },
      {
        id: uuidv4(),
        name: "Lisa Budosh",
        status: "Friends",
        phone: "097-636-33-44",
        email: "lisa@email.com",
        gender: "women",
        avatar: "23",
        favorite: false,
      },
      {
        id: uuidv4(),
        name: "Peter Anderson",
        status: "Family",
        phone: "097-312-44-22",
        email: "peter@email.com",
        gender: "men",
        avatar: "32",
        favorite: false,
      },
      {
        id: uuidv4(),
        name: "Zoe Anderson",
        status: "Family",
        phone: "097-444-23-44",
        email: "zoe@email.com",
        gender: "women",
        avatar: "19",
        favorite: false,
      },
    ],
  };




  onChangeStatus = (id) => {
    const index = this.state.ContactListArr.findIndex((i) => i.id === id); // знаходимо ід елемента масиву на який клікнули
    let tmpList = this.state.ContactListArr.slice(); // повна копія массиву (щоб в копії зробити зміни та вкінці замінити оригінал на копію зі знімани)
    switch (tmpList[index].status) {
      case "Friends":
        tmpList[index].status = "Work";
        break;
      case "Work":
        tmpList[index].status = "Family";
        break;
      case "Family":
        tmpList[index].status = "Private";
        break;
      case "Private":
        tmpList[index].status = "Friends";
        break;
      default:
    }
    this.setState({
      ContactListArr: tmpList, // заміна оригіналу на копію slice()
    });
  };


onChangeStatusStar = (id) => {
  const index = this.state.ContactListArr.findIndex((i) => i.id === id); // знаходимо ід елемента масиву на який клікнули
  let tmpList = this.state.ContactListArr.slice(); // повна копія массиву (щоб в копії зробити зміни та вкінці замінити оригінал на копію зі знімани)
  switch (tmpList[index].favorite) {
    case true:
      tmpList[index].favorite = false;
      break;
    default:
      tmpList[index].favorite  = true;
      break;
  }
  this.setState({
    ContactListArr: tmpList, // заміна оригіналу на копію slice()
  });

}



  render() {
    const { ContactListArr } = this.state;
    
    return (
      <>
        <Header />
        <div className="container bootstrap snippets bootdeys bootdey">
          <div className="row decor-default">
            <Sidebar ListSidebar = {ContactListArr}/>
            <ContactList
              List={ContactListArr}
              onChangeStatus={this.onChangeStatus}
              onChangeStatusStar = {this.onChangeStatusStar}
            />
          </div>
        </div>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{<App />}</React.StrictMode>);
