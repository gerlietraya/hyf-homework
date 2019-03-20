import React from "react";


class List extends React.Component {
    render(){
        const list = this.props.items.map((item) => <li>{item}</li>)
        return <ul>
            {list}
        </ul>;
    }
}

const todos = [
    'Get out of bed, Wed Sep 13 2017',
    'Brush teeth, Thu Sep 14 2017',
    'Eat breakfast, Fri Sep 15 2017'
]


class Header extends React.Component {
    render() {
        return(
            <header id="title">
                <h1>TODO LIST</h1>
                <List items={todos} />
            
            </header>

           
            
        );
    }
}

export default Header;