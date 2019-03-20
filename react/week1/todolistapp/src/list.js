import React from "react";

class List extends React.Component {
    render(){
        const list = this.props.items.map((item) => <li>{item}</li>)
        return <ul>
            {list}
        </ul>;
    }
}
import default List;