import {useRef, useState} from 'react';
import { ListGroup } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore'

export const Chatbox = (props) => {

    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.message}</ListGroup.Item>
            </ListGroup>
        </div>
    )

}
