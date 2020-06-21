import React from 'react';
import TextInput from '../component/Input';


function Home() {
    const [ inputValue, setInputValue ] = React.useState({ name: '' })

    const handleChange = (e) => {
        setInputValue({...inputValue, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <h2 className="home-welcome">
                Welcome to Todist
            </h2>
            <div className="user-entry">
                <TextInput 
                    name='name'
                    placeholder='Enter your name'
                    value={inputValue.name}
                    width= '50%'
                    onChange={handleChange}
                />
                <TextInput 
                    name='location'
                    placeholder='Enter your location'
                    value={inputValue.location}
                    width= '50%'
                    onChange={handleChange}
                />

            </div>
        </div>
    )
}

export default Home
