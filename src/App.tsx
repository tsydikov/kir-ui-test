import React, {useState} from 'react';
import './App.css';
import { Toggle, Button, Checkbox, IsometricMenu, ProfileCard} from 'ui-kir-on';

function App() {
    const menuItems = [
        {
            text: 'ProfileCard',
            onClick: () => window.location.href = '#ProfileCard',
        },
        {
            text: 'Toggle',
            onClick: () => window.location.href = '#Toggle',
        },
        {
            text: 'Checkbox',
            onClick: () => window.location.href = '#Checkbox',
        },
        {
            text: 'Button',
            onClick: () => window.location.href = '#Button',
        }
    ]
    const profileCardArray = {
        imgSrc: 'https://media-exp2.licdn.com/dms/image/C4D03AQGk4akrww6BxA/profile-displayphoto-shrink_800_800/0/1628169580472?e=1660176000&v=beta&t=AgXB1hZ5Bn1LHZMftr2byhcUtMYBuHZ7B71M7ypGmAk',
        title: 'Tsudikov Kirill',
        titleDesc: 'Full Stack Developer',
        infoArray: [
            {
                title: '342',
                titleDesc: 'Posts',
            },
            {
                title: '120',
                titleDesc: 'Followers',
            },
            {
                title: '285',
                titleDesc: 'Following',
            },
        ],
        buttonsArray: [
            {
                title: 'Follow',
                style: 'follow',
                onClick: () => console.log('Follow')
            },
            {
                title: 'Message',
                style: 'message',
                onClick: () => console.log('Message')
            }
        ]
    }
    const [state, setState] = useState(false)
    return (
        <>
            <div className="block" id="ProfileCard">
                <IsometricMenu menuItems={menuItems}/>
                <div className="flexCenter">
                    <ProfileCard profileCardProps={profileCardArray}/>
                </div>
            </div>
            <div className="block" id="Toggle">
                <IsometricMenu menuItems={menuItems}/>
                <div className="flexCenter column">
                    <Toggle />
                    <Toggle checked={!state} onChange={() => setState(prevState => !prevState)}/>
                </div>
            </div>
            <div className="block" id="Checkbox">
                <IsometricMenu menuItems={menuItems}/>
                <div className="flexCenter column">
                    <Checkbox />
                    <Checkbox checked={!state} onChange={() => setState(prevState => !prevState)}/>
                </div>
            </div>
            <div className="block" id="Button">
                <IsometricMenu menuItems={menuItems}/>
                <div className="flexCenter column">
                    <Button title="disabled Button" onClick={() => setState(prevState => !prevState)} disabled={true}/>
                    <Button title="Button" onClick={() => setState(prevState => !prevState)}/>
                    <Button color="red" title="Button" onClick={() => setState(prevState => !prevState)}/>
                    <Button color="green" title="Button" onClick={() => setState(prevState => !prevState)}/>
                    <Button color="teal" title="Button" onClick={() => setState(prevState => !prevState)}/>
                </div>
            </div>
        </>
    );
}

export default App;
