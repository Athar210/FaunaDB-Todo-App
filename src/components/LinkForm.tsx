import React, { useState } from 'react';
import './index.css'
export default function LinkForm({ refreshLinks }) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const resetForm = () => {
        setName('');
        setDescription('');
        setUrl('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { name, url, description };
        try {
            const res = await fetch('/.netlify/functions/createLink', {
                method: 'POST',
                body: JSON.stringify(body),
            });
            resetForm();
            refreshLinks();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="card" id="pehlainput">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    
                    <div className="form-group">
                        <label htmlFor="url" style={{textAlign:'center'}}>ADD TO DO TASKS </label>
                        <input
                            type="text"
                            name="url"
                            className="form-control"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                         required/>
                    </div>
                   
                    <button type="submit" id="pehlabtn" className="btn btn-primary" >
                        ADD
                    </button>
                </form>
            </div>
        </div>
    );
}