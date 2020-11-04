
import { ListGroup } from 'react-bootstrap';
import Avatar from 'react-avatar';
import 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore'
import userEvent from '@testing-library/user-event';

export const Chatbox = (props) => {
    // console.log(props)
    return (
        <div>
            <ListGroup variant="flush">
                    { props.message.userId === props.user._id ?
                    <ListGroup.Item><Avatar name="" size="20" round={true} textSizeRatio={1.75} color="green" /> {props.message.message}</ListGroup.Item>
                    : <ListGroup.Item> <Avatar name="" size="20" round={true} textSizeRatio={1.75} color="red" /> {props.message.message}</ListGroup.Item>
                    }
            </ListGroup>
        </div>
    )

}
