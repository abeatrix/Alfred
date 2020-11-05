
import { ListGroup } from 'react-bootstrap';
import Avatar from 'react-avatar';
import 'firebase/firestore';
import { useRecoilState } from "recoil";
import {userState} from '../../../recoil/atoms'

export const Chatbox = (props) => {

    const [user, setUser] = useRecoilState(userState);

    // console.log(props)

    // console.log(user)
    return (
        <div>
            <ListGroup variant="flush">
                    { props.message.userId === user.data._id?
                    <ListGroup.Item><Avatar name="" size="20" round={true} textSizeRatio={1.75} color="green" /> {props.message.message}</ListGroup.Item>
                    : <ListGroup.Item> <Avatar name="" size="20" round={true} textSizeRatio={1.75} color="red" /> {props.message.message}</ListGroup.Item>
                    }
            </ListGroup>
        </div>
    )

}
