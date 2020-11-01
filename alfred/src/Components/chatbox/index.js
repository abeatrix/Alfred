import {useRef, useState} from 'react';
import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { isAuth } from '../../config/auth';

firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "chatbox-c6fc1.firebaseapp.com",
    databaseURL: process.env.REACT_APP_FIREBASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: "chatbox-c6fc1.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: "G-RY3YN8GYD6",
})

export default function Chatroom() {

    const allMessages = firestore.collection('messages');
    const messages = messages.orderBy('createdAt')

    const [ msgData ] = useCollectionData (messages, { idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const currentMsg = useRef()

    const sendMsgs = async(e) => {
        e.preventDefault();

        await allMessages.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            userId: isAuth()._id,
        })

        setFormValue('');

        currentMsg.current.scrollIntoView({behavior: 'auto'})
    }
    return (
        <>
         <Card style={{ margin: '5%' }}>
            <Card.Body>
                <Card.Title>Welcome to Live Chat!</Card.Title>
                < currentMsg
                {msgData && msgData.map(msg => <Chatbox key={msg.id} message={msg} />)}
                <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control type="text" name='symbol' placeholder="Enter Your Message Here" />
                </Form.Group>
                    <Button variant="success" type='submit'>Send</Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}


export default function Chatbox(props) {
    return (
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>{text}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}
