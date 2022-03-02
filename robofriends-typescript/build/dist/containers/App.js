var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.onSearchChange = function (event) {
            _this.setState({ searchfield: event.currentTarget.value });
        };
        _this.state = {
            robots: [],
            searchfield: ''
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(function (response) { return response.json(); })
            .then(function (users) { _this.setState({ robots: users }); });
    };
    App.prototype.render = function () {
        var _a = this.state, robots = _a.robots, searchfield = _a.searchfield;
        var filteredRobots = robots.filter(function (robot) {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robots.length ?
            React.createElement("h1", null, "Loading") :
            (React.createElement("div", { className: 'tc' },
                React.createElement("h1", { className: 'f1' }, "RoboFriends"),
                React.createElement(SearchBox, { searchChange: this.onSearchChange }),
                React.createElement(Scroll, null,
                    React.createElement(CardList, { robots: filteredRobots }))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map