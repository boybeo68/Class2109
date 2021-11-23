var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
function Welcome(props) {
    return React.createElement(
        'h1',
        null,
        'Hello, ',
        props.name
    );
}

var Welcome2 = function (_React$Component) {
    _inherits(Welcome2, _React$Component);

    function Welcome2(props) {
        _classCallCheck(this, Welcome2);

        var _this = _possibleConstructorReturn(this, (Welcome2.__proto__ || Object.getPrototypeOf(Welcome2)).call(this, props));

        _this.onclick = function () {
            _this.count++;
            console.log(_this.count);
            _this.setState({
                count: _this.state.count + 1
            });
        };

        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Welcome2, [{
        key: 'render',
        value: function render() {
            console.log('redner');
            return React.createElement(
                'div',
                { className: 'wrap' },
                React.createElement(
                    'div',
                    { className: 'childredn' },
                    React.createElement(
                        'p',
                        null,
                        'Laboris ipsum aliqua reprehenderit et labore reprehenderit dolore.'
                    ),
                    React.createElement(
                        'p',
                        null,
                        'Laboris ipsum aliqua reprehenderit et labore reprehenderit dolore. ',
                        React.createElement(
                            'h1',
                            null,
                            this.state.count,
                            ' '
                        ),
                        ' '
                    ),
                    React.createElement(
                        'button',
                        { onClick: this.onclick },
                        'click me'
                    )
                )
            );
        }
    }]);

    return Welcome2;
}(React.Component);

var user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

var element = React.createElement(
    'h1',
    { className: 'classh1' },
    'Hello, ',
    formatName(user),
    '!'
);

ReactDOM.render(React.createElement(Welcome2, null), document.getElementById('root'));