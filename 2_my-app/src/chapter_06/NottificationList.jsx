import {Component} from "react";
import Notification from "./Notification";

const reservedNotifications =[
    {
        id : 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다."
    },
    {
        id : 2,
        message: "점심식사 시간입니다."
    },
    {
        id : 3,
        message: "이제 곧 미팅이 시작됩니다."
    }
];

class NotificationList extends Component{
    constructor(props){
        super(props);

        this.state = {
            notifications: []   //빈 배열이다
        }
    }

    componentDidMount(){
        const {notifications} = this.state;

        this.timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications
                });
            }else{
                this.setState({
                    notifications:[]
                })
                clearInterval(this.timer);
            }
        }, 1000);
    }

    //컴포넌트가 죽기 전에 (Unmount) 타이머를 청소해준다
    //왜냐하면 StrictMode가 개발모드에서 잠재적인 버그를 찾기 위해 컴포넌트를 강제로 두번 렌더링하기 때문이다
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    render(){
        return(
            <div>
                {this.state.notifications.map((notification) =>{
                    return <Notification 
                            key={notification.id}
                            id={notification.id}
                            message={notification.message} />
                })}
            </div>
        )
    }
}

export default NotificationList;