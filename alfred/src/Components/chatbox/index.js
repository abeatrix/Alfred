import {useState, useRef} from 'react';
import { Card, Form, Button, Spinner } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {Chatbox} from './Components/Chatbox'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { isAuth } from '../../config/auth';
import { AddaStockBtnsWrapper } from '../Portfolio/PortfolioElements';

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.REACT_APP_FIREBASE_API,
        authDomain: "alfred-d7569.firebaseapp.com",
        databaseURL: process.env.REACT_APP_FIREBASE_URL,
        projectId: "alfred-d7569",
        storageBucket: "alfred-d7569.appspot.com",
        messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
        appId: process.env.REACT_APP_FIREBASE_APPID,
        measurementId: "G-MS172H2LCY"
    })
}

export const Chatroom = () => {

    const user = isAuth()

    const firestore = firebase.firestore();

    const allMessages = firestore.collection('alfredtalks');

    const messages = allMessages.orderBy('createdAt', 'desc').limit(5);

    const [ alfredtalks ] = useCollectionData(messages, {idField: 'id'});

    const [formValue, setFormValue] = useState(['']);

    const currentView = useRef();

    const sendMsgs = async(e) => {
        e.preventDefault();

        await allMessages.add({
            message: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            userId: user._id
        })

        setFormValue('');
        currentView.current.scrollIntoView({behavior: 'auto'});
    }

    return (
        <>
        <div ref={currentView}></div>
        <Card style={{ margin: '5%' }}>
        { alfredtalks === undefined ?
        <Spinner animation="border" variant="success" /> :
            <Card.Body>
                <Card.Title>Welcome to Live Chat!</Card.Title>
                {
                    alfredtalks && alfredtalks ?
                    alfredtalks && alfredtalks.map(msg => <Chatbox key={msg.id} message={msg} user={user}/>)
                    : <Chatbox key={alfredtalks.id} message={alfredtalks.message} />
                }
                <Form onSubmit={sendMsgs}>
                <Form.Group controlId="chatboxFormGroup">
                    <Form.Control value={formValue} onChange={(e) => setFormValue(e.target.value)} type="text" name='message' placeholder="Enter Your Message Here" />
                </Form.Group>
                <AddaStockBtnsWrapper>
                    { user ? <Button variant='success' type='submit'>Send</Button> : null }
                </AddaStockBtnsWrapper>
                </Form>
            </Card.Body>
        }
        </Card>
        </>
    )

}
