import React, { Component} from 'react';

class Api1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }


    componentDidMount(){
        fetch('https://us.agworld.co/user_api/v1/fields/987654?api_token=secret&season_id=987654')
        .then(res => res.json()).then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });

    }

    render() {
        var {isLoaded, items} = this.state;
        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <ul>
                        {/* {items.map(item => (
                            <li key = {item.id}>
                                {item.name} | Email: {item.mail}
                            </li>
                        ))}; */}
                        {items.area}
                    </ul>
                </div>
            );
        }
    }





}

export default Api1;