import React from 'react';

export default function LinkCard({ link, refreshLinks }) {
    const archiveLink = async () => {
        link.archived = true;
        try {
            await fetch('/.netlify/functions/updateLink', {
                method: 'PUT',
                body: JSON.stringify(link),
            });
            refreshLinks();
        } catch (error) {
            console.error('AHHH', error);
        }
    };

    const deleteLink = async () => {
        const id = link._id;
        try {
            await fetch('/.netlify/functions/deleteLink', {
                method: 'DELETE',
                body: JSON.stringify({ id }),
            });
            refreshLinks();
        } catch (error) {
            console.error('AHHH', error);
        }
    };
    return (
        <div className="card mb-3" id='card1' style={{textTransform:'capitalize'}}>
            <div id='card2' className="card-body">
<ul>
    <li>
    <h6 style={{fontSize:'20px'}} id="hh2" >{link.url } </h6>
    </li>
</ul>
            </div>
            <div >
                <button className="btn btn-primary mr-2" id="btn1"  onClick={archiveLink}>
                    Mark as Done
                </button>
                <button className="btn btn-danger" id="btn2" onClick={deleteLink}>
                    Remove
                </button>
            </div>
        </div>
    );
}