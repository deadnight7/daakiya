

class TypesOfFood extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    user : {}
  }
  async componentDidMount() {

    console.log("Loading inside react")
    let user = await firebase.auth ().onAuthStateChanged();

    if (user) {
      // User is signed in.
      console.log("user details COMDIDMOUNT", user)
      $("#emailId").text(userDetails.email)
      this.setState({user:user})
    } else {
      // No user is signed in.

    }

  }

  render() {

    return (
      <div>Email.
        {/*{this.state.user.email}*/}
        {/*<h1>Types of Food:</h1>*/}
        {/* change code above this line */}
      </div>
    );
  }
};

const domContainer = document.querySelector('#react_container');
//ReactDOM.render(<TypesOfFood/>, domContainer);
