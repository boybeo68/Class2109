function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Welcome2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    };

    onclick = () => {
        this.count++
        console.log(this.count);
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        console.log('redner');
        return (
            <div className="wrap">
                <div className="childredn">
                    <p>Laboris ipsum aliqua reprehenderit et labore reprehenderit dolore.</p>
                    <p>Laboris ipsum aliqua reprehenderit et labore reprehenderit dolore. <h1>{this.state.count} </h1> </p>
                    <button onClick={this.onclick}>click me</button>
                </div>
            </div>
        );
    }
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1 className="classh1">
        Hello, {formatName(user)}!
    </h1>
);


ReactDOM.render(
    <Welcome2 />,
    document.getElementById('root')
);