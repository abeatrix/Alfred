
import { ListGroup } from 'react-bootstrap';
import Avatar from 'react-avatar';
import 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore'

export const Chatbox = (props) => {
    console.log(props)
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Avatar name="Me" size="20" round={true} textSizeRatio={1.75} color="green" /> {props.message.message}
                </ListGroup.Item>
            </ListGroup>
        </div>
    )

}
