import {Component} from "react";

const styles={
    wrapper :{
        magin : 8,
        padding : 8,
        display: "flex",
        flexDirection : "row",
        border : "1px solid grey",
        borderRadius : 16
    },
    messageText : {
        color : "black",
        fontSize : 16
    }
};

class Notification extends Component{
    constructor(props){
        super(props);

        this.state = {};    //아무런 데이터도 없다
    }

    componentDidMount(){
        console.log(`${this.props.id} componentDidMount() called.`);
    }

    componentDidUpdate(){
        console.log(`${this.props.id} componentDidUpdate() called.`)
    }

    componentWillUnmount(){
        console.log(`${this.props.id}  componentWillUnmount() called.`)
    }

    render(){
        return(
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;