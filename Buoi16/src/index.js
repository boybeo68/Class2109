const app = document.querySelector(".root");
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: {
        name: "Duc",
        class: "T3h",
        gender: "Male",
        age: 30,
      },
    };
  }
  clickButton = () => {
    // this.setState((prevState) => {
    //   console.log("prevState", prevState);
    //   return {
    //     count: prevState.count + 1,
    //     user: {
    //       ...prevState.user,
    //       name: "tung",
    //     },
    //   };
    // });

    this.setState({
      count: this.state.count + 1,
      user: {
        ...this.state.user,
        name: "Tung",
      },
    });
  };

  render() {
    console.log("render màn hinh");
    return (
      <div className="main">
        <Header userParent={this.state.user} />
        <div className="child">
          <header>Du lieu ban dau</header>
          <p>{this.state.count}</p>
          <p>{`Tên tôi là  ${this.state.user.name} tôi học lớp ${this.state.user.class}`}</p>
          <button onClick={this.clickButton}>click me</button>
        </div>
        <Footer />
        <WelcomeFuntion />
      </div>
    );
  }
}

const WelcomeFuntion = () => {
  return (
    <div className="main">
      <div className="child">
        <header>Du lieu ban dau Funtion</header>
      </div>
    </div>
  );
};

class Header extends React.Component {
  render() {
    return <div>This is Header - {this.props.userParent.name} </div>;
  }
}

class Footer extends React.Component {
  render() {
    return <div>This is Footer</div>;
  }
}

ReactDOM.render(<Welcome />, app);
//Component: Thành phần
// 2 loại : class component và function component (hook)
// State: Rule cua react dùng để quản lý trạng thái (data) trong component
// Khi state thay đổi sẽ render lại component
// props: Truyền dữ liệu từ component cha sang component con
// Bài tập: 

// Random số: 
App -> Header, body, footer, 
body -> button, text 
click button text hiển thị random 
