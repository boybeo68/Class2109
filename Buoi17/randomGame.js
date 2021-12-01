
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countGuesting: 0,
            guess: ''
        }
    };
    // props: truyền từ cha xuống con 
    // truyền dữ liệu từ con lên cha . sử dụng callback
    getParamChild = (countGuesting, guess) => {
        console.log(guess, countGuesting);
        this.setState({
            countGuesting: countGuesting,
            guess: guess
        })

    }
    dataToParent = (text) => {
        alert(text)
    }
    render() {

        return (
            <div>
                <Header guess={this.state.guess} countGuesting={this.state.countGuesting} />
                <Body getParamChild={this.getParamChild} data={'Toi la tung'} dataToParent={this.dataToParent} />
            </div>
        );
    }
}
class Header extends React.Component {

    renderBackground = () => {
        if (this.props.guess === 'correct') {
            return 'red'
        } return 'gray'
    }
    render() {
        return (
            <div className="jumbotron text-center" style={{ backgroundColor: this.renderBackground() }} >
                <h1>Getting random number</h1>
                <p>Tôi đã chọn một số random trong khoảng 1 đến 100, bạn có thể đoán được?</p>
                {(7 - this.props.countGuesting) > 0 ? (<p>Số điểm của bạn còn {7 - this.props.countGuesting}</p>) : (<p> You lose</p>)}
            </div >

        );
    }
}


class Body extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            randomNumber: null,
            countGuesting: 0,
            text: '',
            guess: ''
        };
    };

    componentDidMount = () => {
        this.setState({
            randomNumber: this.getRandom()
        })
    }

    getRandom = () => {
        let random = Math.floor((Math.random() * 100) + 1);
        console.log(random);
        return random
    }

    newGame = () => {
        this.setState({
            randomNumber: this.getRandom(),
            countGuesting: 0
        })
    }
    // '', false, null, undefine
    guesing = () => {
        const { countGuesting, text, randomNumber, guess } = this.state
        let convertText = Number(text)// ParsetInt
        if (convertText > randomNumber) {
            this.setState({ guess: 'big', countGuesting: countGuesting + 1 }, () => {
                this.props.getParamChild(this.state.countGuesting, this.state.guess)
            })
        } else if (convertText < randomNumber) {
            this.setState({ guess: 'small', countGuesting: countGuesting + 1 }, () => {
                this.props.getParamChild(this.state.countGuesting, this.state.guess)
            })
        } else {
            this.setState({ guess: 'correct', countGuesting: countGuesting + 1 }, () => {
                this.props.getParamChild(this.state.countGuesting, this.state.guess)
            })
        }
    }
    GuessInput = (text) => {
        this.setState({
            text: text.target.value
        })
    }

    renderFooter = () => {
        if (this.state.guess === 'correct') {
            return (<p>You guess the number is {this.state.guess}</p>)
        } return (<p>Vui lòng nhập số lần đầu tiên</p>)
    }
    render() {
        const { countGuesting, text, guess } = this.state
        return (
            <div className="body">
                <button onClick={this.newGame}>New game</button>
                <h4>Số lần bạn đã đoán là: {countGuesting}</h4>
                <h4>Số bạn đoán là</h4>
                <input type="number" name="guess" id="guess" onChange={this.GuessInput} />
                <button className="btn-success" onClick={this.guesing}> Đoán </button>
                {guess && (<p>You guess the number is {guess}</p>)}

            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'))