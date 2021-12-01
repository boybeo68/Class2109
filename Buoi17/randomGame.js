
class Main extends React.Component {
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
        const { countGuesting, text, randomNumber } = this.state
        let convertText = Number(text)// ParsetInt
        if (convertText > randomNumber) {
            this.setState({ guess: 'big' })
        } else if (convertText < randomNumber) {
            this.setState({ guess: 'small' })
        } else {
            this.setState({ guess: 'correct' })
        }
        this.setState({
            countGuesting: countGuesting + 1
        })
    }
    GuessInput = (text) => {
        this.setState({
            text: text.target.value
        })
    }
    renderBackground = () => {
        if (this.state.guess === 'correct') {
            return 'red'
        } return 'gray'
    }
    renderFooter = () => {
        if (this.state.guess === 'correct') {
            return (<p>You guess the number is {this.state.guess}</p>)
        } return (<p>Vui lòng nhập số lần đầu tiên</p>)
    }
    render() {
        const { countGuesting, text, guess } = this.state
        return (
            <div>
                {/* Header */}
                <div className="jumbotron text-center" style={{ backgroundColor: this.renderBackground() }} >
                    <h1>Getting random number</h1>
                    <p>Tôi đã chọn một số random trong khoảng 1 đến 100, bạn có thể đoán được?</p>
                </div>
                {/* Body */}
                <div className="body">
                    <button onClick={this.newGame}>New game</button>
                    <h4>Số lần bạn đã đoán là: {countGuesting}</h4>
                    <h4>Số bạn đoán là</h4>
                    <input type="number" name="guess" id="guess" onChange={this.GuessInput} />
                    <button className="btn-success" onClick={this.guesing}> Đoán </button>
                    {/* {guess && (<p>You guess the number is {guess}</p>)} */}
                    {this.renderFooter()}

                </div>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'))