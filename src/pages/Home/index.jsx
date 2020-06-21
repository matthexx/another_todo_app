import React from 'react';
import TextInput from '../../component/Input';
import './style.css';
import Button from '../../component/Button';
import { useHistory } from "react-router-dom";


function Home(props) {
    const { setUser  } = props
    const [ inputValue, setInputValue ] = React.useState({ name: '', location: '' })
    let history = useHistory();

    const handleChange = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        setUser(inputValue.name);
        history.push('/todo');
    }

    console.log(props)
    return (
        <div>
            <h2 className="home-welcome">
                Welcome to Todist
            </h2>
            <div className="user-entry">
                <div className="user-entry_input">
                    <TextInput 
                        name='name'
                        placeholder='Enter your name'
                        value={inputValue.name}
                        onChange={handleChange}
                    />
                    <TextInput 
                        name='location'
                        placeholder='Enter your location'
                        value={inputValue.location}
                        onChange={handleChange}
                    />

                </div>
                    <Button 
                        label='ENTER'
                        onClick={handleSubmit}
                        disabled={ (!Boolean(inputValue.name) || !Boolean(inputValue.location)) }
                    />
                <div>

                </div>
            </div>
        </div>
    )
}

export default Home
